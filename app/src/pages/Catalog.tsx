import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { Search, Star, ShoppingCart, Filter } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { allProducts, categories } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Terbaru');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredProducts = allProducts
    .filter((p) => {
      const matchCategory =
        activeCategory === 'Semua' || p.category === activeCategory;
      const matchSearch =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'Harga: Rendah ke Tinggi') return a.price - b.price;
      if (sortBy === 'Harga: Tinggi ke Rendah') return b.price - a.price;
      return b.id - a.id;
    });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cat-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProducts]);

  return (
    <div>
      {/* Header */}
      <section className="gradient-golden-soft pt-[80px]">
        <div className="py-12 lg:py-16 text-center">
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm mb-3">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>\u003e</span>
            <span>Katalog Produk</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Katalog Produk
          </h1>
          {/* Search */}
          <div className="mt-6 flex justify-center px-6">
            <div className="bg-white rounded-full flex items-center px-5 py-3 max-w-[500px] w-full shadow-lg">
              <Search size={18} className="text-[#6B6B6B] mr-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari produk..."
                className="flex-1 outline-none text-[#1A1A1A] placeholder-[#999] text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-0 z-40 bg-white border-b border-[#E0E0E0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-4 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 mr-4">
            <Filter size={16} className="text-[#6B6B6B]" />
            <span className="text-sm text-[#6B6B6B]">Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#D4A843] text-white'
                  : 'border border-[#E0E0E0] text-[#1A1A1A] hover:border-[#D4A843] hover:text-[#D4A843]'
              }`}
            >
              {cat}
            </button>
          ))}
          <div className="ml-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-[#E0E0E0] rounded-md px-3 py-2 text-sm text-[#1A1A1A] outline-none focus:border-[#D4A843]"
            >
              <option>Terbaru</option>
              <option>Harga: Rendah ke Tinggi</option>
              <option>Harga: Tinggi ke Rendah</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section ref={sectionRef} className="bg-[#FAF5E6] py-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <p className="text-sm text-[#6B6B6B] mb-6">
            Menampilkan {filteredProducts.length} dari {allProducts.length} produk
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="cat-card bg-white rounded-lg overflow-hidden card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <Link to={`/product/${product.id}`}>
                  {/* Image */}
                  <div className="relative aspect-square bg-[#F5E6C3] flex items-center justify-center overflow-hidden">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 mx-auto bg-[#D4A843]/20 rounded-full flex items-center justify-center mb-2">
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
                </Link>

                {/* Info */}
                <div className="p-4">
                  <span className="inline-block px-3 py-0.5 bg-[#F5E6C3] text-[#8B6914] text-[11px] rounded-full mb-2">
                    {product.category}
                  </span>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-[#1A1A1A] text-[15px] leading-snug mb-2 line-clamp-2 group-hover:text-[#D4A843] transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1 mb-2">
                    <Star size={13} className="text-[#D4A843] fill-[#D4A843]" />
                    <span className="text-xs text-[#6B6B6B]">
                      {product.rating} ({product.reviews} review)
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-[#D4A843] font-bold text-lg">
                      {formatPrice(product.price)}
                    </span>
                    {product.oldPrice && (
                      <span className="text-[#6B6B6B] text-[13px] line-through">
                        {formatPrice(product.oldPrice)}
                      </span>
                    )}
                  </div>
                  <button className="w-full bg-[#D4A843] text-white font-medium py-2.5 rounded flex items-center justify-center gap-2 hover:bg-[#B88D2E] transition-colors">
                    <ShoppingCart size={16} />
                    Keranjang
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-[#6B6B6B]">
                Tidak ada produk yang sesuai dengan filter Anda.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('Semua');
                  setSearchQuery('');
                }}
                className="mt-4 text-[#D4A843] hover:underline"
              >
                Reset filter
              </button>
            </div>
          )}

          {/* Pagination */}
          {filteredProducts.length > 0 && (
            <div className="flex justify-center items-center gap-2 mt-10">
              {['← Prev', '1', '2', '3', '...', 'Next →'].map((item, i) => (
                <button
                  key={i}
                  className={`px-4 py-2.5 rounded text-sm font-medium transition-colors ${
                    i === 1
                      ? 'bg-[#D4A843] text-white'
                      : 'border border-[#E0E0E0] text-[#1A1A1A] hover:border-[#D4A843] hover:text-[#D4A843]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
