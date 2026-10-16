import Image from 'next/image';
import { Trophy, ArrowDown, ArrowUpRight, MessageCircle, Gavel, Landmark, ChevronDown, MoveRight } from 'lucide-react';
import { briefs, gambarEntri } from './components/templates-data';
import { LANJUT, GALERI_LAIN, PINTUWEB, PAKET, WA_DISPLAY, wa } from './components/pintuweb';

const WA = wa('Halo PintuWeb, saya ingin mengadakan kontes desain web untuk brand saya.');
const TOTAL = briefs.reduce((n, b) => n + b.entri.length, 0);

const LANGKAH = [
  { icon: Landmark, title: 'Klien memberi brief', desc: 'Cerita tentang produk, target pasar, dan rasa yang diinginkan.' },
  { icon: Gavel, title: 'Kami kirim beberapa konsep', desc: `${PAKET.konsep}, masing-masing berupa halaman live yang bisa diklik — bukan sekadar mockup.` },
  { icon: Trophy, title: 'Klien memilih juara', desc: 'Konsep terpilih direvisi sekali sesuai catatanmu, lalu bisa dilanjutkan ke paket website.' },
];

const TANYA = [
  { q: 'Apa untungnya kontes dibanding pesan satu desain?', a: 'Kamu melihat beberapa interpretasi nyata atas brief yang sama — bukan satu taruhan. Konsep yang menang adalah yang benar-benar paling pas di matamu, bukan sekadar yang pertama jadi.' },
  { q: 'Berapa konsep yang saya terima?', a: `Umumnya ${PAKET.konsep} berupa halaman live yang bisa diklik dan dijelajahi, bukan sekadar gambar mockup. Jumlah pastinya menyesuaikan skala brief dan kesepakatan di awal.` },
  { q: 'Berapa biayanya?', a: `Paket Konsep Desain Website PintuWeb ${PAKET.mulai}–${PAKET.sampai} untuk ${PAKET.konsep} live atas satu brief. Konsep juara bisa langsung dilanjutkan ke paket website; angka pastinya tertulis di penawaran sebelum mulai.` },
  { q: 'Berapa lama prosesnya?', a: `Umumnya ${PAKET.waktu} sampai semua konsep siap dinilai, tergantung panjang brief dan jumlah konsep. Sebelum mulai, kami kirim jadwalnya, termasuk berapa lama pemolesan setelah kamu memilih juara.` },
  { q: 'Bagaimana jika tidak ada konsep yang saya suka?', a: `Pilih konsep yang paling mendekati, lalu catatanmu jadi arah revisi: paket ini mencakup ${PAKET.revisi} pada konsep terpilih. Perombakan di luar itu kami bicarakan dan sepakati biayanya lebih dulu, sebelum dikerjakan.` },
  { q: 'Konsep yang kalah jadi milik siapa?', a: 'Konsep yang tidak terpilih tetap menjadi arsip galeri kami — bisa kamu tebus terpisah lewat penawaran bila ternyata ingin memakainya juga. Untuk konsep juara, kamu mendapat hak pakai desainnya setelah pelunasan; bila dilanjutkan ke paket website, website beserta source code-nya menjadi milikmu setelah pelunasan paket itu.' },
];

const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: TANYA.map((t) => ({ '@type': 'Question', name: t.q, acceptedAnswer: { '@type': 'Answer', text: t.a } })),
};

function Logo({ kecil = false }) {
  return (
    <>
      <span className={`plakat grid shrink-0 place-items-center rounded ${kecil ? 'h-8 w-8' : 'h-9 w-9'}`}><Trophy size={kecil ? 14 : 16} aria-hidden="true" /></span>
      <span className="flex flex-col text-left leading-none">
        PintuWeb{' '}
        <span className={`mt-1 font-sans text-[10px] font-bold uppercase tracking-[0.2em] ${kecil ? 'text-kuningan' : 'text-kuningan-ink'}`}>Kontes Desain</span>
      </span>
    </>
  );
}

export default function PortalKontes() {
  return (
    <div id="top" className="wall min-h-screen">
      <a href="#konten" className="lewati">Lewati ke konten</a>
      {/* Jejak: portal ini bagian dari PintuWeb */}
      <nav aria-label="Jejak" className="bg-arang text-xs text-galeri">
        <ol className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-1.5 sm:px-6 lg:px-8">
          <li><a href={PINTUWEB} className="font-semibold underline-offset-4 hover:underline">PintuWeb</a></li>
          <li aria-hidden="true" className="opacity-60">/</li>
          <li aria-current="page">Kontes Desain</li>
        </ol>
      </nav>

      <header className="sticky top-0 z-40 border-b border-arang/15 bg-galeri/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5 lg:px-8">
          <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-semibold">
            <Logo />
          </a>
          <nav aria-label="Navigasi halaman" className="hidden items-center gap-6 text-sm font-semibold text-mutedk md:flex">
            <a href="#galeri" className="transition hover:text-kuningan-ink">Galeri</a>
            <a href="#carakerja" className="transition hover:text-kuningan-ink">Cara Kerja</a>
            <a href="#tanya" className="transition hover:text-kuningan-ink">Tanya Juri</a>
          </nav>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded bg-arang px-4 py-2 text-sm font-bold text-galeri transition hover:bg-kuningan-ink sm:px-5">
            Adakan Kontes
          </a>
        </div>
      </header>

      <main id="konten" tabIndex={-1}>
        {/* Hero */}
        <section className="px-4 pb-10 pt-10 text-center sm:px-6 sm:pb-12 sm:pt-16">
          <div className="mx-auto max-w-3xl">
            <span className="naik plakat inline-block rounded px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
              Ruang Juri · {briefs.length} brief · {TOTAL} entri
            </span>
            <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.08] sm:text-6xl">
              Satu brief,<br />banyak cara <span className="italic text-kuningan">memenangkannya</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-mutedk sm:text-lg">
              Beginilah kontes desain bekerja: klien memberi brief, kami menjawab dengan beberapa konsep — dinilai berdampingan di dinding galeri ini.
            </p>
            <div className="naik naik-2 mt-8 flex flex-col items-center gap-4 sm:mt-9">
              <a href="#galeri" className="inline-flex items-center gap-2 rounded bg-arang px-8 py-3.5 font-display text-[15px] font-semibold text-galeri transition hover:bg-kuningan-ink">
                Masuki Galeri <ArrowDown size={15} aria-hidden="true" />
              </a>
              {/* Ringkasan paket: angka dari PAKET (PintuWeb packages.ts) */}
              <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-arang/80">
                <span>Mulai <strong className="font-display text-base text-kuningan-ink">{PAKET.mulai}</strong></span>
                <span aria-hidden="true" className="text-kuningan">·</span>
                <span>{PAKET.konsep} live</span>
                <span aria-hidden="true" className="text-kuningan">·</span>
                <span>{PAKET.waktu}</span>
              </p>
            </div>
          </div>
        </section>

        {/* Galeri per brief */}
        <section id="galeri" aria-label="Galeri entri" className="scroll-mt-[62px] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-14 sm:space-y-20">
            {briefs.map((b, bi) => {
              const empat = b.entri.length <= 4;
              return (
                <div key={b.id}>
                  {/* Kartu brief */}
                  <div className="mx-auto max-w-3xl border-l-4 border-kuningan bg-white p-5 shadow-sm md:p-8">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-kuningan-ink"><Gavel size={14} aria-hidden="true" /> Brief {String(bi + 1).padStart(2, '0')} — {b.klien}</p>
                    <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{b.proyek}</h2>
                    <p className="mt-2 text-[15px] text-mutedk sm:text-base">{b.deskripsi}</p>
                  </div>

                  <p className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-mutedk sm:hidden" aria-hidden="true">
                    Geser untuk menilai {b.entri.length} konsep <MoveRight size={14} />
                  </p>
                  {/* Ponsel: dinding galeri yang digeser; layar lebar: berjajar, baris terakhir rata tengah */}
                  <ul aria-label={`Entri brief ${b.proyek}`} className="-mx-4 mt-3 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 pt-1 [scrollbar-width:thin] sm:mx-0 sm:mt-12 sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-14 sm:overflow-visible sm:px-0 sm:pb-0">
                    {b.entri.map((e) => (
                      <li key={e.no} className={`group w-[80%] shrink-0 snap-center text-center sm:w-[calc(50%-1rem)] ${empat ? 'xl:w-[calc(25%-1.5rem)]' : 'lg:w-[calc(33.333%-1.34rem)]'}`}>
                        <a href={e.url} target="_blank" rel="noopener noreferrer" className="block">
                          <div className="frame">
                            <div className="frame-mat">
                              <div className="relative aspect-[16/11] overflow-hidden">
                                <Image src={gambarEntri(e)} alt={`${e.name} — ${e.identitas}: buka konsep live (tab baru)`} fill sizes="(max-width: 639px) 78vw, (max-width: 1023px) 46vw, (max-width: 1279px) 30vw, 300px" className="object-cover object-top" />
                              </div>
                            </div>
                          </div>
                        </a>
                        {/* Plakat */}
                        <div className="plakat relative z-10 mx-auto -mt-3 w-fit rounded px-4 py-1.5 text-center">
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
                              <a href={e.url + path} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-6 items-center gap-0.5 text-arang underline decoration-kuningan/60 underline-offset-4 transition hover:text-kuningan-ink">
                                {label}<ArrowUpRight size={12} aria-hidden="true" />
                              </a>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-2 font-mono text-[11px] text-arang/70">/{e.folder}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Cara kerja */}
        <section id="carakerja" aria-labelledby="judul-carakerja" className="scroll-mt-[62px] border-t border-arang/10 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 id="judul-carakerja" className="font-display text-3xl font-semibold sm:text-center md:text-4xl">Bagaimana kontes berjalan</h2>
            <ol className="mt-8 grid gap-3 sm:mt-12 sm:gap-6 md:grid-cols-3">
              {LANGKAH.map((s, i) => (
                <li key={s.title} className="flex items-start gap-4 border border-arang/10 bg-galeri p-4 sm:block sm:p-7 sm:text-center">
                  <span className="plakat grid h-11 w-11 shrink-0 place-items-center rounded-full sm:mx-auto sm:h-12 sm:w-12"><s.icon size={20} aria-hidden="true" /></span>
                  <div className="sm:mt-4">
                    <h3 className="font-display text-lg font-semibold"><span className="text-kuningan-ink">{i + 1}. </span>{s.title}</h3>
                    <p className="mt-1 text-sm text-mutedk sm:mt-2">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Tanya juri (FAQ): <details> bawaan, satu terbuka sekaligus */}
        <section id="tanya" aria-labelledby="judul-tanya" className="scroll-mt-[62px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="sm:text-center">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-kuningan-ink sm:justify-center"><Gavel size={14} aria-hidden="true" /> Tanya Juri</p>
              <h2 id="judul-tanya" className="mt-2 font-display text-3xl font-semibold md:text-4xl">Sebelum palu <span className="italic text-kuningan">diketuk</span></h2>
            </div>
            <div className="mt-8 space-y-3 sm:mt-10">
              {TANYA.map((t, i) => (
                <details key={t.q} name="faq-kontes" open={i === 0} className="tanya group border-l-4 border-arang/15 bg-white shadow-sm transition open:border-kuningan open:shadow-md">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-lg font-semibold leading-snug">{t.q}</span>
                    <ChevronDown size={17} className="shrink-0 text-kuningan-ink transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="border-t border-arang/10 px-5 py-4 sm:px-6">
                    <p className="text-sm leading-relaxed text-mutedk">{t.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-arang px-4 py-16 text-center text-galeri sm:px-6">
          <div className="mx-auto max-w-xl">
            <span className="plakat mx-auto grid h-14 w-14 place-items-center rounded-full"><Trophy size={22} aria-hidden="true" /></span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight md:text-4xl">Brand-mu layak diperebutkan.</h2>
            <p className="mt-3 text-galeri/75">Adakan kontes untuk brand-mu — dapatkan beberapa konsep website nyata, pilih yang paling memenangkan hatimu.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded bg-kuningan-ink px-8 py-4 font-display text-[15px] font-semibold text-white transition hover:scale-[1.03] active:scale-95">
              <MessageCircle size={16} aria-hidden="true" /> Mulai Kontesmu
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-galeri/10 bg-arang px-4 pb-6 pt-10 text-galeri/70 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="col-span-2 sm:col-span-1">
            <p className="flex items-center gap-2 font-display text-lg font-semibold text-galeri"><Logo kecil /></p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">Galeri entri kontes desain web — satu brief, banyak cara memenangkannya.</p>
          </div>
          <nav aria-labelledby="kaki-ruang" className="text-sm">
            <p id="kaki-ruang" className="text-xs font-bold uppercase tracking-[0.2em] text-kuningan">Ruang Galeri</p>
            <ul className="mt-3 space-y-1">
              <li><a href="#galeri" className="inline-block py-1 transition hover:text-galeri">Galeri Entri</a></li>
              <li><a href="#carakerja" className="inline-block py-1 transition hover:text-galeri">Cara Kontes Berjalan</a></li>
              <li><a href="#tanya" className="inline-block py-1 transition hover:text-galeri">Tanya Juri</a></li>
            </ul>
          </nav>
          <div className="text-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-kuningan">Hubungi</p>
            <ul className="mt-3 space-y-1">
              <li><a href={WA} target="_blank" rel="noopener noreferrer" className="inline-block py-1 transition hover:text-galeri">WhatsApp <span className="whitespace-nowrap">{WA_DISPLAY}</span></a></li>
              <li><a href={PINTUWEB} className="inline-block py-1 transition hover:text-galeri">pintuweb.id</a></li>
            </ul>
          </div>
        </div>
        {/* Lanjut di PintuWeb: harga paket, semua demo, dan galeri lain di situs utama */}
        <nav aria-labelledby="lanjut-pintuweb" className="mx-auto mt-10 max-w-7xl border-t border-galeri/10 pt-8 text-sm">
          <p id="lanjut-pintuweb" className="text-xs font-bold uppercase tracking-[0.2em] text-kuningan">Lanjut di PintuWeb</p>
          <ul className="mt-4 flex flex-wrap gap-2.5 sm:gap-3">
            {LANJUT.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-9 items-center gap-1.5 rounded border border-galeri/25 px-3.5 font-display text-sm font-semibold text-galeri transition hover:border-kuningan hover:text-kuningan">
                  {l.label} <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-galeri/70">Ruang galeri lain</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            {GALERI_LAIN.map((g) => (
              <li key={g.path}>
                <a href={`${PINTUWEB}/${g.path}`} className="inline-block py-1 underline decoration-galeri/25 underline-offset-4 transition hover:text-galeri hover:decoration-kuningan">{g.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mx-auto mt-8 max-w-7xl border-t border-galeri/10 pt-5 text-xs text-galeri/70 sm:text-center">
          © {new Date().getFullYear()} PintuWeb · Galeri Kontes Desain — biar karya yang bicara.
        </p>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
    </div>
  );
}
