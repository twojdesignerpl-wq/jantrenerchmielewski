"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  DownloadSimple,
  Funnel,
} from "@phosphor-icons/react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import type { Contact, ContactStatus, ServiceType } from "@/lib/supabase/types";

const serviceLabels: Record<ServiceType, string> = {
  dieta: "Dieta",
  plan: "Plan Treningowy",
  prowadzenie: "Prowadzenie",
  trening: "Trening Personalny",
};

const statusConfig: Record<ContactStatus, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  nowy: { label: "Nowy", variant: "default" },
  skontaktowany: { label: "Skontaktowany", variant: "secondary" },
  w_trakcie: { label: "W trakcie", variant: "outline" },
  zamkniety: { label: "Zamknięty", variant: "secondary" },
};

interface LeadsTableProps {
  initialContacts: Contact[];
}

export function LeadsTable({ initialContacts }: LeadsTableProps) {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [filterService, setFilterService] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [isPending, startTransition] = useTransition();

  function handleStatusChange(contactId: string, newStatus: ContactStatus) {
    startTransition(async () => {
      const supabase = createClient();
      await supabase
        .from("contacts")
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq("id", contactId);

      setContacts((prev) =>
        prev.map((c) => (c.id === contactId ? { ...c, status: newStatus } : c)),
      );
    });
  }

  const filteredContacts = contacts.filter((c) => {
    if (filterService !== "all" && c.service !== filterService) return false;
    if (filterStatus !== "all" && c.status !== filterStatus) return false;
    return true;
  });

  function exportCSV() {
    const headers = ["Imię", "Email", "Telefon", "Usługa", "Pakiet", "Status", "Wiadomość", "Data"];
    const rows = filteredContacts.map((c) => [
      c.name,
      c.email,
      c.phone ?? "",
      serviceLabels[c.service],
      c.package ?? "",
      statusConfig[c.status].label,
      c.message ?? "",
      new Date(c.created_at).toLocaleDateString("pl-PL"),
    ]);

    const csv = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `leady-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Dashboard
          </Link>
          <h1 className="text-display-sm text-xl">
            Leady ({filteredContacts.length})
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Filters */}
          <div className="flex items-center gap-2">
            <Funnel size={16} className="text-muted-foreground" />
            <Select value={filterService} onValueChange={(v) => setFilterService(v ?? "all")}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Usługa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Wszystkie usługi</SelectItem>
                <SelectItem value="dieta">Dieta</SelectItem>
                <SelectItem value="plan">Plan Treningowy</SelectItem>
                <SelectItem value="prowadzenie">Prowadzenie</SelectItem>
                <SelectItem value="trening">Trening Personalny</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={(v) => setFilterStatus(v ?? "all")}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Wszystkie statusy</SelectItem>
                <SelectItem value="nowy">Nowy</SelectItem>
                <SelectItem value="skontaktowany">Skontaktowany</SelectItem>
                <SelectItem value="w_trakcie">W trakcie</SelectItem>
                <SelectItem value="zamkniety">Zamknięty</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button variant="outline" size="sm" onClick={exportCSV}>
            <DownloadSimple size={16} className="mr-2" />
            Eksport CSV
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Imię</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Telefon</TableHead>
              <TableHead>Usługa</TableHead>
              <TableHead>Pakiet</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Data</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-primary hover:underline"
                    >
                      {contact.email}
                    </a>
                  </TableCell>
                  <TableCell>
                    {contact.phone ? (
                      <a
                        href={`tel:${contact.phone}`}
                        className="hover:text-primary"
                      >
                        {contact.phone}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell>{serviceLabels[contact.service]}</TableCell>
                  <TableCell>
                    {contact.package ? (
                      <span className="text-mono-metric text-xs">
                        {contact.package}
                      </span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Select
                      value={contact.status}
                      onValueChange={(v) => handleStatusChange(contact.id, v as ContactStatus)}
                      disabled={isPending}
                    >
                      <SelectTrigger className="h-8 w-[140px]">
                        <Badge variant={statusConfig[contact.status].variant}>
                          {statusConfig[contact.status].label}
                        </Badge>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nowy">Nowy</SelectItem>
                        <SelectItem value="skontaktowany">Skontaktowany</SelectItem>
                        <SelectItem value="w_trakcie">W trakcie</SelectItem>
                        <SelectItem value="zamkniety">Zamknięty</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="text-mono-metric text-xs text-muted-foreground">
                    {new Date(contact.created_at).toLocaleDateString("pl-PL")}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="py-12 text-center text-muted-foreground">
                  Brak kontaktów spełniających kryteria.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
