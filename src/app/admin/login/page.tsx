"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { isAdminEmail } from "@/lib/admin/config";
import { SpinnerGap, ShieldCheck } from "@phosphor-icons/react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleLogin() {
    setError("");
    startTransition(async () => {
      try {
        const supabase = createClient();
        const { error: authError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (authError) {
          setError("Nieprawidłowy email lub hasło.");
          return;
        }

        // Verify email is in admin allowlist
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user || !isAdminEmail(user.email)) {
          await supabase.auth.signOut();
          setError("Brak dostępu do panelu admina.");
          return;
        }

        router.push("/admin");
        router.refresh();
      } catch {
        setError("Wystąpił błąd. Spróbuj ponownie.");
      }
    });
  }

  return (
    <div className="flex min-h-[100dvh] items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center">
          <Image
            src="/images/logo.png"
            alt="Jan Chmielewski"
            width={60}
            height={60}
            className="mb-4"
          />
          <h1 className="text-display-sm text-xl">Panel Admina</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Zaloguj się, aby zarządzać kontaktami
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@jantrenerchmielewski.pl"
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="password">Hasło</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1.5"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleLogin();
                }}
              />
            </div>

            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}

            <Button
              onClick={handleLogin}
              disabled={isPending}
              className="w-full"
            >
              {isPending ? (
                <SpinnerGap size={18} className="mr-2 animate-spin" />
              ) : (
                <ShieldCheck size={18} className="mr-2" />
              )}
              Zaloguj się
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
