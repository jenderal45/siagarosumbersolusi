import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { brands } from '../data/brands';

gsap.registerPlugin(ScrollTrigger);

export default function BrandsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.brand-logo', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-white">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-20">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-[#1A1A1A] mb-2">
            Brand yang Kami Distribusikan
          </h2>
          <p className="text-sm text-[#6B6B6B]">
            Kami bekerja sama dengan brand ternama dunia untuk memberikan produk berkualitas.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-10 items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="brand-logo flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <div className="text-center">
                <span className="text-xs font-bold text-[#1A1A1A] tracking-wide">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
