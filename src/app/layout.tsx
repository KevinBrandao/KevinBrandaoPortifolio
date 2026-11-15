import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { profile, siteUrl } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const title = "Kevin Brandão — Quality Assurance & Software Engineering";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s — Kevin Brandão" },
  description: profile.description,
  keywords: [
    "Kevin Brandão",
    "Analista de Qualidade de Software",
    "QA Engineer",
    "Automação de testes",
    "Cypress",
    "Playwright",
    "Selenium",
    "Engenharia de Software",
    "Franca SP",
  ],
  authors: [{ name: profile.fullName, url: profile.links.linkedin }],
  creator: profile.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Kevin Brandão",
    title,
    description: profile.description,
  },
  twitter: { card: "summary_large_image", title, description: profile.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090a0e" },
    { media: "(prefers-color-scheme: light)", color: "#f6f6f3" },
  ],
};

// Aplica o tema salvo antes da primeira pintura para evitar flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: profile.name,
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  jobTitle: "Analista de Qualidade de Software Pleno",
  worksFor: { "@type": "Organization", name: "TOTVS" },
  address: { "@type": "PostalAddress", addressLocality: "Franca", addressRegion: "SP", addressCountry: "BR" },
  alumniOf: ["UNIFESP", "FATEC Franca", "Anhanguera", "ETEC Dr. Júlio Cardoso"],
  knowsAbout: ["Qualidade de Software", "Automação de Testes", "Cypress", "Playwright", "Selenium", "React", "PHP"],
  sameAs: [profile.links.linkedin, profile.links.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
        >
          Pular para o conteúdo
        </a>
        <div className="backdrop" aria-hidden="true" />
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* O script do Vercel Analytics só existe em deploys na Vercel. */}
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}
