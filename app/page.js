'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Trophy, ArrowDown, ArrowUpRight, MessageCircle, Gavel, Landmark, ChevronDown } from 'lucide-react';
import { briefs, gambarEntri } from './components/templates-data';

const WA = 'https://wa.me/6285190931399?text=Halo%2C%20saya%20ingin%20mengadakan%20kontes%20desain%20web%20untuk%20brand%20saya';

const TANYA = [
  { q: 'Apa untungnya kontes dibanding pesan satu desain?', a: 'Kamu melihat beberapa interpretasi nyata atas brief yang sama — bukan satu taruhan. Konsep yang menang adalah yang benar-benar paling pas di matamu, bukan sekadar yang pertama jadi.' },
  { q: 'Berapa konsep yang saya terima?', a: 'Umumnya 3–5 konsep website utuh yang bisa diklik dan dijelajahi, bukan sekadar gambar mockup. Jumlah pastinya menyesuaikan skala brief dan kesepakatan di awal.' },
  { q: 'Berapa biayanya?', a: 'Paket Konsep Desain Website PintuWeb Rp1,25 juta–Rp2,5 juta untuk 3–5 konsep live atas satu brief. Konsep juara bisa langsung dilanjutkan ke paket website; angka pastinya tertulis di penawaran sebelum mulai.' },
  { q: 'Berapa lama prosesnya?', a: 'Umumnya 3–5 hari kerja sampai semua konsep siap dinilai, tergantung panjang brief dan jumlah konsep. Sebelum mulai, kami kirim jadwalnya, termasuk berapa lama pemolesan setelah kamu memilih juara.' },
  { q: 'Bagaimana jika tidak ada konsep yang saya suka?', a: 'Feedback-mu jadi arah revisi: konsep terdekat kami rombak sesuai catatanmu. Prinsip kami sederhana — kontes selesai ketika ada karya yang memenangkan hatimu.' },
  { q: 'Konsep yang kalah jadi milik siapa?', a: 'Konsep juara beserta source code menjadi milikmu penuh. Konsep lain tetap arsip galeri kami — bisa kamu tebus terpisah jika ternyata ingin memakainya juga.' },
];

export default function PortalKontes() {
  const total = briefs.reduce((n, b) => n + b.entri.length, 0);
  const [buka, setBuka] = useState(0);

  return (
    <div id="top" className="wall min-h-screen">
      {/* Jejak: portal ini bagian dari PintuWeb */}
      <nav aria-label="Jejak" className="bg-arang text-galeri text-xs">
        <ol className="mx-auto flex max-w-7xl px-4 sm:px-6 lg:px-8 items-center gap-2 py-1.5">
          <li><a href="https://www.pintuweb.id" className="font-semibold underline-offset-4 hover:underline">PintuWeb</a></li>
          <li aria-hidden="true" className="opacity-60">/</li>
          <li aria-current="page">Kontes Desain</li>
        </ol>
      </nav>
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-arang/15 bg-galeri/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-semibold">
            <span className="plakat grid h-9 w-9 place-items-center rounded"><Trophy size={16} /></span>
            PortalKontes
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold text-mutedk md:flex" role="navigation" aria-label="Navigasi">
            <a href="#galeri" className="transition hover:text-kuningan">Galeri</a>
            <a href="#carakerja" className="transition hover:text-kuningan">Cara Kerja</a>
            <a href="#tanya" className="transition hover:text-kuningan">Tanya Juri</a>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded bg-arang px-5 py-2 text-sm font-bold text-galeri transition hover:bg-kuningan-ink">
            Adakan Kontes
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-4 pt-16 pb-12 text-center sm:px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl">
          <span className="plakat inline-block rounded px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
            Ruang Juri · {briefs.length} brief · {total} entri
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] sm:text-6xl">
            Satu brief,<br />banyak cara <span className="italic text-kuningan">memenangkannya</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-mutedk">
            Beginilah kontes desain bekerja: klien memberi brief, kami menjawab dengan beberapa konsep — dinilai berdampingan di dinding galeri ini.
          </p>
          <a href="#galeri" className="mt-9 inline-flex items-center gap-2 rounded bg-arang px-8 py-3.5 font-display text-sm font-bold text-galeri transition hover:bg-kuningan-ink">
            Masuki Galeri <ArrowDown size={15} />
          </a>
        </motion.div>
      </section>

      {/* Galeri per brief */}
      <section id="galeri" className="scroll-mt-24 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-20">
          {briefs.map((b, bi) => (
            <div key={b.id}>
              {/* Kartu brief */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto max-w-3xl border-l-4 border-kuningan bg-white p-6 shadow-sm md:p-8">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-kuningan-ink"><Gavel size={14} /> Brief {String(bi + 1).padStart(2, '0')} — {b.klien}</p>
                <h2 className="mt-2 font-display text-3xl font-semibold">{b.proyek}</h2>
                <p className="mt-2 text-mutedk">{b.deskripsi}</p>
              </motion.div>

              {/* Frame entri */}
              <div className={`mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 ${b.entri.length > 4 ? 'lg:grid-cols-3' : 'lg:grid-cols-2 xl:grid-cols-4'}`}>
                {b.entri.map((e, i) => (
                  <motion.article
                    key={e.no}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                    className="group text-center"
                  >
                    <a href={e.url} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="frame transition-transform duration-300 group-hover:-translate-y-1.5">
                        <div className="frame-mat">
                          <div className="relative aspect-[16/11] overflow-hidden">
                            <Image src={gambarEntri(e)} alt={`Beranda entri ${e.name} — ${e.identitas}`} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw" className="object-cover object-top" priority={bi === 0 && i < 2} />
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Plakat */}
                    <div className="plakat mx-auto -mt-3 w-fit rounded px-4 py-1.5 text-center">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Entri No. {e.no}</p>
                      <h3 className="font-display text-sm font-semibold">{e.name}</h3>
                    </div>
                    {/* Titik merah: penanda karya terjual di galeri */}
                    {e.terjual > 0 && (
                      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-arang">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#c22f2f] ring-2 ring-white" aria-hidden="true" />
                        {e.terjual} terjual
                      </p>
                    )}
                    <p className="mt-3 font-display text-lg italic text-kuningan-ink">“{e.identitas}”</p>
                    <p className="mx-auto mt-1.5 max-w-[17rem] text-sm leading-relaxed text-mutedk">{e.description}</p>
                    <ul className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs font-semibold" aria-label={`Halaman khas ${e.name}`}>
                      {e.halaman.map(([path, label]) => (
                        <li key={path}>
                          <a href={e.url + path} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 text-arang underline decoration-kuningan/60 underline-offset-4 transition hover:text-kuningan-ink">
                            {label}<ArrowUpRight size={12} aria-hidden="true" />
                          </a>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-2 font-mono text-[11px] text-arang/70">/{e.folder}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cara kerja */}
      <section id="carakerja" className="scroll-mt-24 border-t border-arang/10 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-display text-3xl font-semibold md:text-4xl">Bagaimana kontes berjalan</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Landmark, title: 'Klien memberi brief', desc: 'Cerita tentang produk, target pasar, dan rasa yang diinginkan.' },
              { icon: Gavel, title: 'Kami kirim beberapa konsep', desc: 'Tiap konsep dieksekusi penuh sebagai website nyata — bukan sekadar mockup.' },
              { icon: Trophy, title: 'Klien memilih juara', desc: 'Konsep terpilih dipoles hingga final dan siap diluncurkan.' },
            ].map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border border-arang/10 bg-galeri p-7 text-center">
                <span className="plakat mx-auto grid h-12 w-12 place-items-center rounded-full"><s.icon size={20} /></span>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-mutedk">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tanya juri (FAQ) */}
      <section id="tanya" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-kuningan-ink"><Gavel size={14} /> Tanya Juri</p>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Sebelum palu <span className="italic text-kuningan">diketuk</span></h2>
          </div>
          <div className="mt-10 space-y-3">
            {TANYA.map((t, i) => {
              const open = buka === i;
              return (
                <div key={t.q} className={`border-l-4 bg-white shadow-sm transition ${open ? 'border-kuningan shadow-md' : 'border-arang/15'}`}>
                  <button onClick={() => setBuka(open ? -1 : i)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left">
                    <span className="font-display text-lg font-semibold leading-snug">{t.q}</span>
                    <ChevronDown size={17} className={`shrink-0 text-kuningan transition-transform ${open ? 'rotate-180' : ''}`} />
                  </button>
                  {open && (
                    <div className="border-t border-arang/10 px-6 py-4">
                      <p className="text-sm leading-relaxed text-mutedk">{t.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-arang px-4 py-16 text-center text-galeri sm:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto max-w-xl">
          <span className="plakat mx-auto grid h-14 w-14 place-items-center rounded-full"><Trophy size={22} /></span>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight md:text-4xl">Brand-mu layak diperebutkan.</h2>
          <p className="mt-3 text-galeri/60">Adakan kontes untuk brand-mu — dapatkan beberapa konsep website nyata, pilih yang paling memenangkan hatimu.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded bg-kuningan-ink px-8 py-4 font-display text-sm font-bold text-white transition hover:scale-[1.03] active:scale-95">
            <MessageCircle size={16} /> Mulai Kontesmu
          </a>
        </motion.div>
      </section>

      <footer className="border-t border-galeri/10 bg-arang px-4 pb-6 pt-10 text-galeri/60">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="flex items-center justify-center gap-2 font-display text-lg font-semibold text-galeri sm:justify-start">
              <span className="plakat grid h-8 w-8 place-items-center rounded"><Trophy size={14} /></span>
              PortalKontes
            </p>
            <p className="mt-2 text-sm leading-relaxed">Galeri entri kontes desain web — satu brief, banyak cara memenangkannya.</p>
          </div>
          <nav aria-label="Tautan footer" className="text-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-kuningan">Ruang Galeri</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#galeri" className="transition hover:text-galeri">Galeri Entri</a></li>
              <li><a href="#carakerja" className="transition hover:text-galeri">Cara Kontes Berjalan</a></li>
              <li><a href="#tanya" className="transition hover:text-galeri">Tanya Juri</a></li>
            </ul>
          </nav>
          <div className="text-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-kuningan">Hubungi</p>
            <ul className="mt-3 space-y-2">
              <li><a href={WA} target="_blank" rel="noopener noreferrer" className="transition hover:text-galeri">WhatsApp +62 851 9093 1399</a></li>
              <li><a href="https://www.pintuweb.id" className="transition hover:text-galeri">pintuweb.id</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-galeri/10 pt-5 text-center text-xs text-galeri/70">
          © {new Date().getFullYear()} PortalKontes · bagian dari PintuWeb — biar karya yang bicara.
        </p>
      </footer>
    </div>
  );
}
