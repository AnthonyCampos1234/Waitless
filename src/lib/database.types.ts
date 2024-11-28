export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      interest_submissions: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          university: string
          role: string
          submitted_at: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          university: string
          role: string
          submitted_at: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          university?: string
          role?: string
          submitted_at?: string
        }
      }
    }
  }
} 