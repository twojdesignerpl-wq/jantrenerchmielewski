import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isAdminEmail } from "@/lib/admin/config";
import { LeadsTable } from "./leads-table";
import type { Contact } from "@/lib/supabase/types";

export default async function LeadyPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAdminEmail(user.email)) {
    redirect("/admin/login");
  }

  const { data } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });

  return <LeadsTable initialContacts={(data as Contact[]) ?? []} />;
}
