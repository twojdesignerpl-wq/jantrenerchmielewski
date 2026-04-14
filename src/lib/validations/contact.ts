import { z } from "zod/v4";

export const serviceOptions = [
  { value: "dieta", label: "Dieta 4-tygodniowa", price: "199 zł" },
  { value: "plan", label: "Plan Treningowy 8-tygodniowy", price: "149 zł" },
  { value: "prowadzenie", label: "Prowadzenie Online", price: "od 399 zł/mies." },
  { value: "trening", label: "Trening Personalny", price: "od 199 zł" },
] as const;

export const packageOptions = [
  { value: "1m", label: "1 miesiąc", price: "399 zł" },
  { value: "3m", label: "3 miesiące", price: "1\u00A0049 zł" },
  { value: "6m", label: "6 miesięcy", price: "1\u00A0999 zł" },
  { value: "12m", label: "12 miesięcy", price: "3\u00A0699 zł" },
] as const;

export const trainingPackageOptions = [
  { value: "trening_1", label: "Pojedyncza sesja", price: "199 zł" },
  { value: "trening_10", label: "Pakiet 10 sesji", price: "1\u00A0599 zł" },
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Imię musi mieć minimum 2 znaki").max(100),
  email: z.email("Podaj poprawny adres email"),
  phone: z
    .string()
    .regex(/^(\+48)?[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{3}$/, "Podaj poprawny numer telefonu")
    .optional()
    .or(z.literal("")),
  service: z.enum(["dieta", "plan", "prowadzenie", "trening"], {
    message: "Wybierz usługę",
  }),
  package: z
    .enum(["1m", "3m", "6m", "12m", "trening_1", "trening_10"])
    .optional(),
  message: z.string().max(1000).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
