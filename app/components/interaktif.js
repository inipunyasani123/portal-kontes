'use client';
// Bagian interaktif portal: menu "Galeri lain", sorotan kartu lewat #slug, dan bilah aksi lengket di ponsel.
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, MessageCircle, Eye } from 'lucide-react';
import { GALERI_LAIN, PINTUWEB } from './pintuweb';

/** Bilah tipis di atas: "PintuWeb / Konsep Desain" + tombol "Galeri lain" (popover dengan 10 galeri lain). */
export function JejakGaleri() {
  const [buka, setBuka] = useState(false);
  const tombol = useRef(null);
  const kotak = useRef(null);

  useEffect(() => {
    if (!buka) return undefined;
    const tutup = (kembali) => { setBuka(false); if (kembali) tombol.current?.focus(); };
    const onKey = (e) => { if (e.key === 'Escape') tutup(true); };
    const onDown = (e) => { if (!kotak.current?.contains(e.target)) tutup(false); };
    const onFocusKeluar = (e) => { if (kotak.current && !kotak.current.contains(e.target)) tutup(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('focusin', onFocusKeluar);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('focusin', onFocusKeluar);
    };
  }, [buka]);

  return (
    <nav aria-label="Jejak" className="relative z-50 bg-arang text-xs text-galeri">
      <div ref={kotak} className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-1 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2">
          <li><a href={PINTUWEB} className="inline-flex min-h-8 items-center font-semibold underline-offset-4 hover:underline">PintuWeb</a></li>
          <li aria-hidden="true" className="opacity-60">/</li>
          <li aria-current="page">Konsep Desain</li>
        </ol>
        <div className="relative ms-auto">
          <button
            ref={tombol}
            type="button"
            aria-expanded={buka}
            aria-controls="menu-galeri-lain"
            onClick={() => setBuka((b) => !b)}
            className="inline-flex min-h-8 items-center gap-1 rounded border border-galeri/30 px-2.5 font-semibold transition hover:border-kuningan hover:text-kuningan"
          >
            Galeri lain <ChevronDown size={13} aria-hidden="true" className={`transition-transform ${buka ? 'rotate-180' : ''}`} />
          </button>
          {buka && (
            <ul id="menu-galeri-lain" className="absolute end-0 top-full z-50 mt-1 w-64 max-w-[calc(100vw-2rem)] border border-arang/20 bg-galeri py-1.5 text-sm text-arang shadow-xl">
              {GALERI_LAIN.map((g) => (
                <li key={g.path}>
                  <a href={`${PINTUWEB}/${g.path}`} className="flex min-h-10 items-center px-4 py-1.5 font-semibold transition hover:bg-arang hover:text-galeri">{g.label}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

/** Buka halaman dengan #slug (atau klik tautan #slug): gulir ke kartu, lalu sorot sebentar dengan bingkai kuningan. */
export function SorotKartu() {
  useEffect(() => {
    let timer;
    const tunjuk = (id, gulir) => {
      const el = id && document.getElementById(id);
      if (!el || !el.hasAttribute('data-demo')) return;
      const kurang = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (gulir) el.scrollIntoView({ block: 'center', inline: 'center', behavior: kurang ? 'auto' : 'smooth' });
      el.classList.remove('sorot');
      void el.offsetWidth; // mulai ulang animasi bila diklik berulang
      el.classList.add('sorot');
      clearTimeout(timer);
      timer = setTimeout(() => el.classList.remove('sorot'), 2200);
    };
    const dariHash = (gulir) => tunjuk(decodeURIComponent(window.location.hash.slice(1)), gulir);
    const onHash = () => dariHash(true);
    const onKlik = (e) => {
      const a = e.target.closest?.('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      if (document.getElementById(id)?.hasAttribute('data-demo')) {
        e.preventDefault();
        history.replaceState(null, '', `#${id}`);
        tunjuk(id, true);
      }
    };
    // Setelah muat, gambar mengubah tata letak; gulir ulang sekali setelah beranda stabil.
    dariHash(true);
    const ulang = setTimeout(() => dariHash(true), 700);
    window.addEventListener('hashchange', onHash);
    document.addEventListener('click', onKlik);
    return () => {
      clearTimeout(timer); clearTimeout(ulang);
      window.removeEventListener('hashchange', onHash);
      document.removeEventListener('click', onKlik);
    };
  }, []);
  return null;
}

/** Bilah aksi lengket (hanya < 768 px): muncul setelah hero lewat, hilang saat footer terlihat. */
export function BilahLengket({ waHref }) {
  const [lewatHero, setLewatHero] = useState(false);
  const [footer, setFooter] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    const kaki = document.querySelector('footer');
    if (!hero || !kaki) return undefined;
    const a = new IntersectionObserver(([e]) => setLewatHero(!e.isIntersecting && e.boundingClientRect.top < 0), { threshold: 0 });
    const b = new IntersectionObserver(([e]) => setFooter(e.isIntersecting), { threshold: 0 });
    a.observe(hero); b.observe(kaki);
    return () => { a.disconnect(); b.disconnect(); };
  }, []);

  const tampil = lewatHero && !footer;
  return (
    <div
      aria-hidden={!tampil}
      inert={!tampil}
      className={`fixed inset-x-0 bottom-0 z-40 border-t-2 border-kuningan bg-arang px-3 pt-2.5 shadow-[0_-8px_24px_-12px_rgba(35,33,29,0.6)] transition duration-300 md:hidden ${tampil ? 'translate-y-0 opacity-100' : 'invisible translate-y-full opacity-0'}`}
      style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))' }}
    >
      <div className="mx-auto flex max-w-md gap-2.5">
        <a href="#galeri" className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded border border-galeri/40 font-display text-[15px] font-semibold text-galeri transition hover:border-kuningan hover:text-kuningan">
          <Eye size={16} aria-hidden="true" /> Lihat demo
        </a>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="plakat inline-flex min-h-11 flex-[1.3] items-center justify-center gap-1.5 rounded font-display text-[15px] font-semibold">
          <MessageCircle size={16} aria-hidden="true" /> Pesan via WhatsApp
        </a>
      </div>
    </div>
  );
}
