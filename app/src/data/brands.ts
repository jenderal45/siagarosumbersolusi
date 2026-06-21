export interface Brand {
  id: number;
  name: string;
  logo: string;
  country: string;
  description: string;
  products?: number;
}

export const brands: Brand[] = [
  {
    id: 1,
    name: "Mettler Toledo",
    logo: "/assets/brand-logo-1.png",
    country: "Swiss",
    description: "Produsen timbangan dan instrumentasi analitis terkemuka dunia",
    products: 45,
  },
  {
    id: 2,
    name: "Sartorius",
    logo: "/assets/brand-logo-2.png",
    country: "Germany",
    description: "Solusi bioprocess dan laboratorium dengan teknologi presisi",
    products: 38,
  },
  {
    id: 3,
    name: "Hanna",
    logo: "/assets/brand-logo-3.png",
    country: "Italy",
    description: "Instrumen elektrokimia untuk pengukuran pH dan parameter lainnya",
    products: 52,
  },
  {
    id: 4,
    name: "Thermo Fisher",
    logo: "/assets/brand-logo-4.png",
    country: "USA",
    description: "Perusahaan sains terbesar dengan portofolio produk komprehensif",
    products: 120,
  },
  {
    id: 5,
    name: "IKA",
    logo: "/assets/brand-logo-5.png",
    country: "Germany",
    description: "Teknologi pengadukan, pemanasan, dan pemusnahan untuk laboratorium",
    products: 35,
  },
  {
    id: 6,
    name: "Memmert",
    logo: "/assets/brand-logo-6.png",
    country: "Germany",
    description: "Oven, inkubator, dan chamber lingkungan presisi tinggi",
    products: 28,
  },
];
