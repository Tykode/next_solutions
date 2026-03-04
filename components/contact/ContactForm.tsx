"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputCls = (hasError: boolean) => cn(
    "w-full px-4 py-3 rounded-xl text-[14px] text-white/80 placeholder-white/20 bg-white/[0.04] border transition-all outline-none",
    "focus:ring-1 focus:ring-[#f0a050]/40 focus:border-[#f0a050]/40 focus:bg-white/[0.06]",
    hasError
      ? "border-red-500/40 bg-red-500/[0.05]"
      : "border-white/[0.08] hover:border-white/[0.14]"
  );

  return (
    <div className="glass rounded-2xl p-8">
      <h3
        className="text-[18px] font-bold text-white mb-6"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Dites-nous ce dont vous avez besoin
      </h3>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-14 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-[#52c48a]/10 flex items-center justify-center mb-4">
              <CheckCircle className="w-7 h-7 text-[#52c48a]" />
            </div>
            <h4
              className="text-[17px] font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Bien reçu !
            </h4>
            <p className="text-[13px] text-white/35 mb-6 max-w-xs">
              Votre message est entre de bonnes mains. On revient vers vous sous 24h ouvrées — souvent bien avant.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-[13px] text-[#f0a050]/70 hover:text-[#f0a050] transition-colors"
            >
              Envoyer un nouveau message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-[11.5px] font-semibold text-white/30 mb-1.5 uppercase tracking-wider">
                  Nom complet *
                </label>
                <input
                  {...register("name")}
                  id="name"
                  autoComplete="name"
                  placeholder="Jean Dupont"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={inputCls(!!errors.name)}
                />
                {errors.name && <p id="name-error" role="alert" className="mt-1 text-[11.5px] text-red-400">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-[11.5px] font-semibold text-white/30 mb-1.5 uppercase tracking-wider">
                  Email *
                </label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jean@entreprise.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={inputCls(!!errors.email)}
                />
                {errors.email && <p id="email-error" role="alert" className="mt-1 text-[11.5px] text-red-400">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-[11.5px] font-semibold text-white/30 mb-1.5 uppercase tracking-wider">
                Téléphone
              </label>
              <input {...register("phone")} id="phone" type="tel" autoComplete="tel" placeholder="+0594 XX XX XX" className={inputCls(false)} />
            </div>

            <div>
              <label htmlFor="subject" className="block text-[11.5px] font-semibold text-white/30 mb-1.5 uppercase tracking-wider">
                Sujet *
              </label>
              <input
                {...register("subject")}
                id="subject"
                placeholder="Demande de devis – Caisse tactile"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className={inputCls(!!errors.subject)}
              />
              {errors.subject && <p id="subject-error" role="alert" className="mt-1 text-[11.5px] text-red-400">{errors.subject.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-[11.5px] font-semibold text-white/30 mb-1.5 uppercase tracking-wider">
                Message *
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={5}
                placeholder="Parlez-nous de votre commerce, de votre équipement actuel et de ce que vous cherchez…"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={cn(inputCls(!!errors.message), "resize-none")}
              />
              {errors.message && <p id="message-error" role="alert" className="mt-1 text-[11.5px] text-red-400">{errors.message.message}</p>}
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-red-500/[0.08] border border-red-500/20 text-red-400 text-[13px]">
                <AlertCircle className="w-4 h-4 shrink-0" />
                Envoi échoué. Réessayez ou appelez-nous directement au +0594 25 13 26.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              aria-busy={status === "loading"}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#f0a050] hover:bg-[#f5b060] disabled:opacity-50 disabled:cursor-not-allowed text-[#05080f] text-[14px] font-bold rounded-full transition-all duration-200 hover:shadow-[0_0_32px_rgba(240,160,80,0.35)] hover:scale-[1.01]"
            >
              {status === "loading" ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Envoi en cours…</>
              ) : (
                <><Send className="w-4 h-4" /> Envoyer ma demande</>
              )}
            </button>

            {/* Notice RGPD */}
            <p className="text-[11px] text-white/20 leading-relaxed text-center">
              En soumettant ce formulaire, vos données sont traitées uniquement pour répondre
              à votre demande, conformément au{" "}
              <a href="/cgv" className="underline underline-offset-2 hover:text-white/40 transition-colors">
                RGPD
              </a>
              . Droit d&apos;accès, rectification et suppression sur demande.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
