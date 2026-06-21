import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router';
import { Star, Check, ShoppingCart, MessageCircle, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { allProducts, featuredProducts } from '../data/products';

gsap.registerPlugin();

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

const tabs = ['Deskripsi', 'Spesifikasi', 'Dokumen', 'Review'];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = allProducts.find((p) => p.id === Number(id)) || featuredProducts[0];
  const [activeTab, setActiveTab] = useState('Deskripsi');
  const [selectedImage, setSelectedImage] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Related products (exclude current)
  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const images = [0, 1, 2, 3]; // Placeholder for 4 images

  return (
    <div className="pt-[80px]">
      {/* Product Overview */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#6B6B6B] mb-8">
            <Link to="/" className="hover:text-[#D4A843]">Home</Link>
            <span>\u003e;</span>
            <Link to="/catalog" className="hover:text-[#D4A843]">Katalog</Link>
            <span>\u003e;</span>
            <span className="text-[#1A1A1A]">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image Gallery */}
            <div>
              {/* Main Image */}
              <div className="relative aspect-[4/3] bg-[#F5E6C3] rounded-lg flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto bg-[#D4A843]/20 rounded-full flex items-center justify-center mb-4">
                    <svg viewBox="0 0 64 64" className="w-14 h-14 text-[#8B6914]" fill="currentColor">
                      <circle cx="32" cy="20" r="10" opacity="0.5"/>
                      <rect x="18" y="30" width="28" height="22" rx="4" opacity="0.35"/>
                      <rect x="14" y="52" width="36" height="4" rx="2" opacity="0.25"/>
                    </svg>
                  </div>
                  <p className="text-sm text-[#8B6914] font-medium">{product.brand}</p>
                  <p className="text-xs text-[#8B6914]/60 mt-1">{product.name}</p>
                </div>
                {/* Nav arrows */}
                <button
                  onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setSelectedImage(Math.min(images.length - 1, selectedImage + 1))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-4">
                {images.map((i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 rounded-lg bg-[#F5E6C3] flex items-center justify-center border-2 transition-colors ${
                      selectedImage === i ? 'border-[#D4A843]' : 'border-transparent'
                    }`}
                  >
                    <div className="w-6 h-6 bg-[#D4A843]/30 rounded-full" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div ref={contentRef}>
              <span className="inline-block px-3 py-1 bg-[#F5E6C3] text-[#8B6914] text-xs font-medium rounded-full mb-3">
                {product.category}
              </span>
              <h1 className="text-2xl lg:text-[28px] font-bold text-[#1A1A1A] leading-tight mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={16}
                      className={
                        s <= Math.round(product.rating)
                          ? 'text-[#D4A843] fill-[#D4A843]'
                          : 'text-[#E0E0E0] fill-[#E0E0E0]'
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-[#6B6B6B]">
                  {product.rating} ({product.reviews || 0} review)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-[#D4A843]">
                  {formatPrice(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="text-lg text-[#6B6B6B] line-through">
                    {formatPrice(product.oldPrice)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-[15px] text-[#6B6B6B] leading-relaxed mb-6">
                {product.description ||
                  'Produk berkualitas tinggi untuk kebutuhan laboratorium Anda. Dapatkan dengan harga terbaik dan garansi resmi.'}
              </p>

              {/* Key Features */}
              <div className="space-y-2.5 mb-8">
                {['Garansi resmi 1 tahun', 'Gratis pelatihan penggunaan', 'Dukungan teknis 24/7', 'Pengiriman ke seluruh Indonesia'].map(
                  (feature) => (
                    <div key={feature} className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#D4A843] shrink-0" />
                      <span className="text-sm text-[#1A1A1A]">{feature}</span>
                    </div>
                  )
                )}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <button className="btn-primary flex items-center gap-2">
                  <ShoppingCart size={18} />
                  Tambah ke Keranjang
                </button>
                <button className="btn-outline flex items-center gap-2">
                  <MessageCircle size={18} />
                  Tanya Produk
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border border-[#E0E0E0] rounded text-[#1A1A1A] hover:border-[#D4A843] hover:text-[#D4A843] transition-colors">
                  <Download size={18} />
                  Unduh Brosur
                </button>
              </div>

              {/* Barcode placeholder */}
              <div className="mt-6 p-4 bg-[#FAF5E6] rounded-lg inline-block">
                <p className="text-xs text-[#6B6B6B] mb-1">Kode Produk</p>
                <div className="flex items-center gap-2">
                  <div className="h-8 flex items-end gap-[1px]">
                    {[2,1,3,2,4,1,3,2,1,4,2,3].map((h, i) => (
                      <div key={i} className="w-[2px] bg-[#1A1A1A]" style={{ height: `${h * 6}px` }} />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-[#1A1A1A]">
                    {String(product.id).padStart(6, '0')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="bg-[#FAF5E6] py-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          {/* Tab Navigation */}
          <div className="flex border-b border-[#E0E0E0] mb-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap transition-colors border-b-2 -mb-px ${
                  activeTab === tab
                    ? 'border-[#D4A843] text-[#D4A843]'
                    : 'border-transparent text-[#6B6B6B] hover:text-[#1A1A1A]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg p-6 lg:p-8">
            {activeTab === 'Deskripsi' && (
              <div className="prose max-w-none">
                <p className="text-[#1A1A1A] leading-relaxed">
                  {product.description ||
                    `${product.name} adalah produk unggulan dari ${product.brand} yang dirancang untuk memberikan performa terbaik di laboratorium Anda. Dengan teknologi terkini dan material berkualitas, produk ini menjamin akurasi dan keandalan dalam setiap penggunaan.`}
                </p>
                <p className="text-[#1A1A1A] leading-relaxed mt-4">
                  Produk ini cocok untuk berbagai aplikasi laboratorium termasuk riset,
                  pengujian kualitas, dan produksi. Tersedia dengan garansi resmi dan
                  dukungan purna jual dari tim teknis kami.
                </p>
              </div>
            )}

            {activeTab === 'Spesifikasi' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#F5E6C3]">
                      <th className="text-left px-4 py-3 font-semibold text-[#1A1A1A] text-sm">
                        Parameter
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-[#1A1A1A] text-sm">
                        Nilai
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specifications ? (
                      Object.entries(product.specifications).map(([key, value], i) => (
                        <tr
                          key={key}
                          className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF5E6]'}
                        >
                          <td className="px-4 py-3 text-sm text-[#1A1A1A]">{key}</td>
                          <td className="px-4 py-3 text-sm text-[#6B6B6B]">{value}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={2} className="px-4 py-6 text-center text-[#6B6B6B]">
                          Spesifikasi lengkap tersedia di brosur produk.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'Dokumen' && (
              <div className="space-y-3">
                {[
                  { name: 'Brosur Produk.pdf', size: '2.4 MB' },
                  { name: 'Manual Pengguna.pdf', size: '5.1 MB' },
                  { name: 'Sertifikat Kalibrasi.pdf', size: '1.2 MB' },
                ].map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-center justify-between p-4 border border-[#E0E0E0] rounded-lg hover:border-[#D4A843] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#F5E6C3] rounded-lg flex items-center justify-center">
                        <Download size={18} className="text-[#8B6914]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#1A1A1A]">{doc.name}</p>
                        <p className="text-xs text-[#6B6B6B]">{doc.size}</p>
                      </div>
                    </div>
                    <button className="text-[#D4A843] text-sm font-medium hover:underline">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'Review' && (
              <div className="space-y-4">
                {[
                  { name: 'Ahmad S.', rating: 5, text: 'Produk sangat bagus dan akurat. Pengiriman cepat dan packing rapi.', date: '10 Jan 2026' },
                  { name: 'Dr. Rina M.', rating: 5, text: 'Sangat puas dengan kualitasnya. Tim teknis juga sangat membantu.', date: '5 Jan 2026' },
                ].map((review, i) => (
                  <div key={i} className="p-4 border border-[#E0E0E0] rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-[#D4A843] rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {review.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#1A1A1A]">{review.name}</p>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              size={12}
                              className={
                                s <= review.rating
                                  ? 'text-[#D4A843] fill-[#D4A843]'
                                  : 'text-[#E0E0E0] fill-[#E0E0E0]'
                              }
                            />
                          ))}
                        </div>
                      </div>
                      <span className="ml-auto text-xs text-[#6B6B6B]">{review.date}</span>
                    </div>
                    <p className="text-sm text-[#6B6B6B]">{review.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-14 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Produk Terkait</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/product/${rp.id}`}
                  className="bg-white rounded-lg overflow-hidden card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-square bg-[#F5E6C3] flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#D4A843]/20 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#D4A843]/40 rounded-full" />
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-[#8B6914] bg-[#F5E6C3] px-2 py-0.5 rounded-full">
                      {rp.category}
                    </span>
                    <h3 className="font-semibold text-[#1A1A1A] text-sm mt-2 line-clamp-2">
                      {rp.name}
                    </h3>
                    <p className="text-[#D4A843] font-bold mt-2">
                      {formatPrice(rp.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
