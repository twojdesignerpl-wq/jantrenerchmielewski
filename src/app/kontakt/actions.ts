"use server";

import { contactSchema, type ContactFormData } from "@/lib/validations/contact";

export type ContactActionResult =
  | { success: true; message: string }
  | { success: false; error: string };

export async function submitContactForm(
  data: ContactFormData,
): Promise<ContactActionResult> {
  // Server-side validation
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      error: "Popraw dane w formularzu i spróbuj ponownie.",
    };
  }

  const validated = result.data;

  try {
    // Check if Supabase is configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error } = await supabase.from("contacts").insert({
        name: validated.name,
        email: validated.email,
        phone: validated.phone || null,
        service: validated.service,
        package: validated.package || null,
        message: validated.message || null,
      });

      if (error) {
        console.error("Supabase insert error:", error);
        return {
          success: false,
          error: "Wystąpił błąd przy zapisie. Spróbuj ponownie.",
        };
      }
    } else {
      // Log to console when Supabase is not configured (dev mode)
      console.log("Contact form submission (no Supabase):", validated);
    }

    return {
      success: true,
      message: "Dziękuję za wiadomość! Odezwę się najszybciej jak to możliwe.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      error: "Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.",
    };
  }
}
