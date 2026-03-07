import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Next Solutions – Spécialiste du point de vente en Guyane",
    template: "%s | Next Solutions",
  },
  description:
    "Depuis plus de 10 ans, Next Solutions est le leader des solutions monétiques en Guyane : caisses tactiles, TPE, logiciels de gestion et balances.",
  keywords: ["caisses tactiles", "terminaux de paiement", "TPE", "logiciels de gestion", "balances", "Guyane", "point de vente", "next solutions"],
  authors: [{ name: "Next Solutions" }],
  creator: "Next Solutions",
  publisher: "Next Solutions",
  metadataBase: new URL("https://next-solutions.fr"),
  openGraph: {
    title: "Next Solutions – Spécialiste du point de vente en Guyane",
    description: "Depuis plus de 10 ans, Next Solutions est le leader des solutions monétiques en Guyane.",
    url: "https://next-solutions.fr",
    siteName: "Next Solutions",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Next Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Solutions – Spécialiste du point de vente en Guyane",
    description: "Depuis plus de 10 ans, Next Solutions est le leader des solutions monétiques en Guyane.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${syne.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#f0a050] focus:text-[#09080c] focus:font-semibold focus:text-sm focus:shadow-lg"
        >
          Aller au contenu principal
        </a>
        <ThemeProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
