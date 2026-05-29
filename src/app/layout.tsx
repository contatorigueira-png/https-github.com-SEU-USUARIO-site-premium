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
  title: "Porto Primo Delicatessen — Padaria Artesanal, Café & Gourmet | Recife",
  description:
    "Padaria artesanal, café de especialidade e delicatessen gourmet em Recife. Pães de fermentação natural, confeitaria fina e brunch — feitos todos os dias com hospitalidade calorosa.",
  metadataBase: new URL("https://portoprimo.com.br"),
  openGraph: {
    title: "Porto Primo Delicatessen — Artisanal Bakery & Café",
    description:
      "Pães artesanais, café de especialidade e delicatessen gourmet no coração de Recife.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FBF7F0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased bg-[var(--bg)] text-[var(--fg)] paper">
        {children}
      </body>
    </html>
  );
}
