import { redirect } from "next/navigation";
import Link from "next/link";
import {
  Users,
  SignOut,
  ChartLineUp,
  AddressBook,
} from "@phosphor-icons/react/dist/ssr";
import { createClient } from "@/lib/supabase/server";
import { isAdminEmail } from "@/lib/admin/config";

export default async function AdminDashboard() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAdminEmail(user.email)) {
    redirect("/admin/login");
  }

  // Fetch stats
  const { count: totalContacts } = await supabase
    .from("contacts")
    .select("*", { count: "exact", head: true });

  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
  const weekStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

  const { count: todayCount } = await supabase
    .from("contacts")
    .select("*", { count: "exact", head: true })
    .gte("created_at", todayStart);

  const { count: weekCount } = await supabase
    .from("contacts")
    .select("*", { count: "exact", head: true })
    .gte("created_at", weekStart);

  const { count: monthCount } = await supabase
    .from("contacts")
    .select("*", { count: "exact", head: true })
    .gte("created_at", monthStart);

  const { data: recentContacts } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  const stats = [
    { label: "Dziś", value: todayCount ?? 0, icon: ChartLineUp },
    { label: "Ten tydzień", value: weekCount ?? 0, icon: ChartLineUp },
    { label: "Ten miesiąc", value: monthCount ?? 0, icon: ChartLineUp },
    { label: "Wszystkie", value: totalContacts ?? 0, icon: Users },
  ];

  const serviceLabels: Record<string, string> = {
    dieta: "Dieta",
    plan: "Plan Treningowy",
    prowadzenie: "Prowadzenie Online",
    trening: "Trening Personalny",
  };

  const statusLabels: Record<string, { label: string; color: string }> = {
    nowy: { label: "Nowy", color: "bg-cyan-500/20 text-cyan-400" },
    skontaktowany: { label: "Skontaktowany", color: "bg-yellow-500/20 text-yellow-400" },
    w_trakcie: { label: "W trakcie", color: "bg-blue-500/20 text-blue-400" },
    zamkniety: { label: "Zamknięty", color: "bg-green-500/20 text-green-400" },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-display-sm text-2xl">Panel Admina</h1>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/admin/leady"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition-all hover:bg-secondary"
          >
            <AddressBook size={18} />
            Wszystkie leady
          </Link>
          <form action="/admin/logout" method="POST">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
            >
              <SignOut size={18} />
              Wyloguj
            </button>
          </form>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-5"
            >
              <div className="mb-2 flex items-center gap-2 text-muted-foreground">
                <Icon size={18} />
                <span className="text-sm">{stat.label}</span>
              </div>
              <p className="text-mono-metric text-3xl font-bold">
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Recent contacts */}
      <div className="rounded-xl border border-border bg-card">
        <div className="border-b border-border px-6 py-4">
          <h2 className="font-heading text-lg font-bold">Ostatnie kontakty</h2>
        </div>
        <div className="divide-y divide-border">
          {recentContacts && recentContacts.length > 0 ? (
            recentContacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center justify-between px-6 py-4"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{contact.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {contact.email} · {serviceLabels[contact.service]}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${statusLabels[contact.status]?.color ?? ""}`}
                  >
                    {statusLabels[contact.status]?.label ?? contact.status}
                  </span>
                  <span className="text-mono-metric text-xs text-muted-foreground">
                    {new Date(contact.created_at).toLocaleDateString("pl-PL")}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="px-6 py-12 text-center text-muted-foreground">
              Brak kontaktów. Pojawią się tutaj gdy ktoś wypełni formularz.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
