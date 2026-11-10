export const faqCategories = ["Umum", "Fitur", "Langganan", "Teknis"] as const

export type FaqCategory = (typeof faqCategories)[number]

// Data contoh — verifikasi kembali bersama tim sebelum publikasi final.
export const faqData: {
  category: FaqCategory
  question: string
  answer: string
}[] = [
  { category: "Umum", question: "Apa itu Mille?", answer: "Mille adalah platform terintegrasi untuk mengelola operasional bisnis, mulai dari penjualan, pemesanan, pembayaran, stok, hingga laporan, dalam satu sistem." },
  { category: "Umum", question: "Jenis usaha apa saja yang dapat memakai Mille?", answer: "Restoran, kedai kopi, cepat saji, bakery, toko retail, serta salon dan spa." },
  { category: "Fitur", question: "Apakah Mille mendukung pembayaran QRIS dan kartu?", answer: "Ya. Mille mendukung QRIS dinamis dan kartu melalui mesin EDC bank." },
  { category: "Fitur", question: "Apakah stok ikut terbarui saat terjadi penjualan?", answer: "Ya. Transaksi di kasir langsung memperbarui stok sesuai penjualan." },
  { category: "Langganan", question: "Apakah ada masa uji coba?", answer: "Ya. Anda dapat mencoba Mille gratis selama 30 hari." },
  { category: "Langganan", question: "Bagaimana memilih paket yang sesuai?", answer: "Pilih paket sesuai skala dan kebutuhan bisnis. Tim kami juga dapat membantu lewat sesi demo." },
  { category: "Teknis", question: "Perangkat apa yang didukung?", answer: "Aplikasi Mille tersedia untuk Android, iOS, dan Windows." },
  { category: "Teknis", question: "Ke mana saya menghubungi bantuan teknis?", answer: "Hubungi tim Support melalui halaman Support." },
]
