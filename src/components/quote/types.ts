export type QuoteService =
  | 'heritage-restoration'
  | 'stonework'
  | 'brickwork-repointing'
  | 'structural-repair'
  | 'concrete-repair'
  | 'foundation'
  | 'not-sure';

export type QuoteUrgency = 'asap' | 'this-month' | 'next-months' | 'researching';

export interface QuotePhoto {
  filename: string;
  dataUrl: string;
  size: number;
}

export interface QuoteData {
  service: QuoteService | null;
  suburb: string;
  urgency: QuoteUrgency | null;
  photos: QuotePhoto[];
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const SERVICE_LABELS: Record<QuoteService, string> = {
  'heritage-restoration': 'Heritage Restoration',
  stonework: 'Stonework or Stone Walls',
  'brickwork-repointing': 'Brickwork or Repointing',
  'structural-repair': 'Cracks or Structural Repair',
  'concrete-repair': 'Concrete Repair',
  foundation: 'Foundation or Settling',
  'not-sure': 'Not Sure / Something Else',
};

export const URGENCY_LABELS: Record<QuoteUrgency, string> = {
  asap: 'ASAP',
  'this-month': 'This month',
  'next-months': 'Next few months',
  researching: 'Just researching',
};
