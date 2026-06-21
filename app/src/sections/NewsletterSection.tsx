import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NewsletterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.news-content', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 gradient-golden-soft">
      <div className="max-w-[600px] mx-auto px-6 lg:px-20">
        <div className="news-content text-center">
          <h2 className="text-xl md:text-2xl lg:text-[28px] font-bold text-white mb-3">
            Dapatkan Update Produk \u0026 Promo
          </h2>
          <p className="text-[15px] text-white/85 mb-8">
            Berlangganan newsletter kami untuk mendapatkan informasi produk terbaru dan penawaran spesial.
          </p>

          {submitted ? (
            <div className="bg-white/20 rounded-lg px-6 py-4">
              <p className="text-white font-medium">Terima kasih telah berlangganan!</p>
              <p className="text-white/70 text-sm mt-1">Anda akan menerima update terbaru dari kami.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email Anda"
                required
                className="px-5 py-3.5 rounded bg-white text-[#1A1A1A] placeholder-[#999] outline-none focus:ring-2 focus:ring-white/50 sm:w-[300px]"
              />
              <button
                type="submit"
                className="bg-[#1A1A1A] text-white font-semibold px-6 py-3.5 rounded hover:bg-[#333] transition-colors"
              >
                Berlangganan
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
