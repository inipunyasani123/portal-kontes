import HARGA from './harga.json';
// Tautan ke situs utama PintuWeb. Portal ini zona terpisah (basePath /kontes-desain) di domain yang sama, jadi
// semua tautan ke situs utama memakai URL absolut dan <a> biasa: next/link akan menempelkan basePath.
/** Harga & kontak dibaca dari ./harga.json (salinan https://www.pintuweb.id/harga.json, diambil scripts/ambil-harga.mjs saat build). */
const P = (slug) => HARGA.paket[slug];
const rp = (n) => (n >= 1e6 ? `Rp${String(n / 1e6).replace('.', ',')} juta` : `Rp${n / 1e3} ribu`);

export const PINTUWEB = 'https://www.pintuweb.id';

/** Kontak dari PintuWeb/app/lib/site.ts (WA_NUMBER, WA_DISPLAY). Ganti di sana = ganti di sini. */
export const WA_NUMBER = HARGA.wa.nomor;
export const WA_DISPLAY = HARGA.wa.tampil;
export const wa = (teks) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`;

/**
 * Angka paket "konsep-desain" dari PintuWeb/app/lib/packages.ts (harga, waktu, jumlah konsep, revisi).
 * Satu-satunya tempat angka bisnis di portal ini: hero, langkah, dan FAQ mengambil dari sini.
 */
export const PAKET = {
  nama: 'Konsep Desain Website',
  mulai: rp(P('konsep-desain').mulai),
  sampai: rp(P('konsep-desain').sampai),
  waktu: P('konsep-desain').waktu,
  konsep: '3–5 konsep',
  revisi: '1× revisi',
};

/** Galeri yang tayang di www.pintuweb.id/<path> (lihat lib/portals.ts di PintuWeb). */
export const GALERI = [
  { path: 'landing-page', label: 'Landing Page' },
  { path: 'toko-online', label: 'Toko Online' },
  { path: 'aplikasi-mobile', label: 'Aplikasi Mobile' },
  { path: 'menu-digital', label: 'Menu Digital' },
  { path: 'link-in-bio', label: 'Link in Bio' },
  { path: 'kontes-desain', label: 'Konsep Desain' },
  { path: 'undangan-digital', label: 'Undangan Digital' },
  { path: 'website-portofolio', label: 'Portofolio Pribadi' },
  { path: 'website-reservasi', label: 'Reservasi & Booking' },
  { path: 'website-properti', label: 'Properti' },
  { path: 'aplikasi-to-do', label: 'To-Do & Produktivitas' },
];

export const GALERI_LAIN = GALERI.filter((g) => g.path !== 'kontes-desain');

/** Paket harga (lib/packages.ts: konsep-desain) dan galeri demo PintuWeb. Paket ini belum punya halaman layanan. */
export const LANJUT = [
  { href: `${PINTUWEB}/paket#konsep-desain`, label: 'Harga paket Konsep Desain Website' },
  { href: `${PINTUWEB}/demo#kontes`, label: 'Semua demo PintuWeb' },
];

/** Artikel terkait di situs utama (grup "Baca juga"). */
export const BACA_JUGA = [
  { href: `${PINTUWEB}/artikel/cara-memilih-jasa-pembuatan-website`, label: 'Cara memilih jasa pembuatan website' },
];
