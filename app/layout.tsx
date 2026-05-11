import type { Metadata } from "next";
import { Inter, Inter_Tight, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pedro Maia · Gerente de Projetos",
  description:
    "CEO da Accellera · 4 squads paralelas · 11 colaboradores ativos · método transversal de criação de sistema. Cobertura B2B + B2C, da mídia orgânica ao tráfego pago.",
  metadataBase: new URL("https://pedromaia.dev"),
  openGraph: {
    title: "Pedro Maia · Gerente de Projetos",
    description:
      "4 squads paralelas · 11 colaboradores ativos · método transversal · cobertura B2B + B2C, da mídia orgânica ao tráfego pago.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${interTight.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
