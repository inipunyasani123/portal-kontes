// Tiap entri punya identitas sendiri (bukan sekadar palet) dan halaman dalam yang khas.
// Thumbnail diambil dari situs live: public/images/entri/<folder>.webp (1600x1100, 16:11).
export const briefs = [
  {
    id: 'absorber',
    klien: 'PT Dickson Synergy',
    proyek: 'EthyleneAbsorber',
    deskripsi: 'Situs produk penjaga kesegaran buah untuk pasar ekspor — harus terasa segar, tepercaya, dan meyakinkan distributor. Fakta yang sama (BPOM, 1 sachet untuk 1–2 m³, efektif 30 hari), empat cara bercerita.',
    entri: [
      {
        no: '01', name: 'Konsep Segar', identitas: 'Pasar Pagi', folder: 'absorber-segar', terjual: 1, url: 'https://absorber-segar.pintuweb.id',
        description: 'Gaya poster pedagang pasar: stiker miring, hijau berani, dan bahasa penjual buah. Ada kamus 12 buah dan hitungan sachet untuk lapak.',
        halaman: [['/kamus-buah', 'Kamus buah'], ['/hitung', 'Hitung sachet']],
      },
      {
        no: '02', name: 'Konsep Premium', identitas: 'Etalase', folder: 'absorber-premium', terjual: 0, url: 'https://absorber-premium.pintuweb.id',
        description: 'Butik tanpa hiasan — kisi garis rambut dan angka besar. Tiap produk dipajang seperti di vitrin, ditemani cerita kasus pelanggan.',
        halaman: [['/koleksi', 'Koleksi'], ['/catatan', 'Cerita kasus']],
      },
      {
        no: '03', name: 'Konsep Divine', identitas: 'Plate Botani', folder: 'absorber-divine', terjual: 1, url: 'https://absorber-divine.pintuweb.id',
        description: 'Herbarium: delapan pelat buah bernama Latin lengkap dengan suhu simpan, kurva kesegaran, dan esai tentang buah yang terus bernapas.',
        halaman: [['/herbarium', 'Herbarium'], ['/jurnal', 'Jurnal']],
      },
      {
        no: '04', name: 'Konsep Korporat', identitas: 'Lembar Data', folder: 'absorber-dickson', terjual: 3, url: 'https://absorber-dickson.pintuweb.id',
        description: 'Bahasa gambar teknik untuk klaim yang bisa diaudit: lembar data per produk, kalkulator dosis kontainer, dan catatan teknis bernomor.',
        halaman: [['/produk', 'Lembar data'], ['/catatan-teknis', 'Catatan teknis']],
      },
    ],
  },
  {
    id: 'crave',
    klien: 'Positive Crave',
    proyek: 'Intimacy Wellness Brand',
    deskripsi: 'Situs toko brand keintiman pasangan — harus dewasa tanpa vulgar, hangat, dan membuat pengunjung merasa aman. Katalog yang sama, lima sudut pandang tentang apa yang paling dibutuhkan pembeli.',
    entri: [
      {
        no: '01', name: 'Konsep Noir', identitas: 'Tanpa Label', folder: 'crave-noir', terjual: 2, url: 'https://crave-noir.pintuweb.id',
        description: 'Hitam dengan satu aksen neon, berpusat pada privasi: koleksi dipilih per situasi, dan satu halaman memperlihatkan apa yang dilihat kurir.',
        halaman: [['/pengiriman', 'Pengiriman'], ['/jurnal', 'Arsip']],
      },
      {
        no: '02', name: 'Konsep Amber', identitas: 'Cahaya Lilin', folder: 'crave-amber', terjual: 1, url: 'https://crave-amber.pintuweb.id',
        description: 'Tiap barang punya tingkat nyala 1–10, dan penggeser meredupkan koleksi. Kuisnya jujur menyarankan menunda bila obrolannya belum ada.',
        halaman: [['/koleksi', 'Koleksi'], ['/panduan', 'Kuis panduan']],
      },
      {
        no: '03', name: 'Konsep Grace', identitas: 'Amplop Sutra', folder: 'crave-grace', terjual: 0, url: 'https://crave-grace.pintuweb.id',
        description: 'Serif anggun di atas ivory: koleksi disusun seperti susunan acara, penyusun hadiah dengan kartu, dan surat bersegel lilin.',
        halaman: [['/hadiah', 'Susun hadiah'], ['/jurnal', 'Surat']],
      },
      {
        no: '04', name: 'Konsep Lumen', identitas: 'Ruang Terang', folder: 'crave-lumen', terjual: 3, url: 'https://crave-lumen.pintuweb.id',
        description: 'Terang dan jujur: panel Fakta Produk ala label gizi, tabel perbandingan, dan kamus 19 istilah yang sering bikin ragu.',
        halaman: [['/kamus', 'Kamus'], ['/belajar', 'Belajar']],
      },
      {
        no: '05', name: 'Konsep Close', identitas: 'Jarak yang Mengecil', folder: 'crave-close', terjual: 1, url: 'https://crave-close.pintuweb.id',
        description: 'Biru malam, dimulai dari obrolan: dek 24 kartu percakapan, kesepakatan yang dicentang sebelum mencoba, dan dialog berdua.',
        halaman: [['/percakapan', 'Kartu percakapan'], ['/jurnal', 'Jurnal']],
      },
    ],
  },
];

export const gambarEntri = (e) => `/kontes-desain/images/entri/${e.folder}.webp`;
