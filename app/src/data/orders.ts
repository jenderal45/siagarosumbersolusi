export interface Order {
  id: string;
  customer: string;
  email: string;
  phone: string;
  items: { product: string; qty: number; price: number }[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'unpaid' | 'paid' | 'refunded';
  date: string;
  address: string;
}

export const orders: Order[] = [
  {
    id: 'ORD-2026-0001',
    customer: 'PT Maju Jaya Laboratories',
    email: 'procurement@maju-jaya.co.id',
    phone: '021-5551001',
    items: [
      { product: 'Analytical Balance MS-TS303L/00', qty: 2, price: 45000000 },
      { product: 'pH Meter Starter ST2200', qty: 1, price: 12800000 },
    ],
    total: 102800000,
    status: 'delivered',
    paymentStatus: 'paid',
    date: '2026-06-20',
    address: 'Jl. Sudirman No. 45, Jakarta Pusat',
  },
  {
    id: 'ORD-2026-0002',
    customer: 'Universitas Indonesia - Lab Kimia',
    email: 'labkimia@ui.ac.id',
    phone: '021-7861234',
    items: [
      { product: 'Autoclave Horizontal 50L', qty: 1, price: 28500000 },
      { product: 'Hot Plate Magnetic Stirrer', qty: 3, price: 4500000 },
    ],
    total: 42000000,
    status: 'shipped',
    paymentStatus: 'paid',
    date: '2026-06-19',
    address: 'Kampus UI Depok, Gedung Lab Terpadu',
  },
  {
    id: 'ORD-2026-0003',
    customer: 'Dr. Siti Aminah',
    email: 'siti.aminah@gmail.com',
    phone: '0812-3456-7890',
    items: [
      { product: 'Anemometer Testo 417', qty: 1, price: 8500000 },
    ],
    total: 8500000,
    status: 'confirmed',
    paymentStatus: 'paid',
    date: '2026-06-19',
    address: 'Jl. Gatot Subroto No. 78, Bandung',
  },
  {
    id: 'ORD-2026-0004',
    customer: 'PT Farmasi Sehat Sentosa',
    email: 'purchasing@fss.co.id',
    phone: '021-8887776',
    items: [
      { product: 'Moisture Analyzer MA-TS203L', qty: 1, price: 38000000 },
      { product: 'Centrifuge 4000 RPM', qty: 2, price: 18500000 },
      { product: 'Vortex Mixer VM-100', qty: 2, price: 2800000 },
    ],
    total: 80600000,
    status: 'pending',
    paymentStatus: 'unpaid',
    date: '2026-06-18',
    address: 'Jl. Thamrin Kav. 10, Jakarta Selatan',
  },
  {
    id: 'ORD-2026-0005',
    customer: 'Lab Klinik Medika Utama',
    email: 'admin@medikautama.co.id',
    phone: '022-9876543',
    items: [
      { product: 'Safety Cabinet Type A2', qty: 1, price: 55000000 },
      { product: 'Fume Hood 150cm', qty: 1, price: 42000000 },
    ],
    total: 97000000,
    status: 'pending',
    paymentStatus: 'unpaid',
    date: '2026-06-18',
    address: 'Jl. Pasteur No. 22, Bandung',
  },
  {
    id: 'ORD-2026-0006',
    customer: 'SMAN 1 Jakarta - Lab Biologi',
    email: 'lab@sman1jkt.sch.id',
    phone: '021-3334445',
    items: [
      { product: 'Lab Coat Premium Size L', qty: 20, price: 185000 },
      { product: 'Safety Goggles Chemical', qty: 25, price: 125000 },
    ],
    total: 6825000,
    status: 'shipped',
    paymentStatus: 'paid',
    date: '2026-06-17',
    address: 'Jl. Prof. Dr. Satrio No. 5, Jakarta Selatan',
  },
  {
    id: 'ORD-2026-0007',
    customer: 'PT Indofood R\u0026D Center',
    email: 'rnd@indofood.co.id',
    phone: '021-5798882',
    items: [
      { product: 'Analytical Balance MS-TS303L/00', qty: 1, price: 45000000 },
    ],
    total: 45000000,
    status: 'delivered',
    paymentStatus: 'paid',
    date: '2026-06-15',
    address: 'Jl. Sudirman Kav. 76-78, Jakarta Selatan',
  },
  {
    id: 'ORD-2026-0008',
    customer: 'Balai Besar Lab Kesehatan Makassar',
    email: 'bblk.makassar@kemkes.go.id',
    phone: '0411-4445556',
    items: [
      { product: 'pH Meter Starter ST2200', qty: 3, price: 12800000 },
      { product: 'Hot Plate Magnetic Stirrer', qty: 2, price: 4500000 },
    ],
    total: 47400000,
    status: 'cancelled',
    paymentStatus: 'refunded',
    date: '2026-06-14',
    address: 'Jl. Perintis Kemerdekaan No. 30, Makassar',
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}
