import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isCatalog = location.pathname === '/catalog';
  const isArticle = location.pathname.startsWith('/article');
  const isAdmin = location.pathname.startsWith('/admin');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  if (isAdmin) return null;

  const isHeroVisible = isHome && !scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHeroVisible
            ? 'bg-transparent'
            : 'bg-white shadow-md'
        }`}
        style={{ height: 80 }}
      >
        <div className="h-full flex items-center justify-between px-6 lg:px-20 max-w-[1600px] mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-[#D4A843] font-bold text-2xl tracking-tight">
              SIAGARO
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { to: '/', label: 'Beranda' },
              { to: '/catalog', label: 'Katalog' },
              { to: '/#artikel', label: 'Artikel' },
              { to: '/#layanan', label: 'Layanan' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`font-medium text-[15px] transition-opacity hover:opacity-70 ${
                  isHeroVisible ? 'text-white' : 'text-[#1A1A1A]'
                } ${
                  (isCatalog && item.to === '/catalog') ||
                  (isArticle && item.to === '/#artikel')
                    ? 'text-[#D4A843]'
                    : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Utility Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2 transition-opacity hover:opacity-70 ${
                isHeroVisible ? 'text-white' : 'text-[#1A1A1A]'
              }`}
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <Link
              to="/admin"
              className={`p-2 transition-opacity hover:opacity-70 hidden sm:block ${
                isHeroVisible ? 'text-white' : 'text-[#1A1A1A]'
              }`}
            >
              <User size={20} strokeWidth={1.5} />
            </Link>
            <button
              className={`p-2 transition-opacity hover:opacity-70 relative ${
                isHeroVisible ? 'text-white' : 'text-[#1A1A1A]'
              }`}
            >
              <ShoppingCart size={20} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 bg-[#D4A843] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 ${
                isHeroVisible ? 'text-white' : 'text-[#1A1A1A]'
              }`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-start justify-center pt-32">
          <div className="bg-white rounded-lg p-6 w-full max-w-xl mx-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <Search size={20} className="text-[#6B6B6B]" />
              <input
                type="text"
                placeholder="Cari peralatan laboratorium..."
                className="flex-1 text-lg outline-none text-[#1A1A1A] placeholder-[#999]"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-[#6B6B6B] hover:text-[#1A1A1A]"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[280px] bg-white shadow-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[#D4A843] font-bold text-xl">SIAGARO</span>
                <button onClick={() => setMobileOpen(false)}>
                  <X size={24} className="text-[#1A1A1A]" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { to: '/', label: 'Beranda' },
                  { to: '/catalog', label: 'Katalog Produk' },
                  { to: '/#artikel', label: 'Artikel' },
                  { to: '/#layanan', label: 'Layanan' },
                  { to: '/admin', label: 'Admin Panel' },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-[#1A1A1A] font-medium py-2 hover:text-[#D4A843] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
