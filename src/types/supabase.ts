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
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          full_name: string | null
          avatar_url: string | null
          org_name: string | null
          role: string | null
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string
          full_name?: string | null
          avatar_url?: string | null
          org_name?: string | null
          role?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          full_name?: string | null
          avatar_url?: string | null
          org_name?: string | null
          role?: string | null
        }
      }
      subscriptions: {
        Row: {
          id: string
          created_at: string
          user_id: string
          status: string
          price_id: string
          quantity: number
          cancel_at_period_end: boolean
          cancel_at: string | null
          canceled_at: string | null
          current_period_start: string
          current_period_end: string
          ended_at: string | null
          trial_start: string | null
          trial_end: string | null
        }
        Insert: {
          id: string
          created_at?: string
          user_id: string
          status: string
          price_id: string
          quantity?: number
          cancel_at_period_end?: boolean
          cancel_at?: string | null
          canceled_at?: string | null
          current_period_start: string
          current_period_end: string
          ended_at?: string | null
          trial_start?: string | null
          trial_end?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          status?: string
          price_id?: string
          quantity?: number
          cancel_at_period_end?: boolean
          cancel_at?: string | null
          canceled_at?: string | null
          current_period_start?: string
          current_period_end?: string
          ended_at?: string | null
          trial_start?: string | null
          trial_end?: string | null
        }
      }
      payments: {
        Row: {
          id: string
          created_at: string
          payment_intent_id: string
          customer_id: string
          amount: number
          currency: string
          status: string
        }
        Insert: {
          id?: string
          created_at?: string
          payment_intent_id: string
          customer_id: string
          amount: number
          currency: string
          status: string
        }
        Update: {
          id?: string
          created_at?: string
          payment_intent_id?: string
          customer_id?: string
          amount?: number
          currency?: string
          status?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
