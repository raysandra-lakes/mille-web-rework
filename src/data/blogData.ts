export const categories = [
  "Business Insight",
  "Tips & Trick",
  "Inspiration",
  "Tech & Future Trend",
] as const

export type BlogCategory = (typeof categories)[number]
export type ContentBlock =
  | { type: "p" | "h2" | "quote" | "callout"; text: string }
  | { type: "ul"; items: string[] }

export type BlogPost = {
  slug: string
  category: BlogCategory
  img: string
  alt: string
  title: string
  excerpt: string
  date: string
  dateValue: string
  readTime: string
  author: "Tim Mille"
  content: ContentBlock[]
}

export const categoryColors: Record<BlogCategory, string> = {
  "Business Insight": "var(--brand)",
  "Tips & Trick": "#7C3AED",
  Inspiration: "#0EA86B",
  "Tech & Future Trend": "#0072CC",
}

const images = [
  {
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=640&h=400&fit=crop&auto=format",
    alt: "Suasana restoran dengan pelanggan",
  },
  {
    img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=640&h=400&fit=crop&auto=format",
    alt: "Dashboard analitik bisnis di layar monitor",
  },
  {
    img: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=640&h=400&fit=crop&auto=format",
    alt: "Display produk di toko bakery",
  },
]

function practicalContent(
  intro: string,
  sections: [string, string][],
  callout: string,
  conclusion: string,
): ContentBlock[] {
  return [
    { type: "p", text: intro },
    ...sections.flatMap(([title, text]) => [
      { type: "h2" as const, text: title },
      { type: "p" as const, text },
    ]),
    { type: "callout", text: callout },
    { type: "h2", text: "Kesimpulan" },
    { type: "p", text: conclusion },
  ]
}

const postsUnsorted: BlogPost[] = [
  {
    slug: "harga-naik-pelanggan-pergi",
    category: "Business Insight",
    ...images[0],
    title:
      "Harga Naik, Pelanggan Pergi? Ini Cara Bisnis F&B Menjaga Margin Tanpa Kehilangan Customer.",
    excerpt:
      "Menjaga margin tidak selalu berarti menaikkan harga menu. Ada langkah yang bisa dilakukan lebih dulu tanpa membuat pelanggan pergi.",
    date: "28 Agustus 2025",
    dateValue: "2025-08-28",
    readTime: "6 menit",
    author: "Tim Mille",
    content: [
      {
        type: "p",
        text: "Kenaikan harga bahan baku membuat banyak pelaku F&B berada di posisi sulit: menaikkan harga berisiko membuat pelanggan pergi, sementara menahan harga menggerus margin. Kabar baiknya, menjaga margin tidak selalu berarti menaikkan harga menu.",
      },
      { type: "h2", text: "Mulai dari Memahami Margin Setiap Menu" },
      {
        type: "p",
        text: "Margin tidak sama di setiap menu. Tanpa data HPP per menu, keputusan harga hanya berdasarkan perkiraan. Hitung biaya bahan setiap menu, lalu urutkan dari margin tertinggi hingga terendah untuk melihat menu mana yang menopang keuntungan dan mana yang justru menggerusnya.",
      },
      { type: "h2", text: "Atur Ulang Menu, Bukan Hanya Harga" },
      {
        type: "ul",
        items: [
          "Dorong menu bermargin tinggi lewat posisi di daftar menu dan rekomendasi kasir",
          "Tinjau ulang menu bermargin tipis yang jarang dipesan",
          "Siapkan paket atau bundling agar nilai transaksi naik tanpa mengubah harga satuan",
        ],
      },
      { type: "h2", text: "Naikkan Harga dengan Cara yang Terasa Wajar" },
      {
        type: "p",
        text: "Jika kenaikan harga memang tidak terhindarkan, lakukan secara bertahap dan fokus pada menu yang kurang sensitif terhadap harga. Komunikasikan nilai yang diterima pelanggan, seperti kualitas bahan atau porsi, bukan sekadar angka baru di daftar menu.",
      },
      {
        type: "callout",
        text: "Tips: Pantau penjualan per menu selama dua sampai empat minggu setelah penyesuaian harga untuk melihat dampak sebenarnya.",
      },
      { type: "h2", text: "Kendalikan Biaya di Sisi Operasional" },
      {
        type: "p",
        text: "Stok yang tidak tercatat akurat sering menjadi sumber kebocoran biaya yang tidak terlihat. Pencatatan stok yang terhubung dengan penjualan membantu menekan pemborosan bahan dan menjaga HPP tetap terkendali.",
      },
      {
        type: "quote",
        text: "Margin yang sehat dibangun dari data, bukan perkiraan.",
      },
      { type: "h2", text: "Kesimpulan" },
      {
        type: "p",
        text: "Menjaga margin adalah kombinasi dari memahami HPP, mengatur menu, menyesuaikan harga dengan hati-hati, dan mengendalikan biaya operasional. Dengan data penjualan dan stok yang akurat, setiap keputusan dapat diambil dengan lebih percaya diri.",
      },
    ],
  },
  {
    slug: "5-tanda-bisnis-anda-sudah-siap-ekspansi-ke-multi-outlet-dan-apa-yang-harus-disiapkan",
    category: "Tips & Trick",
    ...images[1],
    title:
      "5 Tanda Bisnis Anda Sudah Siap Ekspansi ke Multi-Outlet — dan Apa yang Harus Disiapkan.",
    excerpt:
      "Ekspansi yang sehat dimulai dari proses yang stabil, data yang rapi, dan standar operasional yang dapat diterapkan ulang.",
    date: "20 Agustus 2025",
    dateValue: "2025-08-20",
    readTime: "8 menit",
    author: "Tim Mille",
    content: practicalContent(
      "Membuka outlet baru bukan hanya soal menemukan lokasi. Bisnis perlu memastikan operasional utama sudah stabil agar pertumbuhan tidak menambah masalah yang sama di tempat berbeda.",
      [
        ["Periksa Kesiapan Operasional", "Pastikan alur penjualan, stok, dan pembagian tugas sudah berjalan konsisten tanpa bergantung pada satu orang."],
        ["Dokumentasikan Standar Kerja", "Susun prosedur yang mudah dipahami agar kualitas layanan dan produk dapat diterapkan oleh tim baru."],
        ["Siapkan Cara Memantau Cabang", "Tentukan data harian yang perlu dipantau agar kendala di setiap outlet dapat diketahui dan ditangani lebih cepat."],
      ],
      "Tips: Uji standar operasional pada tim yang berbeda sebelum menerapkannya di outlet baru.",
      "Ekspansi menjadi lebih terkendali ketika proses, tim, dan data telah siap untuk bekerja dalam skala yang lebih besar.",
    ),
  },
  {
    slug: "kenapa-data-stok-yang-tidak-akurat-bisa-jadi-ancaman-terbesar-bisnis-fnb-anda",
    category: "Business Insight",
    ...images[2],
    title:
      "Kenapa Data Stok yang Tidak Akurat Bisa Jadi Ancaman Terbesar Bisnis F&B Anda.",
    excerpt:
      "Selisih stok dapat memengaruhi pembelian, ketersediaan menu, hingga ketepatan perhitungan biaya operasional.",
    date: "14 Agustus 2025",
    dateValue: "2025-08-14",
    readTime: "5 menit",
    author: "Tim Mille",
    content: practicalContent(
      "Stok yang terlihat sederhana sebenarnya terhubung langsung dengan penjualan, pembelian, dan kualitas layanan. Ketidakakuratan kecil yang berulang dapat menyulitkan banyak keputusan.",
      [
        ["Kenali Sumber Selisih", "Telusuri penerimaan barang, pemakaian bahan, dan pencatatan sisa untuk menemukan titik yang sering menimbulkan perbedaan."],
        ["Samakan Satuan dan Resep", "Gunakan satuan yang konsisten dan resep yang jelas agar pemakaian bahan dapat dibandingkan dengan transaksi."],
        ["Lakukan Pemeriksaan Berkala", "Jadwalkan stok opname dengan proses yang sama agar perubahan dapat ditelusuri dari waktu ke waktu."],
      ],
      "Tips: Fokus lebih dahulu pada bahan yang paling sering digunakan atau paling mudah mengalami selisih.",
      "Data stok yang rapi membantu bisnis menjaga ketersediaan produk dan membaca biaya operasional dengan lebih akurat.",
    ),
  },
  {
    slug: "menu-akhir-tahun-yang-laris-cara-menyusun-promo-musiman-untuk-bisnis-fnb",
    category: "Inspiration",
    ...images[0],
    title:
      "Menu Akhir Tahun yang Laris: Cara Menyusun Promo Musiman untuk Bisnis F&B.",
    excerpt:
      "Promo musiman yang relevan perlu mempertimbangkan karakter pelanggan, kesiapan dapur, dan kemudahan penyajian.",
    date: "8 Agustus 2025",
    dateValue: "2025-08-08",
    readTime: "5 menit",
    author: "Tim Mille",
    content: practicalContent(
      "Menu musiman dapat memberi alasan baru bagi pelanggan untuk kembali, tetapi konsepnya perlu tetap sesuai dengan karakter bisnis dan kemampuan operasional.",
      [
        ["Mulai dari Produk yang Sudah Dikenal", "Gunakan produk yang telah dikuasai tim sebagai dasar agar pengembangan menu tidak mengganggu alur kerja."],
        ["Susun Penawaran yang Mudah Dipahami", "Buat nama, manfaat, dan periode promo jelas agar pelanggan dapat mengambil keputusan dengan cepat."],
        ["Pastikan Operasional Siap", "Periksa bahan, waktu penyajian, dan kebutuhan tim sebelum promo dipublikasikan."],
      ],
      "Tips: Siapkan materi komunikasi yang konsisten di kasir dan kanal digital.",
      "Promo musiman bekerja lebih baik ketika kreativitas menu berjalan seimbang dengan kesiapan operasional.",
    ),
  },
  {
    slug: "mengenal-laporan-penjualan-harian-angka-apa-saja-yang-perlu-dipantau-setiap-hari",
    category: "Tips & Trick",
    ...images[1],
    title:
      "Mengenal Laporan Penjualan Harian: Angka Apa Saja yang Perlu Dipantau Setiap Hari.",
    excerpt:
      "Laporan harian membantu pemilik usaha memahami aktivitas outlet dan menemukan hal yang perlu segera ditindaklanjuti.",
    date: "2 Agustus 2025",
    dateValue: "2025-08-02",
    readTime: "6 menit",
    author: "Tim Mille",
    content: practicalContent(
      "Laporan harian bukan sekadar rekap omzet. Data yang dibaca dengan konteks dapat membantu tim memahami perubahan operasional sejak dini.",
      [
        ["Mulai dari Penjualan Bersih", "Perhatikan nilai transaksi setelah diskon dan pembatalan agar gambaran penjualan lebih sesuai dengan aktivitas sebenarnya."],
        ["Baca Pola Produk dan Waktu", "Bandingkan produk yang terjual dan waktu transaksi untuk memahami pola permintaan."],
        ["Tinjau Pembayaran dan Kasir", "Pastikan metode pembayaran dan catatan kasir dapat dicocokkan pada akhir operasional."],
      ],
      "Tips: Gunakan urutan pemeriksaan yang sama setiap hari agar perubahan lebih mudah terlihat.",
      "Laporan harian yang dibaca secara konsisten membantu bisnis mengambil tindakan sebelum masalah berkembang.",
    ),
  },
  {
    slug: "bagaimana-ai-mengubah-cara-pemilik-usaha-membaca-data-bisnis",
    category: "Tech & Future Trend",
    ...images[2],
    title:
      "Bagaimana AI Mengubah Cara Pemilik Usaha Membaca Data Bisnis.",
    excerpt:
      "AI membantu menyederhanakan data operasional menjadi pola dan pertanyaan yang lebih mudah ditindaklanjuti.",
    date: "25 Juli 2025",
    dateValue: "2025-07-25",
    readTime: "7 menit",
    author: "Tim Mille",
    content: practicalContent(
      "Data bisnis terus bertambah seiring transaksi dan aktivitas operasional. AI dapat membantu menyaring informasi agar pemilik usaha lebih cepat memahami perubahan penting.",
      [
        ["Mengelompokkan Informasi", "AI membantu menyusun data berdasarkan konteks sehingga informasi yang relevan lebih mudah ditemukan."],
        ["Menemukan Pola Operasional", "Pola penjualan, stok, dan aktivitas outlet dapat dibaca sebagai bahan untuk menentukan pertanyaan berikutnya."],
        ["Mendukung Keputusan Manusia", "Rekomendasi tetap perlu dinilai bersama konteks bisnis, pengalaman tim, dan kondisi lapangan."],
      ],
      "Tips: Mulai dengan pertanyaan operasional yang spesifik agar hasil analisis lebih mudah digunakan.",
      "AI dapat mempercepat proses membaca data, sementara keputusan akhir tetap membutuhkan pemahaman bisnis yang kuat.",
    ),
  },
  {
    slug: "cara-menyusun-shift-karyawan-agar-operasional-outlet-tetap-lancar-di-jam-ramai",
    category: "Tips & Trick",
    ...images[0],
    title:
      "Cara Menyusun Shift Karyawan agar Operasional Outlet Tetap Lancar di Jam Ramai.",
    excerpt:
      "Jadwal kerja yang baik menempatkan jumlah dan peran staf sesuai kebutuhan operasional setiap periode.",
    date: "18 Juli 2025",
    dateValue: "2025-07-18",
    readTime: "5 menit",
    author: "Tim Mille",
    content: practicalContent(
      "Penyusunan shift perlu mempertimbangkan beban kerja, keterampilan, dan pola kunjungan pelanggan agar layanan tetap stabil.",
      [
        ["Petakan Jam Operasional", "Catat periode yang membutuhkan perhatian lebih berdasarkan aktivitas transaksi dan proses layanan."],
        ["Seimbangkan Peran Tim", "Pastikan setiap shift memiliki kombinasi peran yang mampu menangani kebutuhan kasir dan operasional."],
        ["Evaluasi Setelah Shift", "Gunakan catatan kendala dan umpan balik tim untuk memperbaiki jadwal berikutnya."],
      ],
      "Tips: Berikan jadwal lebih awal agar tim memiliki waktu menyampaikan kebutuhan penyesuaian.",
      "Shift yang terencana membantu tim bekerja lebih seimbang dan menjaga pengalaman pelanggan.",
    ),
  },
  {
    slug: "belajar-dari-kedai-kopi-yang-berhasil-membuka-cabang-kedua",
    category: "Inspiration",
    ...images[1],
    title: "Belajar dari Kedai Kopi yang Berhasil Membuka Cabang Kedua.",
    excerpt:
      "Cabang kedua membutuhkan standar yang dapat dijalankan ulang tanpa kehilangan karakter layanan dan kualitas produk.",
    date: "10 Juli 2025",
    dateValue: "2025-07-10",
    readTime: "6 menit",
    author: "Tim Mille",
    content: practicalContent(
      "Membuka cabang kedua menjadi tahap penting karena pemilik usaha mulai mengelola lebih dari satu tim dan lokasi.",
      [
        ["Jaga Standar Produk", "Dokumentasikan resep, bahan, dan langkah kerja agar hasil tetap konsisten di setiap lokasi."],
        ["Bangun Tim yang Mandiri", "Tetapkan tanggung jawab dan alur komunikasi agar cabang dapat menyelesaikan aktivitas harian dengan jelas."],
        ["Bandingkan dengan Konteks", "Baca performa setiap cabang berdasarkan lokasi, pola pelanggan, dan kondisi operasionalnya."],
      ],
      "Tips: Perbaiki proses di outlet pertama sebelum menjadikannya standar untuk cabang berikutnya.",
      "Cabang kedua berkembang lebih sehat ketika kualitas, tim, dan pemantauan dibangun sebagai satu sistem.",
    ),
  },
  {
    slug: "tren-pembayaran-digital-di-bisnis-fnb-dan-dampaknya-bagi-kasir",
    category: "Tech & Future Trend",
    ...images[2],
    title:
      "Tren Pembayaran Digital di Bisnis F&B dan Dampaknya bagi Kasir.",
    excerpt:
      "Pembayaran digital mengubah alur transaksi dan menuntut pencatatan yang tetap sederhana bagi kasir.",
    date: "3 Juli 2025",
    dateValue: "2025-07-03",
    readTime: "5 menit",
    author: "Tim Mille",
    content: practicalContent(
      "Pilihan pembayaran yang bertambah memberi kemudahan bagi pelanggan, sekaligus menambah hal yang perlu dipastikan oleh tim kasir.",
      [
        ["Susun Alur yang Konsisten", "Tetapkan langkah konfirmasi yang jelas agar setiap metode pembayaran dicatat dengan cara yang sama."],
        ["Pastikan Status Transaksi", "Kasir perlu memastikan pembayaran berhasil sebelum pesanan dinyatakan selesai."],
        ["Rekonsiliasi dengan Rutin", "Cocokkan transaksi dan metode pembayaran agar perbedaan dapat ditemukan lebih awal."],
      ],
      "Tips: Gunakan panduan singkat di area kasir untuk menangani status pembayaran yang belum jelas.",
      "Pembayaran digital tetap membutuhkan alur kasir yang sederhana, terlatih, dan mudah direkonsiliasi.",
    ),
  },
]

export const posts = postsUnsorted.sort((a, b) => b.dateValue.localeCompare(a.dateValue))

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug)
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  const others = posts.filter((candidate) => candidate.slug !== post.slug)
  return [
    ...others.filter((candidate) => candidate.category === post.category),
    ...others.filter((candidate) => candidate.category !== post.category),
  ].slice(0, limit)
}
