export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ai_insights: {
        Row: {
          action_items: Json | null
          confidence_score: number | null
          created_at: string | null
          customer_id: string | null
          description: string
          id: string
          insight_type: string
          resolved_at: string | null
          title: string
        }
        Insert: {
          action_items?: Json | null
          confidence_score?: number | null
          created_at?: string | null
          customer_id?: string | null
          description: string
          id?: string
          insight_type: string
          resolved_at?: string | null
          title: string
        }
        Update: {
          action_items?: Json | null
          confidence_score?: number | null
          created_at?: string | null
          customer_id?: string | null
          description?: string
          id?: string
          insight_type?: string
          resolved_at?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_insights_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      churn_predictions: {
        Row: {
          ai_insights: Json | null
          created_at: string | null
          customer_id: string | null
          id: string
          reason: string | null
          risk_score: number
          updated_at: string | null
        }
        Insert: {
          ai_insights?: Json | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          reason?: string | null
          risk_score: number
          updated_at?: string | null
        }
        Update: {
          ai_insights?: Json | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          reason?: string | null
          risk_score?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "churn_predictions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          company: string | null
          created_at: string | null
          email: string
          health_score: number | null
          id: string
          last_activity: string | null
          name: string
          revenue: number | null
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          company?: string | null
          created_at?: string | null
          email: string
          health_score?: number | null
          id?: string
          last_activity?: string | null
          name: string
          revenue?: number | null
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          company?: string | null
          created_at?: string | null
          email?: string
          health_score?: number | null
          id?: string
          last_activity?: string | null
          name?: string
          revenue?: number | null
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      email_campaigns: {
        Row: {
          body: string
          campaign_type: string
          clicked_at: string | null
          created_at: string | null
          customer_id: string | null
          id: string
          opened_at: string | null
          sent_at: string | null
          status: string | null
          subject: string
        }
        Insert: {
          body: string
          campaign_type: string
          clicked_at?: string | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          opened_at?: string | null
          sent_at?: string | null
          status?: string | null
          subject: string
        }
        Update: {
          body?: string
          campaign_type?: string
          clicked_at?: string | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          opened_at?: string | null
          sent_at?: string | null
          status?: string | null
          subject?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_campaigns_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          customer_id: string | null
          event_type: string
          feature_name: string | null
          id: string
          metadata: Json | null
          timestamp: string | null
          user_id: string | null
        }
        Insert: {
          customer_id?: string | null
          event_type: string
          feature_name?: string | null
          id?: string
          metadata?: Json | null
          timestamp?: string | null
          user_id?: string | null
        }
        Update: {
          customer_id?: string | null
          event_type?: string
          feature_name?: string | null
          id?: string
          metadata?: Json | null
          timestamp?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      feedback: {
        Row: {
          ai_summary: string | null
          created_at: string | null
          customer_id: string | null
          feedback_text: string | null
          id: string
          nps_score: number | null
          sentiment_score: number | null
        }
        Insert: {
          ai_summary?: string | null
          created_at?: string | null
          customer_id?: string | null
          feedback_text?: string | null
          id?: string
          nps_score?: number | null
          sentiment_score?: number | null
        }
        Update: {
          ai_summary?: string | null
          created_at?: string | null
          customer_id?: string | null
          feedback_text?: string | null
          id?: string
          nps_score?: number | null
          sentiment_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "feedback_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      health_scores: {
        Row: {
          created_at: string | null
          customer_id: string
          date: string
          id: string
          score: number
        }
        Insert: {
          created_at?: string | null
          customer_id: string
          date?: string
          id?: string
          score: number
        }
        Update: {
          created_at?: string | null
          customer_id?: string
          date?: string
          id?: string
          score?: number
        }
        Relationships: [
          {
            foreignKeyName: "health_scores_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          company_name: string | null
          company_size: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          phone: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          company_name?: string | null
          company_size?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          company_name?: string | null
          company_size?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          auth_user_id: string | null
          company: string | null
          created_at: string | null
          email: string
          id: string
          last_login: string | null
          updated_at: string | null
        }
        Insert: {
          auth_user_id?: string | null
          company?: string | null
          created_at?: string | null
          email: string
          id?: string
          last_login?: string | null
          updated_at?: string | null
        }
        Update: {
          auth_user_id?: string | null
          company?: string | null
          created_at?: string | null
          email?: string
          id?: string
          last_login?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_churn_predictions: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
