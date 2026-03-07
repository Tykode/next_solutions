import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Indiquez votre nom complet"),
  email: z.string().email("Email incorrect — ex : jean@entreprise.com"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Précisez l'objet de votre demande"),
  message: z.string().min(10, "Décrivez votre demande en quelques mots"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
