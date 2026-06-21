export interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  thumbnail: string;
  tags: string[];
  content?: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Panduan Memilih Analytical Balance yang Tepat untuk Laboratorium",
    excerpt: "Memahami spesifikasi dan fitur analytical balance untuk memastikan hasil penimbangan yang akurat dan presisi sesuai kebutuhan laboratorium Anda.",
    date: "15 Januari 2026",
    readTime: "8 menit",
    author: "Tim Teknis Siagaro",
    category: "Peralatan Lab",
    thumbnail: "/assets/article-1.png",
    tags: ["analytical balance", "penimbangan", "mettler toledo", "tips"],
    content: `<h2>Mengapa Analytical Balance Penting?</h2>
<p>Analytical balance merupakan perangkat esensial di setiap laboratorium yang membutuhkan penimbangan dengan presisi tinggi. Pemilihan analytical balance yang tepat dapat mempengaruhi akurasi data dan validitas hasil penelitian.</p>

<h2>Faktor Utama dalam Memilih Analytical Balance</h2>
<h3>1. Kapasitas Penimbangan</h3>
<p>Pertimbangkan berat maksimal sampel yang akan Anda timbang. Untuk kebanyakan aplikasi laboratorium, kapasitas 200-300g sudah cukup. Namun, jika Anda bekerja dengan sampel yang lebih besar, pilihlah model dengan kapasitas yang sesuai.</p>

<h3>2. Readability (Resolusi)</h3>
<p>Resolusi menunjukkan unit terkecil yang dapat ditimbang. Untuk analisis kuantitatif, readability 0.1mg umumnya diperlukan. Beberapa aplikasi mungkin membutuhkan resolusi yang lebih tinggi hingga 0.01mg.</p>

<h3>3. Kalibrasi dan Akreditasi</h3>
<p>Pastikan analytical balance yang Anda pilih mendukung kalibrasi internal dan eksternal. Sertifikat kalibrasi yang akreditasi KAN menjamin ketertelusuran ke standar nasional.</p>

<blockquote>"Investasi pada analytical balance berkualitas adalah investasi pada integritas data laboratorium Anda."</blockquote>

<h2>Kesimpulan</h2>
<p>Memilih analytical balance yang tepat memerlukan pemahaman mendalam tentang kebutuhan aplikasi Anda. Jangan ragu untuk berkonsultasi dengan tim ahli kami untuk mendapatkan rekomendasi yang sesuai.</p>`,
  },
  {
    id: 2,
    title: "Prosedur Kalibrasi pH Meter Sesuai Standar SNI",
    excerpt: "Panduan lengkap kalibrasi pH meter menggunakan buffer solution untuk menjaga akurasi pengukuran dan memenuhi standar kualitas.",
    date: "10 Januari 2026",
    readTime: "6 menit",
    author: "Tim Kalibrasi Siagaro",
    category: "Kalibrasi",
    thumbnail: "/assets/article-2.png",
    tags: ["pH meter", "kalibrasi", "SNI", "buffer solution"],
    content: `<h2>Pentingnya Kalibrasi pH Meter</h2>
<p>pH meter yang tidak terkalibrasi dengan benar dapat memberikan hasil pengukuran yang tidak akurat, yang dapat berdampak signifikan pada validitas data penelitian dan kualitas produk.</p>

<h2>Bahan dan Alat yang Diperlukan</h2>
<ul>
<li>pH meter yang akan dikalibrasi</li>
<li>Buffer solution pH 4.01, 7.00, dan 10.01</li>
<li>Akuades atau air deionized</li>
<li>Beaker bersih</li>
<li>Tissue penyerap</li>
</ul>

<h2>Langkah-Langkah Kalibrasi</h2>
<h3>1. Persiapan</h3>
<p>Pastikan pH meter dalam kondisi bersih dan elektroda tidak mengering. Jika elektroda kering, rendam dalam larutan penyimpanan minimal 2 jam sebelum kalibrasi.</p>

<h3>2. Kalibrasi 2-Point</h3>
<p>Untuk pengukuran umum, kalibrasi 2-point menggunakan buffer pH 7.00 dan pH 4.01 (atau 10.01) sudah cukup. Untuk aplikasi yang lebih kritis, gunakan kalibrasi 3-point.</p>

<blockquote>"Kalibrasi rutin setiap hari penggunaan sangat direkomendasikan untuk menjaga akurasi pengukuran."</blockquote>

<h2>Kesimpulan</h2>
<p>Kalibrasi pH meter yang teratur dan benar adalah kunci untuk mendapatkan data yang akurat dan dapat diandalkan.</p>`,
  },
  {
    id: 3,
    title: "Perbedaan Autoclave Horizontal dan Vertical",
    excerpt: "Memahami kelebihan dan kekurangan masing-masing jenis autoclave untuk menentukan pilihan yang tepat sesuai kebutuhan sterilisasi laboratorium.",
    date: "5 Januari 2026",
    readTime: "5 menit",
    author: "Tim Teknis Siagaro",
    category: "Peralatan Lab",
    thumbnail: "/assets/article-3.png",
    tags: ["autoclave", "sterilisasi", "peralatan lab", "perbandingan"],
    content: `<h2>Mengapa Memilih Autoclave yang Tepat Penting?</h2>
<p>Autoclave adalah perangkat vital untuk sterilisasi di laboratorium. Pemilihan jenis yang tepat akan mempengaruhi efisiensi kerja dan kualitas sterilisasi.</p>

<h2>Autoclave Horizontal</h2>
<p>Autoclave horizontal memiliki pintu pembuka di samping dengan ruang sterilisasi berbentuk silinder horizontal. Desain ini memudahkan pemuatan dan pembongkaran material dalam jumlah besar.</p>

<h2>Autoclave Vertical</h2>
<p>Autoclave vertical memiliki desain yang lebih kompak dengan ruang sterilisasi yang dibuka dari atas. Ideal untuk laboratorium dengan ruang terbatas dan kebutuhan sterilisasi skala kecil-menengah.</p>

<blockquote>"Pilihlah autoclave berdasarkan volume sampel, frekuensi penggunaan, dan ketersediaan ruang di laboratorium Anda."</blockquote>

<h2>Kesimpulan</h2>
<p>Kedua jenis autoclave memiliki kelebihan masing-masing. Pertimbangkan kebutuhan spesifik laboratorium Anda sebelum membuat keputusan.</p>`,
  },
];

export const articleCategories = [
  { name: "Peralatan Lab", count: 12 },
  { name: "Kalibrasi", count: 8 },
  { name: "Safety", count: 6 },
  { name: "Reagen", count: 4 },
  { name: "Tips", count: 10 },
];

export const popularArticles = articles.slice(0, 3);
