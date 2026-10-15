// Tautan ke situs utama PintuWeb. Portal ini zona terpisah (basePath /kontes-desain) di domain yang sama, jadi
// semua tautan ke situs utama memakai URL absolut dan <a> biasa: next/link akan menempelkan basePath.
export const PINTUWEB = 'https://www.pintuweb.id';

/** Delapan galeri yang tayang di www.pintuweb.id/<path> (lihat lib/portals.ts di PintuWeb). */
export const GALERI = [
  { path: 'landing-page', label: 'Landing Page' },
  { path: 'link-in-bio', label: 'Link in Bio' },
  { path: 'kontes-desain', label: 'Kontes Desain' },
  { path: 'undangan-digital', label: 'Undangan Digital' },
  { path: 'website-portofolio', label: 'Website Portofolio' },
  { path: 'website-reservasi', label: 'Website Reservasi' },
  { path: 'website-properti', label: 'Website Properti' },
  { path: 'aplikasi-to-do', label: 'Aplikasi To-Do' },
];

export const GALERI_LAIN = GALERI.filter((g) => g.path !== 'kontes-desain');

/** Paket harga (lib/packages.ts: konsep-desain) dan galeri demo PintuWeb. Paket ini belum punya halaman layanan. */
export const LANJUT = [
  { href: `${PINTUWEB}/paket#konsep-desain`, label: 'Harga paket Konsep Desain Website' },
  { href: `${PINTUWEB}/demo#kontes`, label: 'Semua demo PintuWeb' },
];
