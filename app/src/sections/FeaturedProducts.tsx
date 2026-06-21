import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { featuredProducts } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fp-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      });

      gsap.from('.fp-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="gradient-golden-soft py-16 lg:py-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="fp-heading">
            <span className="label-category text-white/70 block mb-3">
              PRODUK UNGGULAN
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Peralatan Pilihan untuk Laboratorium Anda
            </h2>
          </div>
          <Link
            to="/catalog"
            className="btn-outline-white whitespace-nowrap text-sm"
          >
            Lihat Semua <ArrowRight size={16} className="inline ml-1" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="fp-card bg-white rounded-lg overflow-hidden card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-[#F5E6C3] flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto bg-[#D4A843]/20 rounded-full flex items-center justify-center mb-3">
                    <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#8B6914]" fill="currentColor">
                      <circle cx="24" cy="14" r="8" opacity="0.5"/>
                      <rect x="12" y="24" width="24" height="18" rx="3" opacity="0.35"/>
                    </svg>
                  </div>
                  <p className="text-xs text-[#8B6914] font-medium">{product.brand}</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium text-sm border border-white px-4 py-2 rounded">
                    Lihat Detail
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <span className="inline-block px-3 py-0.5 bg-[#F5E6C3] text-[#8B6914] text-xs rounded-full mb-2">
                  {product.category}
                </span>
                <h3 className="font-semibold text-[#1A1A1A] text-[15px] leading-snug mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star size={13} className="text-[#D4A843] fill-[#D4A843]" />
                  <span className="text-xs text-[#6B6B6B]">{product.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#D4A843] font-bold text-lg">
                    {formatPrice(product.price)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-[#6B6B6B] text-sm line-through">
                      {formatPrice(product.oldPrice)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
