import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";
import type { ApiResponse } from "@/lib/types";

const resend = new Resend(process.env.RESEND_API_KEY);

/** Escape HTML special chars to prevent injection in email templates */
function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(req: NextRequest) {
  // Validate content-type
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: "Content-Type invalide" },
      { status: 415 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: "Corps de la requête invalide" },
      { status: 400 }
    );
  }

  // Validate with Zod
  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: "Données invalides", details: result.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, phone, subject, message } = result.data;

  try {
    await resend.emails.send({
      from: "Next Solutions <noreply@next-solutions.fr>",
      to: ["contact@next-solutions.fr"],
      replyTo: email,
      subject: `[Contact] ${esc(subject)}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #242B3D; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #F89851; margin: 0; font-size: 20px;">Nouveau message – Next Solutions</h1>
          </div>
          <div style="background: #f5f7fa; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e8ebf0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #424B5A; width: 120px;">Nom</td>
                <td style="padding: 8px 0; color: #242B3D;">${esc(name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #424B5A;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${esc(email)}" style="color: #F89851;">${esc(email)}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #424B5A;">Téléphone</td>
                <td style="padding: 8px 0; color: #242B3D;">${esc(phone)}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #424B5A;">Sujet</td>
                <td style="padding: 8px 0; color: #242B3D;">${esc(subject)}</td>
              </tr>
            </table>
            <hr style="margin: 16px 0; border: none; border-top: 1px solid #e8ebf0;" />
            <p style="font-weight: 600; color: #424B5A; margin-bottom: 8px;">Message :</p>
            <p style="color: #424B5A; line-height: 1.6; white-space: pre-wrap;">${esc(message)}</p>
          </div>
          <p style="text-align: center; color: #9EA3B0; font-size: 12px; margin-top: 16px;">
            Reçu depuis le site next-solutions.fr
          </p>
        </div>
      `,
    });

    // Auto-reply to sender
    await resend.emails.send({
      from: "Next Solutions <noreply@next-solutions.fr>",
      to: [email],
      subject: "Votre message a bien été reçu – Next Solutions",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #242B3D; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #F89851; margin: 0; font-size: 20px;">Next Solutions</h1>
          </div>
          <div style="background: #f5f7fa; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e8ebf0;">
            <p style="color: #242B3D;">Bonjour <strong>${esc(name)}</strong>,</p>
            <p style="color: #424B5A; line-height: 1.6;">
              Nous avons bien reçu votre message et nous vous en remercions.
              Notre équipe vous répondra dans les meilleurs délais.
            </p>
            <p style="color: #424B5A; line-height: 1.6;">
              En cas d'urgence, vous pouvez nous joindre directement au <strong>+0594 25 13 26</strong>.
            </p>
            <p style="color: #9EA3B0; font-size: 13px; margin-top: 24px;">
              L'équipe Next Solutions<br/>
              1436 Rte de Baduel, Cayenne 97300<br/>
              contact@next-solutions.fr
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json<ApiResponse<{ sent: true }>>(
      { success: true, data: { sent: true } },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API] Resend error:", error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: "Erreur lors de l'envoi de l'email. Réessayez ou appelez-nous." },
      { status: 502 }
    );
  }
}
