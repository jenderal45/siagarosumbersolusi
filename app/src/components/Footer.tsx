import { Link } from 'react-router';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="text-[#D4A843] font-bold text-2xl">
              SIAGARO
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              PT Siagaro Sumber Solusi adalah distributor resmi peralatan laboratorium, 
              reagen kimia, dan safety equipment terpercaya di Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[15px] mb-4">Menu Cepat</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Beranda' },
                { to: '/catalog', label: 'Katalog Produk' },
                { to: '/#layanan', label: 'Layanan' },
                { to: '/#artikel', label: 'Artikel' },
                { to: '/admin', label: 'Admin Panel' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/60 hover:text-[#D4A843] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-[15px] mb-4">Kategori Produk</h4>
            <ul className="space-y-2.5">
              {[
                'Peralatan Lab',
                'Reagen Kimia',
                'Safety Equipment',
                'Glassware',
                'Instrumen Analisis',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/catalog"
                    className="text-sm text-white/60 hover:text-[#D4A843] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[15px] mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#D4A843]" />
                <span>Jl. Raya Laboratorium No. 123, Jakarta Selatan, 12345</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone size={16} className="shrink-0 text-[#D4A843]" />
                <span>+62 21 5555 1234</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail size={16} className="shrink-0 text-[#D4A843]" />
                <span>info@siagaro.co.id</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Clock size={16} className="shrink-0 text-[#D4A843]" />
                <span>Sen - Jum: 08.00 - 17.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 PT Siagaro Sumber Solusi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Kebijakan Privasi', 'Syarat & Ketentuan', 'Sitemap'].map((item) => (
              <span
                key={item}
                className="text-xs text-white/40 hover:text-white/60 cursor-pointer transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
