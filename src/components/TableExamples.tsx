import React from 'react';
import { AccessibleDataTable, SimpleAccessibleTable, TableColumn, TableData } from '@/components/AccessibleDataTable';

// Example data types
interface Employee extends TableData {
  id: number;
  name: string;
  department: string;
  position: string;
  email: string;
  startDate: string;
  salary: number;
  status: 'active' | 'inactive';
}

interface Project extends TableData {
  id: string;
  name: string;
  client: string;
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold';
  startDate: string;
  endDate: string;
  budget: number;
  manager: string;
}

// Example Employees Table
export function EmployeesTableExample() {
  const employees: Employee[] = [
    {
      id: 1,
      name: 'John Smith',
      department: 'Engineering',
      position: 'Senior Developer',
      email: 'john.smith@example.com',
      startDate: '2022-01-15',
      salary: 95000,
      status: 'active'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      department: 'Design',
      position: 'UX Designer',
      email: 'sarah.johnson@example.com',
      startDate: '2021-06-01',
      salary: 78000,
      status: 'active'
    },
    {
      id: 3,
      name: 'Mike Brown',
      department: 'Engineering',
      position: 'DevOps Engineer',
      email: 'mike.brown@example.com',
      startDate: '2020-03-10',
      salary: 88000,
      status: 'inactive'
    }
  ];

  const columns: TableColumn<Employee>[] = [
    {
      key: 'name',
      header: 'Employee Name',
      accessorKey: 'name',
      sortable: true,
      scope: 'row'
    },
    {
      key: 'department',
      header: 'Department',
      accessorKey: 'department',
      sortable: true,
      filterable: true
    },
    {
      key: 'position',
      header: 'Position',
      accessorKey: 'position',
      sortable: true
    },
    {
      key: 'email',
      header: 'Email',
      accessorKey: 'email',
      cell: (employee) => (
        <a 
          href={`mailto:${employee.email}`}
          className="text-primary hover:underline focus:underline focus:outline-none"
        >
          {employee.email}
        </a>
      )
    },
    {
      key: 'startDate',
      header: 'Start Date',
      accessorKey: 'startDate',
      sortable: true,
      cell: (employee) => new Date(employee.startDate).toLocaleDateString()
    },
    {
      key: 'salary',
      header: 'Salary',
      accessorKey: 'salary',
      sortable: true,
      align: 'right',
      cell: (employee) => `$${employee.salary.toLocaleString()}`
    },
    {
      key: 'status',
      header: 'Status',
      accessorKey: 'status',
      filterable: true,
      cell: (employee) => (
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
          employee.status === 'active' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
        }`}>
          {employee.status}
        </span>
      )
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Employee Directory</h2>
      <AccessibleDataTable
        data={employees}
        columns={columns}
        caption="List of all company employees with their details"
        summary="This table shows employee information including names, departments, positions, contact details, start dates, salaries, and current employment status. You can sort by most columns and filter by department and status."
        selectable
        searchable
        filterable
        paginated
        pageSize={10}
        ariaLabel="Employee directory table"
        onSelectionChange={(selectedIds) => {
          console.log('Selected employees:', selectedIds);
        }}
        onRowClick={(employee) => {
          console.log('Clicked employee:', employee);
        }}
      />
    </div>
  );
}

// Example Projects Table
export function ProjectsTableExample() {
  const projects: Project[] = [
    {
      id: 'proj-001',
      name: 'Website Redesign',
      client: 'Acme Corp',
      status: 'in-progress',
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      budget: 150000,
      manager: 'Sarah Johnson'
    },
    {
      id: 'proj-002',
      name: 'Mobile App Development',
      client: 'Tech Startup',
      status: 'planning',
      startDate: '2024-03-01',
      endDate: '2024-12-31',
      budget: 250000,
      manager: 'John Smith'
    },
    {
      id: 'proj-003',
      name: 'Database Migration',
      client: 'Legacy Systems Inc',
      status: 'completed',
      startDate: '2023-09-01',
      endDate: '2024-01-31',
      budget: 75000,
      manager: 'Mike Brown'
    }
  ];

  const columns: TableColumn<Project>[] = [
    {
      key: 'name',
      header: 'Project Name',
      accessorKey: 'name',
      sortable: true,
      scope: 'row'
    },
    {
      key: 'client',
      header: 'Client',
      accessorKey: 'client',
      sortable: true,
      filterable: true
    },
    {
      key: 'status',
      header: 'Status',
      accessorKey: 'status',
      sortable: true,
      filterable: true,
      cell: (project) => {
        const statusColors = {
          'planning': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
          'in-progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
          'completed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
          'on-hold': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
        };
        
        return (
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
            {project.status.replace('-', ' ')}
          </span>
        );
      }
    },
    {
      key: 'manager',
      header: 'Project Manager',
      accessorKey: 'manager',
      sortable: true,
      filterable: true
    },
    {
      key: 'budget',
      header: 'Budget',
      accessorKey: 'budget',
      sortable: true,
      align: 'right',
      cell: (project) => `$${project.budget.toLocaleString()}`
    },
    {
      key: 'dates',
      header: 'Timeline',
      cell: (project) => (
        <div className="text-sm">
          <div>{new Date(project.startDate).toLocaleDateString()} -</div>
          <div>{new Date(project.endDate).toLocaleDateString()}</div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Project Portfolio</h2>
      <AccessibleDataTable
        data={projects}
        columns={columns}
        caption="Current and completed company projects"
        summary="This table displays all company projects with their status, timelines, budgets, and assigned managers. Use the filters to narrow down projects by client or status, and sort columns to organize the data."
        searchable
        filterable
        ariaLabel="Project portfolio table"
        onRowClick={(project) => {
          console.log('View project:', project);
        }}
      />
    </div>
  );
}

// Simple table example for basic data
export function SimpleTableExample() {
  const headers = ['Service', 'Description', 'Duration', 'Price'];
  const rows = [
    ['Consultation', 'Initial project assessment and planning', '2 hours', '$200'],
    ['Design', 'Complete UI/UX design package', '2-3 weeks', '$5,000'],
    ['Development', 'Full-stack application development', '3-6 months', '$25,000'],
    ['Maintenance', 'Ongoing support and updates', 'Monthly', '$500/month']
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Service Pricing</h2>
      <SimpleAccessibleTable
        headers={headers}
        rows={rows}
        caption="Available services and their pricing structure"
        summary="This table lists our core services including consultation, design, development, and maintenance with their respective durations and pricing information."
        className="w-full"
      />
    </div>
  );
}

// Comprehensive example showcasing all features
export function ComprehensiveTableExample() {
  return (
    <div className="space-y-8 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Accessible Data Tables</h1>
        <p className="text-muted-foreground">
          Examples of fully accessible data tables with sorting, filtering, selection, and keyboard navigation.
        </p>
      </div>

      <EmployeesTableExample />
      <ProjectsTableExample />
      <SimpleTableExample />
    </div>
  );
}