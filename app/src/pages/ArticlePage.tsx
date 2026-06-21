import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router';
import { articles, articleCategories, popularArticles } from '../data/articles';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === Number(id)) || articles[0];
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="pt-[80px]">
      {/* Article Header / Hero */}
      <section className="relative h-[400px] bg-gradient-to-b from-transparent via-transparent to-black/70 overflow-hidden">
        {/* Background thumbnail */}
        <div className="absolute inset-0 bg-[#C4A055]">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-10">
              <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg viewBox="0 0 48 48" className="w-12 h-12 text-white" fill="currentColor">
                  <path d="M28 4H12a4 4 0 00-4 4v32a4 4 0 004 4h24a4 4 0 004-4V16L28 4z" opacity="0.4"/>
                  <path d="M28 4v12h12" opacity="0.3"/>
                  <line x1="16" y1="26" x2="32" y2="26" opacity="0.5" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="32" x2="28" y2="32" opacity="0.5" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <p className="text-white/60 text-sm">Artikel Laboratorium</p>
            </div>
          </div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="max-w-[900px] mx-auto">
            <span className="inline-block px-3 py-1 bg-[#D4A843] text-white text-xs font-medium rounded-full mb-3">
              {article.category}
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-[42px] font-bold text-white leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 mt-4 text-white/70 text-sm">
              <span>{article.date}</span>
              <span>|</span>
              <span>{article.readTime} baca</span>
              <span>|</span>
              <span>oleh {article.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div ref={contentRef} className="flex-1 max-w-[800px]">
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: article.content || `<p>${article.excerpt}</p>`,
                }}
              />

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-[#E0E0E0]">
                <p className="text-sm text-[#6B6B6B] mb-3">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-[#E0E0E0] rounded-full text-xs text-[#1A1A1A] hover:border-[#D4A843] hover:text-[#D4A843] cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8">
                <p className="text-sm text-[#6B6B6B] mb-3">Bagikan artikel:</p>
                <div className="flex gap-2">
                  {['Facebook', 'Twitter', 'LinkedIn', 'WhatsApp'].map((s) => (
                    <button
                      key={s}
                      className="px-4 py-2 bg-[#F5E6C3] text-[#8B6914] text-xs rounded-full hover:bg-[#D4A843] hover:text-white transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-[300px] shrink-0 space-y-8">
              {/* Categories */}
              <div className="bg-[#FAF5E6] rounded-lg p-6">
                <h4 className="font-semibold text-[#1A1A1A] mb-4">Kategori</h4>
                <ul className="space-y-2.5">
                  {articleCategories.map((cat) => (
                    <li key={cat.name} className="flex items-center justify-between">
                      <span className="text-sm text-[#1A1A1A] hover:text-[#D4A843] cursor-pointer transition-colors">
                        {cat.name}
                      </span>
                      <span className="text-xs text-[#6B6B6B] bg-white px-2 py-0.5 rounded-full">
                        {cat.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Articles */}
              <div>
                <h4 className="font-semibold text-[#1A1A1A] mb-4">Artikel Populer</h4>
                <div className="space-y-4">
                  {popularArticles.map((pa) => (
                    <Link
                      key={pa.id}
                      to={`/article/${pa.id}`}
                      className={`flex gap-3 group ${
                        pa.id === article.id ? 'opacity-50 pointer-events-none' : ''
                      }`}
                    >
                      <div className="w-16 h-12 bg-[#F5E6C3] rounded shrink-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-[#D4A843]/30 rounded-full" />
                      </div>
                      <div>
                        <h5 className="text-sm text-[#1A1A1A] group-hover:text-[#D4A843] transition-colors line-clamp-2 leading-snug">
                          {pa.title}
                        </h5>
                        <span className="text-xs text-[#6B6B6B]">{pa.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tags Cloud */}
              <div>
                <h4 className="font-semibold text-[#1A1A1A] mb-4">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'analytical balance',
                    'pH meter',
                    'autoclave',
                    'kalibrasi',
                    'safety',
                    'reagen',
                    'glassware',
                    'centrifuge',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-[#E0E0E0] rounded-full text-xs text-[#1A1A1A] hover:border-[#D4A843] hover:text-[#D4A843] cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
