export type ContactStatus = "nowy" | "skontaktowany" | "w_trakcie" | "zamkniety";

export type ServiceType = "dieta" | "plan" | "prowadzenie" | "trening";

export type PackageType = "1m" | "3m" | "6m" | "12m";

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: ServiceType;
  package: PackageType | null;
  message: string | null;
  status: ContactStatus;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: Contact;
        Insert: Omit<Contact, "id" | "created_at" | "updated_at" | "status" | "notes">;
        Update: Partial<Contact>;
      };
    };
  };
}
