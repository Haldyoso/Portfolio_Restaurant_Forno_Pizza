import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/dm-sans";
import "@fontsource/dm-serif-display/latin-400-italic.css";
import "@fontsource/dm-serif-display/latin-ext-400-italic.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: { default: "FORNO — pizza napoletana", template: "%s | FORNO" },
  description:
    "Pomaly kysnuté cesto, poctivé suroviny a horúca pec. Objav FORNO, fiktívnu neapolskú pizzeriu vytvorenú ako projekt do portfólia.",
  applicationName: "FORNO — pizza napoletana",
  openGraph: {
    title: "FORNO — pizza napoletana",
    description:
      "Z pece. Od srdca. Trochu Neapola pri jednom stole. Fiktívny projekt do portfólia.",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "/images/pizza-hero.webp",
        width: 1536,
        height: 1024,
        alt: "Neapolská pizza Margherita",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FORNO — pizza napoletana",
    images: ["/images/pizza-hero.webp"],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body id="top">
        <a className="skip-link" href="#main">
          Preskočiť na obsah
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
