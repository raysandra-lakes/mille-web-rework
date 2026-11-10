export const produkGroups = [
  {
    num: "01",
    title: "Operasional, Pemesanan, & Pembayaran",
    href: "/produk/operasional-pemesanan-pembayaran",
    desc: "Kelola setiap pesanan dan operasional dari berbagai kanal dalam satu sistem.",
    items: [
      { label: "Point of Sale (POS)", href: "/produk/point-of-sale" },
      { label: "QR Order", href: "/produk/qr-order" },
      { label: "Self Order Kiosk", href: "/produk/self-order-kiosk" },
      { label: "Order Queue", href: "/produk/order-queue" },
      { label: "Reservasi", href: "/produk/reservasi" },
      { label: "Waiting List", href: "/produk/waiting-list" },
      { label: "Kitchen Display System (KDS)", href: "/produk/kitchen-display-system" },
      { label: "Tata Ruang & Meja", href: "/produk/tata-ruang-meja" },
      { label: "Integrasi Online Order", href: "/produk/integrasi-online-order" },
    ],
  },
  {
    num: "02",
    title: "Inventaris & Rantai Pasokan",
    href: "/produk/inventaris-rantai-pasokan",
    desc: "Kontrol alur barang dari pengadaan hingga penggunaan dalam operasional.",
    items: ["Pengelolaan Inventaris", "Supplier & Pembelian", "Gudang & Produksi", "Transfer Stok", "Stock Opname", "Perhitungan HPP"].map((label) => ({ label, href: "#" })),
  },
  {
    num: "03",
    title: "Pengelolaan Bisnis & Keuangan",
    href: "/produk/pengelolaan-bisnis-keuangan",
    desc: "Mengendalikan berbagai aspek bisnis dari satu pusat backoffice yang terintegrasi.",
    items: ["Centralized Backoffice", "Pengelolaan Toko Cabang", "Pengaturan Menu & Harga", "Monitoring Performa Outlet", "Laporan & Insight Bisnis", "Sistem Akuntansi", "Budgeting", "HPP & Profit", "Laporan Keuangan", "Arus Kas"].map((label) => ({ label, href: "#" })),
  },
  {
    num: "04",
    title: "Pengelolaan Karyawan",
    href: "/produk/pengelolaan-karyawan",
    desc: "Kelola tim dan operasional karyawan dengan lebih terstruktur.",
    items: ["Data Karyawan", "Absensi", "Shift", "Performa", "Komisi", "Payroll"].map((label) => ({ label, href: "#" })),
  },
  {
    num: "05",
    title: "Pelanggan",
    href: "/produk/pelanggan",
    desc: "Kenali pelanggan dan bangun hubungan yang lebih bernilai.",
    items: ["Database Pelanggan", "Segmentasi", "Program Loyalitas", "Referral", "Kampanye Marketing", "Ulasan & Penilaian", "Gift Card", "Personalisasi & Otomasi"].map((label) => ({ label, href: "#" })),
  },
];

export const solusiItems = [
  { title: "Restoran", desc: "Kelola pesanan, meja, dapur, inventaris, hingga keuangan.", icon: "🍽" },
  { title: "Kedai Kopi", desc: "Kelola transaksi, menu, stok bahan, pelanggan, hingga laporan bisnis.", icon: "☕" },
  { title: "Cepat Saji", desc: "Percepat proses pemesanan dan operasional outlet.", icon: "🥡" },
  { title: "Bakery", desc: "Kelola penjualan, produksi, inventaris, hingga distribusi.", icon: "🥐" },
  { title: "Toko Ritel", desc: "Kendalikan transaksi, stok, outlet, dan performa penjualan.", icon: "🛍" },
  { title: "Salon & Spa", desc: "Kelola reservasi, pelanggan, karyawan, layanan, dan transaksi.", icon: "💆" },
];

export const optimiItems = [
  { title: "AI Report Summary", desc: "Ringkasan laporan bisnis otomatis setiap hari" },
  { title: "AI Chat", desc: "Tanya apa saja tentang bisnis Anda, langsung ke data" },
  { title: "Business Insight", desc: "Temukan pola dan peluang tersembunyi di balik data" },
  { title: "Analisis Data", desc: "Visualisasi performa penjualan, stok, dan keuangan" },
  { title: "Rekomendasi Bisnis", desc: "Saran berbasis data untuk keputusan yang lebih tepat" },
];

export const berlanggananItems = [
  { title: "Mille Basic", desc: "Untuk bisnis yang baru mulai berkembang", href: "/berlangganan#basic" },
  { title: "Add-On", desc: "Tambah fitur sesuai kebutuhan spesifik bisnis Anda", href: "/berlangganan#add-on" },
  { title: "Mille Pro", desc: "Solusi lengkap untuk bisnis multi-outlet yang berkembang", href: "/berlangganan#pro" },
  { title: "Hardware Pendukung", desc: "Perangkat operasional yang kompatibel dengan Mille", href: "/berlangganan#hardware" },
];

export const lainnyaItems = [
  { title: "Blog", href: "/blog" },
  { title: "Support", href: "/support" },
  { title: "FAQ", href: "/faq" },
  { title: "Tentang Perusahaan", href: "/tentang-perusahaan" },
  { title: "Karir", href: "/karir" },
  { title: "Unduh App", href: "/unduh" },
];
