import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { Search, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const quickCategories = ['Peralatan Lab', 'Reagen', 'Safety', 'Kalibrasi'];

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.to(headlineRef.current, { opacity: 1, y: 0, duration: 0.6 })
        .to(subRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .to(searchRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .to(ctaRef.current, { opacity: 1, scale: 1, duration: 0.5 }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[600px] flex items-center gradient-golden-soft overflow-hidden"
      style={{ paddingTop: 80 }}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-white/10 hidden lg:block" />
      <div className="absolute bottom-10 right-60 w-48 h-48 rounded-full border border-white/10 hidden lg:block" />

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1
              ref={headlineRef}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] opacity-0 translate-y-8"
            >
              Solusi Laboratorium Terpercaya
            </h1>
            <p
              ref={subRef}
              className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl opacity-0 translate-y-5"
            >
              Peralatan laboratorium, reagen kimia, safety equipment, dan layanan
              kalibrasi dengan kualitas terjamin untuk riset dan industri.
            </p>

            {/* Search Bar */}
            <div
              ref={searchRef}
              className="mt-8 opacity-0 translate-y-5"
            >
              <div className="bg-white rounded-full flex items-center px-5 py-3.5 max-w-md shadow-lg">
                <Search size={18} className="text-[#6B6B6B] mr-3 shrink-0" />
                <input
                  type="text"
                  placeholder="Cari peralatan laboratorium..."
                  className="flex-1 outline-none text-[#1A1A1A] placeholder-[#999] text-sm"
                />
              </div>

              {/* Quick Categories */}
              <div className="flex flex-wrap gap-2 mt-4">
                {quickCategories.map((cat) => (
                  <Link
                    key={cat}
                    to="/catalog"
                    className="px-4 py-1.5 rounded-full border border-white/40 text-white text-sm hover:bg-white hover:text-[#D4A843] transition-all duration-300"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className="flex flex-wrap items-center gap-4 mt-8 opacity-0 scale-95"
            >
              <Link
                to="/catalog"
                className="bg-white text-[#D4A843] font-semibold px-8 py-3.5 rounded hover:bg-white/90 transition-colors shadow-lg"
              >
                Lihat Katalog
              </Link>
              <a
                href="#layanan"
                className="text-white font-medium flex items-center gap-2 hover:underline underline-offset-4 transition-all"
              >
                Hubungi Kami <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="w-[400px] h-[400px] rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <svg viewBox="0 0 64 64" className="w-14 h-14 text-white" fill="currentColor">
                      <circle cx="32" cy="20" r="10" opacity="0.6"/>
                      <rect x="18" y="30" width="28" height="22" rx="4" opacity="0.4"/>
                      <rect x="14" y="52" width="36" height="4" rx="2" opacity="0.3"/>
                    </svg>
                  </div>
                  <p className="text-white/80 text-lg font-medium">Analytical Balance</p>
                  <p className="text-white/50 text-sm mt-1">MS-TS303L/00</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg px-4 py-3 shadow-xl">
                <p className="text-xs text-[#6B6B6B]">Produk Terlaris</p>
                <p className="text-[#D4A843] font-bold text-lg">500+ Produk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
