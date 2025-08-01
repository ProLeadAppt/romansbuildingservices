import React, { useState, useMemo, useCallback } from 'react';
import { cn } from "@/lib/utils";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell, 
  TableCaption,
  TableFooter
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronUp, ChevronDown, ChevronsUpDown, Search, Filter } from 'lucide-react';

// Enhanced Table Types
export interface TableColumn<T = any> {
  key: string;
  header: string;
  accessorKey?: string;
  cell?: (item: T) => React.ReactNode;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
  scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
}

export interface TableData {
  id: string | number;
  [key: string]: any;
}

export interface AccessibleDataTableProps<T extends TableData> {
  data: T[];
  columns: TableColumn<T>[];
  caption?: string;
  summary?: string;
  selectable?: boolean;
  searchable?: boolean;
  filterable?: boolean;
  paginated?: boolean;
  pageSize?: number;
  emptyMessage?: string;
  ariaLabel?: string;
  className?: string;
  onSelectionChange?: (selectedIds: (string | number)[]) => void;
  onRowClick?: (item: T) => void;
}

type SortDirection = 'asc' | 'desc' | 'none';

interface SortState {
  key: string | null;
  direction: SortDirection;
}

// Main Accessible Data Table Component
export function AccessibleDataTable<T extends TableData>({
  data,
  columns,
  caption,
  summary,
  selectable = false,
  searchable = false,
  filterable = false,
  paginated = false,
  pageSize = 10,
  emptyMessage = "No data available",
  ariaLabel,
  className,
  onSelectionChange,
  onRowClick
}: AccessibleDataTableProps<T>) {
  const [sortState, setSortState] = useState<SortState>({ key: null, direction: 'none' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState<Set<string | number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [filterValues, setFilterValues] = useState<Record<string, string>>({});

  // Handle sorting
  const handleSort = useCallback((columnKey: string) => {
    setSortState(prev => {
      if (prev.key === columnKey) {
        const newDirection: SortDirection = 
          prev.direction === 'none' ? 'asc' : 
          prev.direction === 'asc' ? 'desc' : 'none';
        return { key: columnKey, direction: newDirection };
      }
      return { key: columnKey, direction: 'asc' };
    });
  }, []);

  // Handle selection
  const handleSelectAll = useCallback((checked: boolean) => {
    if (checked) {
      const allIds = new Set(data.map(item => item.id));
      setSelectedIds(allIds);
      onSelectionChange?.(Array.from(allIds));
    } else {
      setSelectedIds(new Set());
      onSelectionChange?.([]);
    }
  }, [data, onSelectionChange]);

  const handleSelectRow = useCallback((id: string | number, checked: boolean) => {
    const newSelected = new Set(selectedIds);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedIds(newSelected);
    onSelectionChange?.(Array.from(newSelected));
  }, [selectedIds, onSelectionChange]);

  // Filter and sort data
  const processedData = useMemo(() => {
    let filtered = data;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        columns.some(column => {
          const value = column.accessorKey ? item[column.accessorKey] : item[column.key];
          return value?.toString().toLowerCase().includes(searchTerm.toLowerCase());
        })
      );
    }

    // Apply column filters
    Object.entries(filterValues).forEach(([key, value]) => {
      if (value) {
        filtered = filtered.filter(item => {
          const itemValue = item[key]?.toString().toLowerCase();
          return itemValue?.includes(value.toLowerCase());
        });
      }
    });

    // Apply sorting
    if (sortState.key && sortState.direction !== 'none') {
      filtered = [...filtered].sort((a, b) => {
        const aValue = a[sortState.key!];
        const bValue = b[sortState.key!];
        
        if (aValue === bValue) return 0;
        
        const comparison = aValue < bValue ? -1 : 1;
        return sortState.direction === 'asc' ? comparison : -comparison;
      });
    }

    return filtered;
  }, [data, searchTerm, filterValues, sortState, columns]);

  // Pagination
  const paginatedData = useMemo(() => {
    if (!paginated) return processedData;
    
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return processedData.slice(start, end);
  }, [processedData, currentPage, pageSize, paginated]);

  const totalPages = Math.ceil(processedData.length / pageSize);

  // Get cell content
  const getCellContent = useCallback((item: T, column: TableColumn<T>) => {
    if (column.cell) {
      return column.cell(item);
    }
    return column.accessorKey ? item[column.accessorKey] : item[column.key];
  }, []);

  const isAllSelected = selectedIds.size === data.length && data.length > 0;
  const isIndeterminate = selectedIds.size > 0 && selectedIds.size < data.length;

  return (
    <div className={cn("space-y-4", className)}>
      {/* Table Controls */}
      {(searchable || filterable) && (
        <div className="flex flex-col sm:flex-row gap-4">
          {searchable && (
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search all columns..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  aria-label="Search table data"
                />
              </div>
            </div>
          )}
          
          {filterable && (
            <div className="flex gap-2">
              {columns.filter(col => col.filterable).map(column => (
                <Select
                  key={column.key}
                  value={filterValues[column.key] || ''}
                  onValueChange={(value) => 
                    setFilterValues(prev => ({ ...prev, [column.key]: value }))
                  }
                >
                  <SelectTrigger className="w-40">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder={`Filter ${column.header}`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All {column.header}</SelectItem>
                    {/* Add unique values for this column */}
                    {Array.from(new Set(data.map(item => item[column.key]))).map(value => (
                      <SelectItem key={String(value)} value={String(value)}>
                        {String(value)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Accessible Table */}
      <div className="rounded-md border">
        <Table 
          aria-label={ariaLabel || `Data table${caption ? `: ${caption}` : ''}`}
          role="table"
        >
          {caption && (
            <TableCaption>
              {caption}
              {summary && (
                <div className="mt-2 text-xs text-muted-foreground">
                  {summary}
                </div>
              )}
            </TableCaption>
          )}
          
          <TableHeader>
            <TableRow>
              {selectable && (
                <TableHead scope="col" className="w-12">
                  <Checkbox
                    checked={isAllSelected}
                    onCheckedChange={(checked) => {
                      // Handle indeterminate state via DOM manipulation
                      const checkbox = document.querySelector('[data-select-all]') as HTMLInputElement;
                      if (checkbox) checkbox.indeterminate = isIndeterminate;
                      handleSelectAll(checked as boolean);
                    }}
                    data-select-all
                    aria-label={`Select all ${data.length} rows`}
                  />
                </TableHead>
              )}
              
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  scope={column.scope || 'col'}
                  sortable={column.sortable}
                  sortDirection={
                    sortState.key === column.key ? sortState.direction : 'none'
                  }
                  onSort={() => column.sortable && handleSort(column.key)}
                  className={cn(
                    column.width && `w-${column.width}`,
                    column.align === 'center' && 'text-center',
                    column.align === 'right' && 'text-right'
                  )}
                  aria-label={
                    column.sortable 
                      ? `${column.header}, sortable column, currently ${
                          sortState.key === column.key ? sortState.direction : 'not sorted'
                        }`
                      : column.header
                  }
                >
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell 
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  className="text-center py-8 text-muted-foreground"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((item, rowIndex) => (
                <TableRow
                  key={item.id}
                  className={cn(
                    onRowClick && "cursor-pointer",
                    selectedIds.has(item.id) && "bg-muted/50"
                  )}
                  onClick={() => onRowClick?.(item)}
                  aria-selected={selectedIds.has(item.id)}
                  role="row"
                >
                  {selectable && (
                    <TableCell>
                      <Checkbox
                        checked={selectedIds.has(item.id)}
                        onCheckedChange={(checked) => 
                          handleSelectRow(item.id, checked as boolean)
                        }
                        aria-label={`Select row ${rowIndex + 1}`}
                      />
                    </TableCell>
                  )}
                  
                  {columns.map((column, cellIndex) => (
                    <TableCell
                      key={column.key}
                      scope={cellIndex === 0 ? 'row' : undefined}
                      className={cn(
                        column.align === 'center' && 'text-center',
                        column.align === 'right' && 'text-right'
                      )}
                    >
                      {getCellContent(item, column)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
          
          {paginated && totalPages > 1 && (
            <TableFooter>
              <TableRow>
                <TableCell colSpan={columns.length + (selectable ? 1 : 0)}>
                  <TablePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={processedData.length}
                    pageSize={pageSize}
                    onPageChange={setCurrentPage}
                  />
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </div>

      {/* Screen Reader Summary */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {processedData.length === 0 
          ? emptyMessage
          : `Showing ${paginatedData.length} of ${processedData.length} ${processedData.length === 1 ? 'row' : 'rows'}${
              selectedIds.size > 0 ? `, ${selectedIds.size} selected` : ''
            }`
        }
      </div>
    </div>
  );
}

// Table Pagination Component
interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

function TablePagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange
}: TablePaginationProps) {
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="flex items-center justify-between py-2">
      <div className="text-sm text-muted-foreground">
        Showing {startItem} to {endItem} of {totalItems} entries
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="Go to previous page"
        >
          Previous
        </Button>
        
        <div className="flex items-center gap-1">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }
            
            return (
              <Button
                key={pageNum}
                variant={currentPage === pageNum ? "default" : "outline"}
                size="sm"
                onClick={() => onPageChange(pageNum)}
                aria-label={`Go to page ${pageNum}`}
                aria-current={currentPage === pageNum ? 'page' : undefined}
              >
                {pageNum}
              </Button>
            );
          })}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Go to next page"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

// Simple accessible table for basic data display
interface SimpleAccessibleTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  caption?: string;
  summary?: string;
  className?: string;
}

export function SimpleAccessibleTable({
  headers,
  rows,
  caption,
  summary,
  className
}: SimpleAccessibleTableProps) {
  return (
    <Table className={className} aria-label={caption || "Data table"}>
      {caption && (
        <TableCaption>
          {caption}
          {summary && (
            <div className="mt-2 text-xs text-muted-foreground">
              {summary}
            </div>
          )}
        </TableCaption>
      )}
      
      <TableHeader>
        <TableRow>
          {headers.map((header, index) => (
            <TableHead key={index} scope="col">
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell 
                key={cellIndex}
                scope={cellIndex === 0 ? 'row' : undefined}
              >
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}