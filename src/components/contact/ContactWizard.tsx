"use client";

import { useState, useTransition, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  BowlFood,
  Barbell,
  ChatsCircle,
  PersonSimpleRun,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  PaperPlaneTilt,
  SpinnerGap,
} from "@phosphor-icons/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  contactSchema,
  serviceOptions,
  packageOptions,
  trainingPackageOptions,
  type ContactFormData,
} from "@/lib/validations/contact";
import { submitContactForm, type ContactActionResult } from "@/app/kontakt/actions";

const serviceIcons = {
  dieta: BowlFood,
  plan: Barbell,
  prowadzenie: ChatsCircle,
  trening: PersonSimpleRun,
};

const stepVariants = {
  enter: { opacity: 0, x: 30 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

const validServices = ["dieta", "plan", "prowadzenie", "trening"] as const;

export function ContactWizard() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<ContactActionResult | null>(null);
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: undefined,
      package: undefined,
      message: "",
    },
  });

  const selectedService = form.watch("service");

  // Auto-select service from URL query param
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam && validServices.includes(serviceParam as typeof validServices[number])) {
      const service = serviceParam as ContactFormData["service"];
      form.setValue("service", service);
      if (service !== "prowadzenie" && service !== "trening") {
        setStep(1);
      }
    }
  }, [searchParams, form]);

  function handleServiceSelect(service: ContactFormData["service"]) {
    form.setValue("service", service);
    if (service === "prowadzenie" || service === "trening") {
      form.setValue("package", undefined);
      // Stay on step 0 — show package/session options
    } else {
      form.setValue("package", undefined);
      setStep(1);
    }
  }

  function handleBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  async function handleSubmit(data: ContactFormData) {
    startTransition(async () => {
      const res = await submitContactForm(data);
      setResult(res);
      if (res.success) {
        setStep(3);
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* Progress indicator */}
      <div className="mb-10 flex items-center justify-center gap-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === step
                ? "w-8 bg-primary"
                : i < step
                  ? "w-2 bg-primary/60"
                  : "w-2 bg-muted"
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Step 0: Service Selection */}
        {step === 0 && (
          <motion.div
            key="step-0"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <h3 className="text-display-sm mb-3 text-center text-3xl md:text-4xl">
              Co Cię interesuje?
            </h3>
            <p className="mb-10 text-center text-lg text-muted-foreground">
              Wybierz usługę, która najlepiej odpowiada Twoim potrzebom
            </p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {serviceOptions.map((option) => {
                const Icon = serviceIcons[option.value];
                const isSelected = selectedService === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleServiceSelect(option.value)}
                    className={`group relative flex flex-col items-start gap-4 rounded-2xl border-2 p-7 text-left transition-all hover:scale-[1.02] active:scale-[0.98] ${
                      isSelected
                        ? "border-primary bg-primary/10 glow-cyan-strong"
                        : "border-border/60 bg-[oklch(0.16_0.02_240)] hover:border-primary/50 hover:bg-[oklch(0.18_0.02_240)]"
                    }`}
                  >
                    <Icon
                      size={40}
                      weight="duotone"
                      className="text-primary"
                    />
                    <div>
                      <p className="font-heading text-xl font-bold">
                        {option.label}
                      </p>
                      <p className="text-mono-metric mt-2 text-lg text-primary">
                        {option.price}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Package selection for Prowadzenie */}
            {selectedService === "prowadzenie" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-6"
              >
                <p className="mb-3 text-sm font-medium">Wybierz okres:</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {packageOptions.map((pkg) => (
                    <button
                      key={pkg.value}
                      type="button"
                      onClick={() => {
                        form.setValue("package", pkg.value);
                      }}
                      className={`rounded-lg border p-3 text-center transition-all hover:scale-[1.02] active:scale-[0.98] ${
                        form.watch("package") === pkg.value
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/40"
                      }`}
                      aria-pressed={form.watch("package") === pkg.value}
                    >
                      <p className="text-sm font-medium">{pkg.label}</p>
                      <p className="text-mono-metric mt-1 text-xs text-primary">
                        {pkg.price}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Advance button — only enabled when a package is selected */}
                <button
                  type="button"
                  disabled={!form.watch("package")}
                  onClick={() => setStep(1)}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Dalej
                  <ArrowRight size={18} weight="bold" />
                </button>
              </motion.div>
            )}

            {/* Session selection for Trening Personalny */}
            {selectedService === "trening" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-6"
              >
                <p className="mb-3 text-sm font-medium">Wybierz opcję:</p>
                <div className="grid grid-cols-2 gap-3">
                  {trainingPackageOptions.map((pkg) => (
                    <button
                      key={pkg.value}
                      type="button"
                      onClick={() => {
                        form.setValue("package", pkg.value);
                      }}
                      className={`rounded-lg border p-4 text-center transition-all hover:scale-[1.02] active:scale-[0.98] ${
                        form.watch("package") === pkg.value
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/40"
                      }`}
                      aria-pressed={form.watch("package") === pkg.value}
                    >
                      <p className="text-sm font-medium">{pkg.label}</p>
                      <p className="text-mono-metric mt-1 text-xs text-primary">
                        {pkg.price}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Advance button — only enabled when a session option is selected */}
                <button
                  type="button"
                  disabled={!form.watch("package")}
                  onClick={() => setStep(1)}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Dalej
                  <ArrowRight size={18} weight="bold" />
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Step 1: Contact Details */}
        {step === 1 && (
          <motion.div
            key="step-1"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <h3 className="text-display-sm mb-2 text-center text-2xl md:text-3xl">
              Twoje dane
            </h3>
            <p className="mb-8 text-center text-muted-foreground">
              Podaj dane kontaktowe, abym mógł się z Tobą skontaktować
            </p>

            <div className="space-y-5">
              <div>
                <Label htmlFor="name">Imię i nazwisko *</Label>
                <Input
                  id="name"
                  placeholder="Jan Kowalski"
                  className="mt-1.5 bg-card"
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="mt-1 text-sm text-destructive">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jan@example.com"
                  className="mt-1.5 bg-card"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="mt-1 text-sm text-destructive">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+48 534 214 398"
                  className="mt-1.5 bg-card"
                  {...form.register("phone")}
                />
                {form.formState.errors.phone && (
                  <p className="mt-1 text-sm text-destructive">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="message">
                  Wiadomość{" "}
                  <span className="text-muted-foreground">(opcjonalnie)</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Opisz swoje cele, oczekiwania lub pytania..."
                  rows={4}
                  className="mt-1.5 resize-none bg-card"
                  {...form.register("message")}
                />
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-all hover:bg-secondary"
              >
                <ArrowLeft size={18} weight="bold" />
                Wstecz
              </button>
              <button
                type="button"
                onClick={() => {
                  form.trigger(["name", "email", "phone"]).then((valid) => {
                    if (valid) setStep(2);
                  });
                }}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Dalej
                <ArrowRight size={18} weight="bold" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Summary & Submit */}
        {step === 2 && (
          <motion.div
            key="step-2"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <h3 className="text-display-sm mb-2 text-center text-2xl md:text-3xl">
              Podsumowanie
            </h3>
            <p className="mb-8 text-center text-muted-foreground">
              Sprawdź dane i wyślij wiadomość
            </p>

            <div className="space-y-4 rounded-xl border border-border bg-card p-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Usługa</span>
                <span className="font-medium">
                  {
                    serviceOptions.find((s) => s.value === selectedService)
                      ?.label
                  }
                </span>
              </div>
              {form.watch("package") && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {selectedService === "trening" ? "Opcja" : "Okres"}
                  </span>
                  <span className="font-medium">
                    {(() => {
                      const allOptions = [...packageOptions, ...trainingPackageOptions];
                      const found = allOptions.find((p) => p.value === form.watch("package"));
                      return found ? `${found.label} — ${found.price}` : "";
                    })()}
                  </span>
                </div>
              )}
              <div className="my-2 border-t border-border" />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Imię</span>
                <span className="font-medium">{form.watch("name")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email</span>
                <span className="font-medium">{form.watch("email")}</span>
              </div>
              {form.watch("phone") && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Telefon</span>
                  <span className="font-medium">{form.watch("phone")}</span>
                </div>
              )}
              {form.watch("message") && (
                <div>
                  <span className="text-muted-foreground">Wiadomość</span>
                  <p className="mt-1 text-sm">{form.watch("message")}</p>
                </div>
              )}
            </div>

            {result && !result.success && (
              <p className="mt-4 text-center text-sm text-destructive">
                {result.error}
              </p>
            )}

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-all hover:bg-secondary"
              >
                <ArrowLeft size={18} weight="bold" />
                Wstecz
              </button>
              <button
                type="button"
                disabled={isPending}
                onClick={form.handleSubmit(handleSubmit)}
                className="glow-cyan inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                {isPending ? (
                  <>
                    <SpinnerGap size={20} className="animate-spin" />
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    <PaperPlaneTilt size={20} weight="bold" />
                    Wyślij wiadomość
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <motion.div
            key="step-3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20"
            >
              <CheckCircle
                size={48}
                weight="fill"
                className="text-primary"
              />
            </motion.div>

            <h3 className="text-display-sm mb-3 text-2xl md:text-3xl">
              Wiadomość wysłana!
            </h3>

            <p className="mx-auto max-w-md text-muted-foreground">
              {result?.success ? result.message : ""}
            </p>

            <p className="mt-6 text-sm text-muted-foreground">
              Zazwyczaj odpowiadam w ciągu 24 godzin.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
