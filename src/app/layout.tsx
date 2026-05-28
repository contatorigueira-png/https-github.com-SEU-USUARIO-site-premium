import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilha da Kosta II — Frutos do Mar e Sushi à Beira-Mar | Recife",
  description:
    "Uma experiência inesquecível de frutos do mar e gastronomia à beira-mar em Recife. Atmosfera sofisticada, hospitalidade calorosa, momentos memoráveis.",
  metadataBase: new URL("https://ilhadakosta.com.br"),
  openGraph: {
    title: "Ilha da Kosta II — Beachfront Fine Dining",
    description:
      "Frutos do mar premium, sushi e coquetelaria autoral à beira-mar de Recife.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08080b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased bg-[var(--bg)] text-[var(--fg)]">
        {children}
      </body>
    </html>
  );
}
