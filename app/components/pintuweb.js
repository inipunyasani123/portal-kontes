// Tautan ke situs utama PintuWeb. Portal ini zona terpisah (basePath /kontes-desain) di domain yang sama, jadi
// semua tautan ke situs utama memakai URL absolut dan <a> biasa: next/link akan menempelkan basePath.
export const PINTUWEB = 'https://www.pintuweb.id';

/** Kontak dari PintuWeb/app/lib/site.ts (WA_NUMBER, WA_DISPLAY). Ganti di sana = ganti di sini. */
export const WA_NUMBER = '6285190931399';
export const WA_DISPLAY = '+62 851 9093 1399';
export const wa = (teks) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`;

/**
 * Angka paket "konsep-desain" dari PintuWeb/app/lib/packages.ts (harga, waktu, jumlah konsep, revisi).
 * Satu-satunya tempat angka bisnis di portal ini: hero, langkah, dan FAQ mengambil dari sini.
 */
export const PAKET = {
  nama: 'Konsep Desain Website',
  mulai: 'Rp1,25 juta',
  sampai: 'Rp2,5 juta',
  waktu: '3–5 hari kerja',
  konsep: '3–5 konsep',
  revisi: '1× revisi',
};

/** Galeri yang tayang di www.pintuweb.id/<path> (lihat lib/portals.ts di PintuWeb). */
export const GALERI = [
  { path: 'landing-page', label: 'Landing Page' },
  { path: 'link-in-bio', label: 'Link in Bio' },
  { path: 'kontes-desain', label: 'Kontes Desain' },
  { path: 'undangan-digital', label: 'Undangan Digital' },
  { path: 'website-portofolio', label: 'Website Portofolio' },
  { path: 'website-reservasi', label: 'Website Reservasi' },
  { path: 'website-properti', label: 'Website Properti' },
  { path: 'aplikasi-to-do', label: 'Aplikasi To-Do' },
  { path: 'toko-online', label: 'Toko Online' },
  { path: 'menu-digital', label: 'Menu Digital' },
];

export const GALERI_LAIN = GALERI.filter((g) => g.path !== 'kontes-desain');

/** Paket harga (lib/packages.ts: konsep-desain) dan galeri demo PintuWeb. Paket ini belum punya halaman layanan. */
export const LANJUT = [
  { href: `${PINTUWEB}/paket#konsep-desain`, label: 'Harga paket Konsep Desain Website' },
  { href: `${PINTUWEB}/demo#kontes`, label: 'Semua demo PintuWeb' },
];
