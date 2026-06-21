import { useState } from 'react';
import { Link } from 'react-router';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  FileText,
  Settings,
  TrendingUp,
  TrendingDown,
  Plus,
  Search,
  Edit,
  Trash2,
  X,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Truck,
  Star,
  Lock,
  LogOut,
  Save,
  UserCheck,
  Ban,
  AlertTriangle,
} from 'lucide-react';
import { allProducts } from '../data/products';
import { orders, formatPrice } from '../data/orders';
import { users } from '../data/users';
import { articles } from '../data/articles';
import { useAdminAuth } from '../hooks/useAdminAuth';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', key: 'dashboard' },
  { icon: Package, label: 'Produk', key: 'products' },
  { icon: ShoppingCart, label: 'Pesanan', key: 'orders' },
  { icon: Users, label: 'Pengguna', key: 'users' },
  { icon: FileText, label: 'Artikel', key: 'articles' },
  { icon: Settings, label: 'Pengaturan', key: 'settings' },
];

const statCards = [
  {
    label: 'Total Penjualan',
    value: 'Rp 245.000.000',
    change: '+12%',
    up: true,
    icon: TrendingUp,
  },
  {
    label: 'Pesanan Baru',
    value: '48',
    change: '+8%',
    up: true,
    icon: TrendingUp,
  },
  { label: 'Produk Aktif', value: '156', change: '', up: true, icon: Package },
  { label: 'Pengguna', value: '320', change: '+5%', up: true, icon: Users },
];

/* ─── Status helpers ─── */
const orderStatusConfig = {
  pending: { label: 'Menunggu', color: 'bg-yellow-100 text-yellow-700', icon: Clock },
  confirmed: { label: 'Dikonfirmasi', color: 'bg-blue-100 text-blue-700', icon: CheckCircle },
  shipped: { label: 'Dikirim', color: 'bg-purple-100 text-purple-700', icon: Truck },
  delivered: { label: 'Selesai', color: 'bg-green-100 text-green-700', icon: CheckCircle },
  cancelled: { label: 'Dibatalkan', color: 'bg-red-100 text-red-700', icon: XCircle },
};

const paymentStatusConfig = {
  unpaid: { label: 'Belum Bayar', color: 'bg-red-100 text-red-700' },
  paid: { label: 'Lunas', color: 'bg-green-100 text-green-700' },
  refunded: { label: 'Refund', color: 'bg-gray-100 text-gray-700' },
};

const userRoleConfig = {
  admin: { label: 'Admin', color: 'bg-purple-100 text-purple-700' },
  customer: { label: 'Pelanggan', color: 'bg-blue-100 text-blue-700' },
  distributor: { label: 'Distributor', color: 'bg-orange-100 text-orange-700' },
};

const userStatusConfig = {
  active: { label: 'Aktif', color: 'bg-green-100 text-green-700' },
  inactive: { label: 'Nonaktif', color: 'bg-gray-100 text-gray-700' },
  suspended: { label: 'Ditangguhkan', color: 'bg-red-100 text-red-700' },
};

/* ═══════════════════════════════════════════
   LOGIN PAGE
   ═══════════════════════════════════════════ */
function AdminLogin() {
  const { login } = useAdminAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    const ok = login(password);
    if (!ok) setError(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#C4A055] to-[#8B6914] px-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <Link to="/" className="text-[#D4A843] font-bold text-2xl">
            SIAGARO
          </Link>
          <h2 className="mt-4 text-xl font-bold text-[#1A1A1A]">Admin Panel</h2>
          <p className="text-sm text-[#6B6B6B] mt-1">
            Masukkan password untuk mengakses panel admin
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
              <Lock size={14} className="inline mr-1 -mt-0.5" />
              Password
            </label>
            <div className="relative">
              <input
                type={showPw ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Masukkan password"
                className={`w-full border rounded-lg px-4 py-3 pr-12 text-sm outline-none transition-colors ${
                  error
                    ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                    : 'border-[#E0E0E0] focus:border-[#D4A843] focus:ring-2 focus:ring-[#D4A843]/15'
                }`}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] text-xs hover:text-[#1A1A1A]"
              >
                {showPw ? 'Sembunyi' : 'Lihat'}
              </button>
            </div>
            {error && (
              <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                <AlertTriangle size={12} /> Password salah. Coba lagi.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#D4A843] text-white font-semibold py-3 rounded-lg hover:bg-[#B88D2E] transition-colors"
          >
            Masuk
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-[#6B6B6B] hover:text-[#D4A843] transition-colors">
            ← Kembali ke Website
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   DASHBOARD VIEW
   ═══════════════════════════════════════════ */
function DashboardView() {
  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => (
          <div key={card.label} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-[#F5E6C3] rounded-lg flex items-center justify-center">
                <card.icon size={20} className="text-[#D4A843]" />
              </div>
              {card.change && (
                <span
                  className={`flex items-center gap-0.5 text-xs font-medium ${
                    card.up ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  {card.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {card.change}
                </span>
              )}
            </div>
            <p className="text-sm text-[#6B6B6B]">{card.label}</p>
            <p className="text-2xl font-bold text-[#1A1A1A] mt-1">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold text-[#1A1A1A] mb-6">Penjualan Bulanan</h3>
          <div className="h-48 flex items-end gap-3">
            {[
              { month: 'Jan', value: 40 },
              { month: 'Feb', value: 55 },
              { month: 'Mar', value: 45 },
              { month: 'Apr', value: 70 },
              { month: 'Mei', value: 65 },
              { month: 'Jun', value: 85 },
            ].map((d) => (
              <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-[#D4A843] rounded-t transition-all duration-500"
                  style={{ height: `${d.value * 1.8}px` }}
                />
                <span className="text-xs text-[#6B6B6B]">{d.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold text-[#1A1A1A] mb-6">Kategori Terlaris</h3>
          <div className="space-y-4">
            {[
              { name: 'Peralatan Lab', value: 45, color: '#D4A843' },
              { name: 'Reagen', value: 25, color: '#C4A055' },
              { name: 'Safety', value: 18, color: '#8B6914' },
              { name: 'Glassware', value: 12, color: '#A08230' },
            ].map((cat) => (
              <div key={cat.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#1A1A1A]">{cat.name}</span>
                  <span className="text-[#6B6B6B]">{cat.value}%</span>
                </div>
                <div className="h-2 bg-[#F0F0F0] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${cat.value}%`, backgroundColor: cat.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="font-semibold text-[#1A1A1A] mb-4">Aktivitas Terbaru</h3>
        <div className="space-y-3">
          {[
            { text: 'Pesanan baru #ORD-2026-0009 dari PT Sinar Abadi', time: '5 menit lalu', type: 'order' },
            { text: 'Produk Analytical Balance stok diperbarui: 12 → 15', time: '15 menit lalu', type: 'product' },
            { text: 'Pengguna baru terdaftar: Dr. Wijaya Kusuma', time: '30 menit lalu', type: 'user' },
            { text: 'Pesanan ORD-2026-0004 dikonfirmasi pembayaran', time: '1 jam lalu', type: 'payment' },
            { text: 'Artikel baru dipublikasikan: Panduan Memilih Autoclave', time: '2 jam lalu', type: 'article' },
          ].map((activity, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-[#F0F0F0] last:border-0">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === 'order' ? 'bg-blue-100' :
                  activity.type === 'product' ? 'bg-yellow-100' :
                  activity.type === 'user' ? 'bg-green-100' :
                  activity.type === 'payment' ? 'bg-purple-100' : 'bg-orange-100'
                }`}>
                  {activity.type === 'order' && <ShoppingCart size={14} className="text-blue-600" />}
                  {activity.type === 'product' && <Package size={14} className="text-yellow-600" />}
                  {activity.type === 'user' && <Users size={14} className="text-green-600" />}
                  {activity.type === 'payment' && <CheckCircle size={14} className="text-purple-600" />}
                  {activity.type === 'article' && <FileText size={14} className="text-orange-600" />}
                </div>
                <span className="text-sm text-[#1A1A1A]">{activity.text}</span>
              </div>
              <span className="text-xs text-[#6B6B6B] shrink-0 ml-4">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   PRODUCTS VIEW
   ═══════════════════════════════════════════ */
function ProductsView() {
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const filtered = allProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-[#1A1A1A]">Kelola Produk</h2>
        <button onClick={() => setShowAdd(true)} className="btn-primary flex items-center gap-2 text-sm">
          <Plus size={16} /> Tambah Produk
        </button>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm flex flex-wrap gap-3">
        <div className="flex items-center gap-2 bg-[#F5F5F5] rounded-md px-3 py-2 flex-1 min-w-[200px]">
          <Search size={16} className="text-[#6B6B6B]" />
          <input
            type="text" value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari produk..."
            className="bg-transparent outline-none text-sm text-[#1A1A1A] flex-1"
          />
        </div>
        <select className="border border-[#E0E0E0] rounded-md px-3 py-2 text-sm text-[#1A1A1A] outline-none">
          <option>Semua Kategori</option><option>Peralatan Lab</option><option>Safety</option>
        </select>
        <select className="border border-[#E0E0E0] rounded-md px-3 py-2 text-sm text-[#1A1A1A] outline-none">
          <option>Semua Status</option><option>Aktif</option><option>Draft</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="bg-[#F5E6C3]">
              <th className="px-4 py-3"><input type="checkbox" className="rounded" /></th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Gambar</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Nama Produk</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Kategori</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Harga</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Stok</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Aksi</th>
            </tr></thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-b border-[#E0E0E0] hover:bg-[#FAF5E6] transition-colors">
                  <td className="px-4 py-3"><input type="checkbox" className="rounded" /></td>
                  <td className="px-4 py-3"><div className="w-10 h-10 bg-[#F5E6C3] rounded flex items-center justify-center"><div className="w-5 h-5 bg-[#D4A843]/30 rounded-full" /></div></td>
                  <td className="px-4 py-3 text-sm text-[#1A1A1A] font-medium">{p.name}</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 bg-[#F5E6C3] text-[#8B6914] text-xs rounded-full">{p.category}</span></td>
                  <td className="px-4 py-3 text-sm text-[#D4A843] font-medium">{formatPrice(p.price)}</td>
                  <td className="px-4 py-3 text-sm text-[#1A1A1A]">{p.inStock ? 'Tersedia' : 'Habis'}</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Aktif</span></td>
                  <td className="px-4 py-3"><div className="flex gap-2"><button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"><Edit size={16} /></button><button className="p-1.5 text-red-500 hover:bg-red-50 rounded"><Trash2 size={16} /></button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-4 py-3 border-t border-[#E0E0E0]">
          <span className="text-sm text-[#6B6B6B]">Menampilkan {filtered.length} produk</span>
          <div className="flex gap-1">
            <button className="p-2 border border-[#E0E0E0] rounded hover:border-[#D4A843]"><ChevronLeft size={16} /></button>
            <button className="px-3 py-1 bg-[#D4A843] text-white rounded text-sm">1</button>
            <button className="p-2 border border-[#E0E0E0] rounded hover:border-[#D4A843]"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      {/* Add Product Modal */}
      {showAdd && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-[700px] max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-[#E0E0E0]">
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Tambah Produk Baru</h3>
              <button onClick={() => setShowAdd(false)} className="p-1 hover:bg-[#F5F5F5] rounded"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div><label className="block text-sm font-medium mb-1.5">Nama Produk *</label><input type="text" placeholder="Masukkan nama produk" className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D4A843]" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1.5">Kategori *</label><select className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none"><option>Pilih kategori</option><option>Peralatan Lab</option><option>Reagen</option><option>Safety</option></select></div>
                <div><label className="block text-sm font-medium mb-1.5">Brand</label><input type="text" placeholder="Nama brand" className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D4A843]" /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1.5">Harga *</label><input type="number" placeholder="0" className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D4A843]" /></div>
                <div><label className="block text-sm font-medium mb-1.5">Harga Lama</label><input type="number" placeholder="0" className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D4A843]" /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1.5">Stok *</label><input type="number" placeholder="0" className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D4A843]" /></div>
                <div><label className="block text-sm font-medium mb-1.5">Status</label><select className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none"><option>Aktif</option><option>Draft</option></select></div>
              </div>
              <div><label className="block text-sm font-medium mb-1.5">Deskripsi</label><textarea rows={4} placeholder="Deskripsi produk..." className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D4A843] resize-none" /></div>
              <div><label className="block text-sm font-medium mb-1.5">Gambar Produk</label><div className="border-2 border-dashed border-[#E0E0E0] rounded-lg p-8 text-center hover:border-[#D4A843] cursor-pointer"><Plus size={24} className="mx-auto text-[#6B6B6B] mb-2" /><p className="text-sm text-[#6B6B6B]">Klik untuk upload gambar</p><p className="text-xs text-[#999] mt-1">PNG, JPG (max. 5MB)</p></div></div>
            </div>
            <div className="flex justify-end gap-3 p-6 border-t border-[#E0E0E0]">
              <button onClick={() => setShowAdd(false)} className="px-6 py-2.5 border border-[#E0E0E0] rounded-md text-sm hover:bg-[#F5F5F5]">Batal</button>
              <button onClick={() => setShowAdd(false)} className="btn-primary text-sm">Simpan Produk</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   ORDERS VIEW
   ═══════════════════════════════════════════ */
function OrdersView() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const filtered = orders.filter((o) => {
    const matchSearch = !search || o.id.toLowerCase().includes(search.toLowerCase()) || o.customer.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || o.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const orderDetail = orders.find((o) => o.id === selectedOrder);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-[#1A1A1A]">Kelola Pesanan</h2>

      {/* Filters */}
      <div className="bg-white rounded-lg p-4 shadow-sm flex flex-wrap gap-3">
        <div className="flex items-center gap-2 bg-[#F5F5F5] rounded-md px-3 py-2 flex-1 min-w-[200px]">
          <Search size={16} className="text-[#6B6B6B]" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cari nomor pesanan atau pelanggan..." className="bg-transparent outline-none text-sm flex-1" />
        </div>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border border-[#E0E0E0] rounded-md px-3 py-2 text-sm outline-none">
          <option value="all">Semua Status</option>
          <option value="pending">Menunggu</option>
          <option value="confirmed">Dikonfirmasi</option>
          <option value="shipped">Dikirim</option>
          <option value="delivered">Selesai</option>
          <option value="cancelled">Dibatalkan</option>
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
        {(['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'] as const).map((s) => {
          const cfg = orderStatusConfig[s];
          const count = orders.filter((o) => o.status === s).length;
          return (
            <div key={s} className="bg-white rounded-lg p-4 shadow-sm text-center">
              <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${cfg.color}`}>{cfg.label}</span>
              <p className="text-2xl font-bold text-[#1A1A1A] mt-2">{count}</p>
            </div>
          );
        })}
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="bg-[#F5E6C3]">
              <th className="px-4 py-3 text-left text-sm font-semibold">No. Pesanan</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Pelanggan</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Total</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Pembayaran</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Tanggal</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Aksi</th>
            </tr></thead>
            <tbody>
              {filtered.map((o) => {
                const osc = orderStatusConfig[o.status];
                const psc = paymentStatusConfig[o.paymentStatus];
                return (
                  <tr key={o.id} className="border-b border-[#E0E0E0] hover:bg-[#FAF5E6]">
                    <td className="px-4 py-3 text-sm font-mono text-[#1A1A1A]">{o.id}</td>
                    <td className="px-4 py-3 text-sm text-[#1A1A1A]">{o.customer}</td>
                    <td className="px-4 py-3 text-sm font-medium text-[#D4A843]">{formatPrice(o.total)}</td>
                    <td className="px-4 py-3"><span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${osc.color}`}><osc.icon size={10} />{osc.label}</span></td>
                    <td className="px-4 py-3"><span className={`inline-block px-2 py-0.5 rounded-full text-xs ${psc.color}`}>{psc.label}</span></td>
                    <td className="px-4 py-3 text-sm text-[#6B6B6B]">{o.date}</td>
                    <td className="px-4 py-3"><button onClick={() => setSelectedOrder(o.id)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"><Eye size={16} /></button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Detail Modal */}
      {orderDetail && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-[600px] max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-[#E0E0E0]">
              <div>
                <h3 className="text-lg font-semibold text-[#1A1A1A]">{orderDetail.id}</h3>
                <p className="text-sm text-[#6B6B6B]">{orderDetail.date}</p>
              </div>
              <button onClick={() => setSelectedOrder(null)} className="p-1 hover:bg-[#F5F5F5] rounded"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-5">
              <div className="flex gap-2">
                <span className={`px-3 py-1 rounded-full text-xs ${orderStatusConfig[orderDetail.status].color}`}>{orderStatusConfig[orderDetail.status].label}</span>
                <span className={`px-3 py-1 rounded-full text-xs ${paymentStatusConfig[orderDetail.paymentStatus].color}`}>{paymentStatusConfig[orderDetail.paymentStatus].label}</span>
              </div>
              <div><h4 className="text-sm font-semibold text-[#1A1A1A] mb-2">Informasi Pelanggan</h4>
                <p className="text-sm text-[#1A1A1A]">{orderDetail.customer}</p>
                <p className="text-sm text-[#6B6B6B]">{orderDetail.email}</p>
                <p className="text-sm text-[#6B6B6B]">{orderDetail.phone}</p>
                <p className="text-sm text-[#6B6B6B] mt-1">{orderDetail.address}</p>
              </div>
              <div><h4 className="text-sm font-semibold text-[#1A1A1A] mb-2">Item Pesanan</h4>
                <div className="space-y-2">
                  {orderDetail.items.map((item, i) => (
                    <div key={i} className="flex justify-between py-2 border-b border-[#F0F0F0]">
                      <div><p className="text-sm text-[#1A1A1A]">{item.product}</p><p className="text-xs text-[#6B6B6B]">{item.qty} x {formatPrice(item.price)}</p></div>
                      <p className="text-sm font-medium text-[#1A1A1A]">{formatPrice(item.qty * item.price)}</p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between pt-3"><span className="font-semibold text-[#1A1A1A]">Total</span><span className="font-bold text-[#D4A843] text-lg">{formatPrice(orderDetail.total)}</span></div>
              </div>
              <div className="flex gap-3 pt-2">
                {orderDetail.status === 'pending' && <button className="flex-1 bg-blue-600 text-white py-2.5 rounded-md text-sm font-medium hover:bg-blue-700"><CheckCircle size={16} className="inline mr-1" />Konfirmasi</button>}
                {orderDetail.status === 'confirmed' && <button className="flex-1 bg-purple-600 text-white py-2.5 rounded-md text-sm font-medium hover:bg-purple-700"><Truck size={16} className="inline mr-1" />Kirim</button>}
                {orderDetail.status === 'shipped' && <button className="flex-1 bg-green-600 text-white py-2.5 rounded-md text-sm font-medium hover:bg-green-700"><CheckCircle size={16} className="inline mr-1" />Selesai</button>}
                {orderDetail.status !== 'cancelled' && orderDetail.status !== 'delivered' && <button className="px-4 py-2.5 border border-red-300 text-red-500 rounded-md text-sm hover:bg-red-50"><XCircle size={16} className="inline mr-1" />Batalkan</button>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   USERS VIEW
   ═══════════════════════════════════════════ */
function UsersView() {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const filtered = users.filter((u) => {
    const matchSearch = !search || u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = roleFilter === 'all' || u.role === roleFilter;
    return matchSearch && matchRole;
  });

  const userDetail = users.find((u) => u.id === selectedUser);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-[#1A1A1A]">Kelola Pengguna</h2>

      <div className="bg-white rounded-lg p-4 shadow-sm flex flex-wrap gap-3">
        <div className="flex items-center gap-2 bg-[#F5F5F5] rounded-md px-3 py-2 flex-1 min-w-[200px]">
          <Search size={16} className="text-[#6B6B6B]" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cari nama atau email..." className="bg-transparent outline-none text-sm flex-1" />
        </div>
        <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} className="border border-[#E0E0E0] rounded-md px-3 py-2 text-sm outline-none">
          <option value="all">Semua Role</option>
          <option value="admin">Admin</option>
          <option value="customer">Pelanggan</option>
          <option value="distributor">Distributor</option>
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {(['admin', 'customer', 'distributor'] as const).map((r) => {
          const cfg = userRoleConfig[r];
          const count = users.filter((u) => u.role === r).length;
          return (
            <div key={r} className="bg-white rounded-lg p-4 shadow-sm text-center">
              <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${cfg.color}`}>{cfg.label}</span>
              <p className="text-2xl font-bold text-[#1A1A1A] mt-2">{count}</p>
            </div>
          );
        })}
        <div className="bg-white rounded-lg p-4 shadow-sm text-center">
          <span className="inline-block px-2 py-0.5 rounded-full text-xs bg-red-100 text-red-700">Total Pengguna</span>
          <p className="text-2xl font-bold text-[#1A1A1A] mt-2">{users.length}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="bg-[#F5E6C3]">
              <th className="px-4 py-3 text-left text-sm font-semibold">Nama</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Role</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Bergabung</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Pesanan</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Aksi</th>
            </tr></thead>
            <tbody>
              {filtered.map((u) => (
                <tr key={u.id} className="border-b border-[#E0E0E0] hover:bg-[#FAF5E6]">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#D4A843] rounded-full flex items-center justify-center text-white text-sm font-bold">{u.name[0]}</div>
                      <div><p className="text-sm font-medium text-[#1A1A1A]">{u.name}</p>{u.company && <p className="text-xs text-[#6B6B6B]">{u.company}</p>}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-[#6B6B6B]">{u.email}</td>
                  <td className="px-4 py-3"><span className={`inline-block px-2 py-0.5 rounded-full text-xs ${userRoleConfig[u.role].color}`}>{userRoleConfig[u.role].label}</span></td>
                  <td className="px-4 py-3"><span className={`inline-block px-2 py-0.5 rounded-full text-xs ${userStatusConfig[u.status].color}`}>{userStatusConfig[u.status].label}</span></td>
                  <td className="px-4 py-3 text-sm text-[#6B6B6B]">{u.joinDate}</td>
                  <td className="px-4 py-3 text-sm text-[#1A1A1A]">{u.orders}</td>
                  <td className="px-4 py-3"><div className="flex gap-2"><button onClick={() => setSelectedUser(u.id)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"><Eye size={16} /></button><button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"><Edit size={16} /></button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Detail Modal */}
      {userDetail && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-[500px] max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-[#E0E0E0]">
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Detail Pengguna</h3>
              <button onClick={() => setSelectedUser(null)} className="p-1 hover:bg-[#F5F5F5] rounded"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#D4A843] rounded-full flex items-center justify-center text-white text-xl font-bold">{userDetail.name[0]}</div>
                <div>
                  <h4 className="font-semibold text-[#1A1A1A]">{userDetail.name}</h4>
                  <p className="text-sm text-[#6B6B6B]">{userDetail.email}</p>
                  <div className="flex gap-2 mt-1"><span className={`px-2 py-0.5 rounded-full text-xs ${userRoleConfig[userDetail.role].color}`}>{userRoleConfig[userDetail.role].label}</span><span className={`px-2 py-0.5 rounded-full text-xs ${userStatusConfig[userDetail.status].color}`}>{userStatusConfig[userDetail.status].label}</span></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#FAF5E6] rounded-lg p-4 text-center"><p className="text-2xl font-bold text-[#D4A843]">{userDetail.orders}</p><p className="text-xs text-[#6B6B6B]">Total Pesanan</p></div>
                <div className="bg-[#FAF5E6] rounded-lg p-4 text-center"><p className="text-2xl font-bold text-[#D4A843]">{formatPrice(userDetail.totalSpent)}</p><p className="text-xs text-[#6B6B6B]">Total Belanja</p></div>
              </div>
              <div className="space-y-2">
                <p className="text-sm"><span className="text-[#6B6B6B]">Telepon:</span> <span className="text-[#1A1A1A]">{userDetail.phone}</span></p>
                {userDetail.company && <p className="text-sm"><span className="text-[#6B6B6B]">Perusahaan:</span> <span className="text-[#1A1A1A]">{userDetail.company}</span></p>}
                <p className="text-sm"><span className="text-[#6B6B6B]">Bergabung:</span> <span className="text-[#1A1A1A]">{userDetail.joinDate}</span></p>
              </div>
              <div className="flex gap-3 pt-2">
                <button className="flex-1 bg-[#D4A843] text-white py-2.5 rounded-md text-sm font-medium hover:bg-[#B88D2E]"><Edit size={16} className="inline mr-1" />Edit</button>
                {userDetail.status === 'active' ? (
                  <button className="px-4 py-2.5 border border-red-300 text-red-500 rounded-md text-sm hover:bg-red-50"><Ban size={16} className="inline mr-1" />Nonaktifkan</button>
                ) : (
                  <button className="px-4 py-2.5 border border-green-300 text-green-600 rounded-md text-sm hover:bg-green-50"><UserCheck size={16} className="inline mr-1" />Aktifkan</button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   ARTICLES VIEW
   ═══════════════════════════════════════════ */
function ArticlesView() {
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [articleList, setArticleList] = useState(articles);

  const filtered = articleList.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase()) ||
    a.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: number) => {
    if (confirm('Yakin ingin menghapus artikel ini?')) {
      setArticleList((prev) => prev.filter((a) => a.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-[#1A1A1A]">Kelola Artikel</h2>
        <button onClick={() => setShowAdd(true)} className="btn-primary flex items-center gap-2 text-sm">
          <Plus size={16} /> Tulis Artikel
        </button>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm flex flex-wrap gap-3">
        <div className="flex items-center gap-2 bg-[#F5F5F5] rounded-md px-3 py-2 flex-1 min-w-[200px]">
          <Search size={16} className="text-[#6B6B6B]" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cari judul artikel..." className="bg-transparent outline-none text-sm flex-1" />
        </div>
        <select className="border border-[#E0E0E0] rounded-md px-3 py-2 text-sm outline-none">
          <option>Semua Kategori</option>
          <option>Peralatan Lab</option>
          <option>Kalibrasi</option>
          <option>Safety</option>
        </select>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-video bg-[#F5E6C3] flex items-center justify-center">
              <div className="w-12 h-12 bg-[#D4A843]/20 rounded-full flex items-center justify-center">
                <FileText size={20} className="text-[#8B6914]" />
              </div>
            </div>
            <div className="p-4">
              <span className="px-2 py-0.5 bg-[#F5E6C3] text-[#8B6914] text-xs rounded-full">{article.category}</span>
              <h3 className="font-semibold text-[#1A1A1A] text-sm mt-2 line-clamp-2">{article.title}</h3>
              <div className="flex items-center gap-2 mt-2 text-xs text-[#6B6B6B]">
                <span>{article.date}</span><span>|</span><span>{article.readTime} baca</span>
              </div>
              <p className="text-xs text-[#6B6B6B] mt-2 line-clamp-2">{article.excerpt}</p>
              <div className="flex gap-2 mt-4">
                <button className="flex-1 flex items-center justify-center gap-1 text-xs text-blue-600 border border-blue-200 rounded-md py-2 hover:bg-blue-50"><Edit size={12} /> Edit</button>
                <button onClick={() => handleDelete(article.id)} className="flex items-center justify-center gap-1 text-xs text-red-500 border border-red-200 rounded-md px-3 py-2 hover:bg-red-50"><Trash2 size={12} /> Hapus</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Article Modal */}
      {showAdd && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-[700px] max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-[#E0E0E0]">
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Tulis Artikel Baru</h3>
              <button onClick={() => setShowAdd(false)} className="p-1 hover:bg-[#F5F5F5] rounded"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div><label className="block text-sm font-medium mb-1.5">Judul Artikel *</label><input type="text" placeholder="Masukkan judul artikel" className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D4A843]" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1.5">Kategori *</label><select className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none"><option>Pilih kategori</option><option>Peralatan Lab</option><option>Kalibrasi</option><option>Safety</option><option>Tips</option></select></div>
                <div><label className="block text-sm font-medium mb-1.5">Penulis</label><input type="text" placeholder="Nama penulis" className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D4A843]" /></div>
              </div>
              <div><label className="block text-sm font-medium mb-1.5">Konten *</label><textarea rows={10} placeholder="Tulis konten artikel di sini..." className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D4A843] resize-none" /></div>
              <div><label className="block text-sm font-medium mb-1.5">Tags (pisahkan dengan koma)</label><input type="text" placeholder="analytical balance, kalibrasi, tips" className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D4A843]" /></div>
              <div><label className="block text-sm font-medium mb-1.5">Gambar Thumbnail</label><div className="border-2 border-dashed border-[#E0E0E0] rounded-lg p-6 text-center hover:border-[#D4A843] cursor-pointer"><Plus size={24} className="mx-auto text-[#6B6B6B] mb-2" /><p className="text-sm text-[#6B6B6B]">Klik untuk upload thumbnail</p></div></div>
            </div>
            <div className="flex justify-end gap-3 p-6 border-t border-[#E0E0E0]">
              <button onClick={() => setShowAdd(false)} className="px-6 py-2.5 border border-[#E0E0E0] rounded-md text-sm hover:bg-[#F5F5F5]">Batal</button>
              <button onClick={() => setShowAdd(false)} className="btn-primary text-sm flex items-center gap-1"><Save size={16} /> Simpan Draft</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   SETTINGS VIEW
   ═══════════════════════════════════════════ */
function SettingsView() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-[800px]">
      <h2 className="text-xl font-semibold text-[#1A1A1A]">Pengaturan</h2>

      {/* Company Info */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2"><Star size={18} className="text-[#D4A843]" /> Informasi Perusahaan</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="block text-sm text-[#6B6B6B] mb-1">Nama Perusahaan</label><input type="text" defaultValue="PT Siagaro Sumber Solusi" className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D4A843]" /></div>
            <div><label className="block text-sm text-[#6B6B6B] mb-1">Email</label><input type="email" defaultValue="info@siagaro.co.id" className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D4A843]" /></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="block text-sm text-[#6B6B6B] mb-1">Telepon</label><input type="text" defaultValue="+62 21 5555 1234" className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D4A843]" /></div>
            <div><label className="block text-sm text-[#6B6B6B] mb-1">Website</label><input type="text" defaultValue="https://siagaro.co.id" className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D4A843]" /></div>
          </div>
          <div><label className="block text-sm text-[#6B6B6B] mb-1">Alamat</label><textarea rows={2} defaultValue="Jl. Raya Laboratorium No. 123, Jakarta Selatan, 12345" className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D4A843] resize-none" /></div>
        </div>
      </div>

      {/* Admin Password */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2"><Lock size={18} className="text-[#D4A843]" /> Keamanan</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="block text-sm text-[#6B6B6B] mb-1">Password Lama</label><input type="password" placeholder="••••••" className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D4A843]" /></div>
            <div><label className="block text-sm text-[#6B6B6B] mb-1">Password Baru</label><input type="password" placeholder="••••••" className="w-full border border-[#E0E0E0] rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D4A843]" /></div>
          </div>
          <p className="text-xs text-[#6B6B6B]">Password saat ini: <span className="font-mono text-[#D4A843]">siagaro2026</span></p>
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2"><Settings size={18} className="text-[#D4A843]" /> Tampilan</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-[#F0F0F0]">
            <div><p className="text-sm text-[#1A1A1A]">Notifikasi Email</p><p className="text-xs text-[#6B6B6B]">Kirim notifikasi saat ada pesanan baru</p></div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#D4A843]" />
            </label>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-[#F0F0F0]">
            <div><p className="text-sm text-[#1A1A1A]">Mode Maintenance</p><p className="text-xs text-[#6B6B6B]">Tampilkan halaman maintenance pada website</p></div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#D4A843]" />
            </label>
          </div>
        </div>
      </div>

      {/* Save */}
      <div className="flex items-center gap-4">
        <button onClick={handleSave} className="btn-primary flex items-center gap-2">
          <Save size={16} /> Simpan Pengaturan
        </button>
        {saved && <span className="text-green-600 text-sm flex items-center gap-1"><CheckCircle size={16} /> Pengaturan disimpan!</span>}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN ADMIN DASHBOARD
   ═══════════════════════════════════════════ */
export default function AdminDashboard() {
  const { isAuthenticated, logout } = useAdminAuth();
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      {/* Mobile overlay */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 w-[260px] bg-[#1A1A1A] z-50 transition-transform duration-300 ${
        mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-5 flex items-center justify-between">
          <Link to="/" className="text-[#D4A843] font-bold text-xl">SIAGARO</Link>
          <button onClick={() => setMobileSidebarOpen(false)} className="lg:hidden text-white/70"><X size={20} /></button>
        </div>

        <nav className="mt-4">
          {sidebarItems.map((item) => (
            <button
              key={item.key}
              onClick={() => { setActiveMenu(item.key); setMobileSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-6 py-3 text-sm transition-colors ${
                activeMenu === item.key ? 'bg-[#D4A843] text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
          <div className="px-4 py-2 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#D4A843] rounded-full flex items-center justify-center text-white text-sm font-bold">A</div>
              <div className="text-left">
                <p className="text-xs text-white font-medium">Admin</p>
                <p className="text-xs text-white/50">admin@siagaro.co.id</p>
              </div>
            </div>
          </div>
          <button onClick={logout} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:text-red-300 transition-colors">
            <LogOut size={16} /> Keluar
          </button>
          <Link to="/" className="flex items-center gap-2 px-4 py-2 text-white/50 text-xs hover:text-white transition-colors">
            <ChevronLeft size={14} /> Kembali ke Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <div className="bg-white border-b border-[#E0E0E0] px-6 py-4 flex items-center justify-between">
          <button onClick={() => setMobileSidebarOpen(true)} className="lg:hidden p-2 text-[#1A1A1A]"><BarChart3 size={20} /></button>
          <h1 className="text-lg font-semibold text-[#1A1A1A] capitalize hidden sm:block">
            {sidebarItems.find((i) => i.key === activeMenu)?.label}
          </h1>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-green-100 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-green-700 font-medium">Online</span>
            </div>
            <div className="w-8 h-8 bg-[#D4A843] rounded-full flex items-center justify-center text-white text-sm font-bold">A</div>
            <span className="text-sm text-[#1A1A1A] font-medium hidden sm:block">Admin</span>
          </div>
        </div>

        <div className="p-6">
          {activeMenu === 'dashboard' && <DashboardView />}
          {activeMenu === 'products' && <ProductsView />}
          {activeMenu === 'orders' && <OrdersView />}
          {activeMenu === 'users' && <UsersView />}
          {activeMenu === 'articles' && <ArticlesView />}
          {activeMenu === 'settings' && <SettingsView />}
        </div>
      </main>
    </div>
  );
}
