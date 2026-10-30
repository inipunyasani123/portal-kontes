// Tiap entri punya identitas sendiri (bukan sekadar palet) dan halaman dalam yang khas.
// Thumbnail diambil dari situs live: public/images/entri/<folder>.webp (1600x1100, 16:11).
export const briefs = [
  {
    id: 'absorber',
    klien: 'PT Dickson Synergy',
    proyek: 'EthyleneAbsorber',
    deskripsi: 'Situs produk penjaga kesegaran buah untuk ekspor. Isinya sama (BPOM, 1 sachet untuk 1–2 m³, efektif 30 hari), tapi diceritakan dengan empat cara.',
    entri: [
      {
        no: '01', name: 'Konsep Segar', identitas: 'Pasar Pagi', folder: 'absorber-segar', terjual: 1, url: 'https://absorber-segar.pintuweb.id',
        description: 'Gaya poster pasar dengan hijau berani, plus kamus 12 buah dan hitungan sachet.',
        halaman: [['/kamus-buah', 'Kamus buah'], ['/hitung', 'Hitung sachet']],
      },
      {
        no: '02', name: 'Konsep Premium', identitas: 'Etalase', folder: 'absorber-premium', terjual: 0, url: 'https://absorber-premium.pintuweb.id',
        description: 'Tampil seperti butik yang lega dan rapi, dengan catatan penerapan untuk toko buah dan kafe.',
        halaman: [['/koleksi', 'Koleksi'], ['/catatan', 'Catatan penerapan']],
      },
      {
        no: '03', name: 'Konsep Divine', identitas: 'Plate Botani', folder: 'absorber-divine', terjual: 1, url: 'https://absorber-divine.pintuweb.id',
        description: 'Gaya buku tanaman: delapan buah lengkap dengan suhu simpan dan kurva kesegaran.',
        halaman: [['/herbarium', 'Herbarium'], ['/jurnal', 'Jurnal']],
      },
      {
        no: '04', name: 'Konsep Korporat', identitas: 'Lembar Data', folder: 'absorber-dickson', terjual: 3, url: 'https://absorber-dickson.pintuweb.id',
        description: 'Gaya lembar data teknis, dengan kalkulator dosis kontainer dan catatan teknis bernomor.',
        halaman: [['/produk', 'Lembar data'], ['/catatan-teknis', 'Catatan teknis']],
      },
    ],
  },
  {
    id: 'crave',
    klien: 'Positive Crave',
    proyek: 'Intimacy Wellness Brand',
    deskripsi: 'Situs toko brand kebutuhan intim pasangan yang dewasa, hangat, dan terasa aman. Katalognya sama, tapi ada lima sudut pandang.',
    entri: [
      {
        no: '01', name: 'Konsep Noir', identitas: 'Tanpa Label', folder: 'crave-noir', terjual: 2, url: 'https://crave-noir.pintuweb.id',
        description: 'Serba hitam dan privat, dengan halaman yang menunjukkan apa yang dilihat kurir.',
        halaman: [['/pengiriman', 'Pengiriman'], ['/jurnal', 'Arsip']],
      },
      {
        no: '02', name: 'Konsep Amber', identitas: 'Cahaya Lilin', folder: 'crave-amber', terjual: 1, url: 'https://crave-amber.pintuweb.id',
        description: 'Bernuansa cahaya lilin: tiap barang punya tingkat nyala 1–10, dan ada kuis panduan.',
        halaman: [['/koleksi', 'Koleksi'], ['/panduan', 'Kuis panduan']],
      },
      {
        no: '03', name: 'Konsep Grace', identitas: 'Amplop Sutra', folder: 'crave-grace', terjual: 0, url: 'https://crave-grace.pintuweb.id',
        description: 'Anggun bernuansa ivory, dengan penyusun hadiah dan surat bersegel lilin.',
        halaman: [['/hadiah', 'Susun hadiah'], ['/jurnal', 'Surat']],
      },
      {
        no: '04', name: 'Konsep Lumen', identitas: 'Ruang Terang', folder: 'crave-lumen', terjual: 3, url: 'https://crave-lumen.pintuweb.id',
        description: 'Terang dan jujur, dengan label fakta produk, tabel perbandingan, dan kamus 19 istilah.',
        halaman: [['/kamus', 'Kamus'], ['/belajar', 'Belajar']],
      },
      {
        no: '05', name: 'Konsep Close', identitas: 'Jarak yang Mengecil', folder: 'crave-close', terjual: 1, url: 'https://crave-close.pintuweb.id',
        description: 'Biru malam untuk pasangan, dengan 24 kartu percakapan dan kesepakatan sebelum mencoba.',
        halaman: [['/percakapan', 'Kartu percakapan'], ['/jurnal', 'Jurnal']],
      },
    ],
  },
];

export const gambarEntri = (e) => `/kontes-desain/images/entri/${e.folder}.webp`;
export const gambarPotret = (e) => `/kontes-desain/images/entri/${e.folder}-m.webp`;
