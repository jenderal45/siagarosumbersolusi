export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'customer' | 'distributor';
  status: 'active' | 'inactive' | 'suspended';
  joinDate: string;
  orders: number;
  totalSpent: number;
  company?: string;
}

export const users: User[] = [
  {
    id: 1,
    name: 'Budi Santoso',
    email: 'budi@maju-jaya.co.id',
    phone: '0812-1111-2222',
    role: 'customer',
    status: 'active',
    joinDate: '2024-03-15',
    orders: 12,
    totalSpent: 450000000,
    company: 'PT Maju Jaya Laboratories',
  },
  {
    id: 2,
    name: 'Dr. Rina Mulyani',
    email: 'rina.mulyani@ui.ac.id',
    phone: '0813-2222-3333',
    role: 'customer',
    status: 'active',
    joinDate: '2024-06-20',
    orders: 8,
    totalSpent: 180000000,
    company: 'Universitas Indonesia',
  },
  {
    id: 3,
    name: 'Ahmad Fauzi',
    email: 'ahmad.fauzi@gmail.com',
    phone: '0814-3333-4444',
    role: 'customer',
    status: 'active',
    joinDate: '2025-01-10',
    orders: 5,
    totalSpent: 45000000,
  },
  {
    id: 4,
    name: 'Siti Nurhaliza',
    email: 'siti@fss.co.id',
    phone: '0815-4444-5555',
    role: 'distributor',
    status: 'active',
    joinDate: '2023-08-05',
    orders: 25,
    totalSpent: 850000000,
    company: 'PT Farmasi Sehat Sentosa',
  },
  {
    id: 5,
    name: 'Dr. Hendra Wijaya',
    email: 'hendra@medikautama.co.id',
    phone: '0816-5555-6666',
    role: 'customer',
    status: 'active',
    joinDate: '2025-04-18',
    orders: 3,
    totalSpent: 120000000,
    company: 'Lab Klinik Medika Utama',
  },
  {
    id: 6,
    name: 'Dewi Kusuma',
    email: 'dewi.kusuma@yahoo.com',
    phone: '0817-6666-7777',
    role: 'customer',
    status: 'inactive',
    joinDate: '2024-11-30',
    orders: 1,
    totalSpent: 8500000,
  },
  {
    id: 7,
    name: 'PT Indofood R\u0026D',
    email: 'rnd@indofood.co.id',
    phone: '021-5798882',
    role: 'customer',
    status: 'active',
    joinDate: '2023-02-14',
    orders: 18,
    totalSpent: 620000000,
    company: 'PT Indofood Sukses Makmur',
  },
  {
    id: 8,
    name: 'Admin Siagaro',
    email: 'admin@siagaro.co.id',
    phone: '021-5555123',
    role: 'admin',
    status: 'active',
    joinDate: '2020-01-01',
    orders: 0,
    totalSpent: 0,
    company: 'PT Siagaro Sumber Solusi',
  },
];
