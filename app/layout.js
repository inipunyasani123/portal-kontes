import './globals.css';
import { Zilla_Slab, Inter } from 'next/font/google';

const zilla = Zilla_Slab({ subsets: ['latin'], variable: '--font-zilla', weight: ['500', '600', '700'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const __jsonld = {"@context":"https://schema.org","@type":"CollectionPage","name":"PortalKontes","description":"Galeri entri kontes desain web","url":"https://www.pintuweb.id/kontes-desain","isPartOf":{"@type":"WebSite","name":"PintuWeb","url":"https://www.pintuweb.id"},"breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"PintuWeb","item":"https://www.pintuweb.id"},{"@type":"ListItem","position":2,"name":"Kontes Desain","item":"https://www.pintuweb.id/kontes-desain"}]}};

export const metadata = {
  metadataBase: new URL("https://www.pintuweb.id/kontes-desain"),
  title: "PortalKontes — Galeri Entri Kontes Desain Web",
  description: "PortalKontes: galeri entri kontes desain web — beberapa konsep untuk satu brief, dinilai berdampingan seperti di ruang juri.",
  applicationName: "PortalKontes",
  keywords: ["kontes desain web", "galeri desain", "entri kontes", "portofolio desain"],
  authors: [{ name: "PortalKontes" }],
  creator: "PortalKontes",
  publisher: "PortalKontes",
  alternates: { canonical: "https://www.pintuweb.id/kontes-desain" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.pintuweb.id/kontes-desain",
    siteName: "PortalKontes",
    title: "PortalKontes — Galeri Entri Kontes Desain Web",
    description: "PortalKontes: galeri entri kontes desain web — beberapa konsep untuk satu brief, dinilai berdampingan seperti di ruang juri.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "PortalKontes — Galeri Entri Kontes Desain Web" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PortalKontes — Galeri Entri Kontes Desain Web",
    description: "PortalKontes: galeri entri kontes desain web — beberapa konsep untuk satu brief, dinilai berdampingan seperti di ruang juri.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${zilla.variable} ${inter.variable}`}>
      <body className="antialiased">
        <main>{children}</main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
