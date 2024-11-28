export interface InterestSubmission {
  id: string;
  name: string;
  email: string;
  university: string;
  role: 'buyer' | 'saver' | 'both';
  submitted_at: string;
} 