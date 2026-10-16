import Link from 'next/link';

export const metadata = { title: 'Halaman tidak ditemukan', robots: { index: false } };

export default function NotFound() {
  return (
    <main className="wall flex min-h-screen flex-col items-center justify-center bg-galeri px-6 text-center text-arang">
      <p className="plakat px-4 py-1.5 text-xs uppercase tracking-[0.3em]">Ruang 404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Karya ini tidak ada di galeri</h1>
      <p className="mt-4 max-w-md text-mutedk">Halaman yang kamu cari sudah dipindah atau memang tidak pernah dipajang.</p>
      <Link href="/" className="mt-8 border border-arang bg-arang px-6 py-3 text-sm font-semibold text-galeri transition hover:bg-kuningan-ink">Kembali ke galeri juri</Link>
    </main>
  );
}
