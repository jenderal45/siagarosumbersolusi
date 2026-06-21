import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { articles } from '../data/articles';

gsap.registerPlugin(ScrollTrigger);

export default function ArticlesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.art-header', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      });

      gsap.from('.art-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="artikel" ref={sectionRef} className="py-16 lg:py-20 bg-[#F0F0F0]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="art-header flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="label-category text-[#D4A843] mb-3 block">
              ARTIKEL TERBARU
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Wawasan \u0026 Informasi Laboratorium
            </h2>
          </div>
          <span className="text-sm text-[#6B6B6B] flex items-center gap-1 cursor-pointer hover:text-[#D4A843] transition-colors">
            Lihat Semua Artikel <ArrowRight size={14} />
          </span>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="art-card bg-white rounded-lg overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 group"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-[#F5E6C3] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center p-6">
                    <div className="w-12 h-12 mx-auto bg-[#D4A843]/20 rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#8B6914]" fill="currentColor">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" opacity="0.5"/>
                        <polyline points="14 2 14 8 20 8" opacity="0.3"/>
                        <line x1="16" y1="13" x2="8" y2="13" opacity="0.4"/>
                        <line x1="16" y1="17" x2="8" y2="17" opacity="0.4"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-[#6B6B6B]">{article.date}</span>
                  <span className="text-[#E0E0E0]">|</span>
                  <span className="text-xs text-[#6B6B6B]">{article.readTime} baca</span>
                </div>
                <h3 className="font-semibold text-[#1A1A1A] text-[17px] leading-snug mb-3 line-clamp-2 group-hover:text-[#D4A843] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <span className="text-[#D4A843] text-sm font-medium flex items-center gap-1">
                  Baca Selengkapnya <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
