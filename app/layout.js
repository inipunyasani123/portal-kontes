import './globals.css';
import { Zilla_Slab } from 'next/font/google';
import { briefs, gambarEntri } from './components/templates-data';

const zilla = Zilla_Slab({ subsets: ['latin'], variable: '--font-zilla', weight: '600' }); // satu bobot: judul, plakat, dan tombol memakai 600 (hemat dua unduhan font)

// Merek di hasil pencarian & pratinjau tautan = PintuWeb. Jumlah entri dihitung dari data, bukan ditulis tangan.
const URL_PORTAL = 'https://www.pintuweb.id/kontes-desain';
const ENTRI = briefs.reduce((n, b) => n + b.entri.length, 0);
const TITLE = `Kontes Desain Website: ${ENTRI} Konsep Siap Coba | PintuWeb`;
const DESCRIPTION = `${ENTRI} konsep website live dari ${briefs.length} brief kontes desain, dinilai berdampingan seperti di ruang juri. Lihat cara PintuWeb menjawab satu brief.`;

// CollectionPage + daftar entrinya (ItemList) + jejak. Data dari templates-data, jadi ikut bertambah sendiri.
const __jsonld = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TITLE,
  description: DESCRIPTION,
  url: URL_PORTAL,
  inLanguage: "id-ID",
  isPartOf: { "@type": "WebSite", name: "PintuWeb", url: "https://www.pintuweb.id" },
  publisher: { "@type": "Organization", name: "PintuWeb", url: "https://www.pintuweb.id" },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: ENTRI,
    itemListElement: briefs.flatMap((b) => b.entri).map((e, i) => ({ "@type": "ListItem", position: i + 1, name: `${e.name} — ${e.identitas}`, url: e.url, image: `https://www.pintuweb.id${gambarEntri(e)}` })),
  },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "PintuWeb", item: "https://www.pintuweb.id" }, { "@type": "ListItem", position: 2, name: "Kontes Desain", item: URL_PORTAL }] },
};

export const metadata = {
  metadataBase: new URL(URL_PORTAL),
  title: { default: TITLE, template: '%s | PintuWeb' },
  description: DESCRIPTION,
  applicationName: "PintuWeb",
  keywords: ["kontes desain web", "galeri desain", "entri kontes", "portofolio desain"],
  authors: [{ name: "PintuWeb", url: "https://www.pintuweb.id" }],
  creator: "PintuWeb",
  publisher: "PintuWeb",
  alternates: { canonical: URL_PORTAL },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: URL_PORTAL,
    siteName: "PintuWeb",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
    <html lang="id" className={zilla.variable}>
      <body className="antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
      </body>
    </html>
  );
}
