import ProductDetailPage, { type ProductPageConfig } from "../components/product/ProductDetailPage";

const config: ProductPageConfig = {
  name: "Pelanggan",
  headline: "Kenali Pelanggan Anda dan Bangun Hubungan Bisnis yang Lebih Bernilai.",
  intro: "Ubah pembeli sepintas menjadi pelanggan setia. Mille menyatukan basis data pelanggan, program loyalitas, segmentasi perilaku, hingga kampanye pemasaran otomatis untuk meningkatkan nilai seumur hidup pelanggan (Customer Lifetime Value).",
  problemHeadline: "Retensi Pelanggan Tanpa Data yang Terstruktur Sulit Diwujudkan.",
  problemIntro: "Tanpa pemahaman mendalam mengenai perilaku dan riwayat transaksi, upaya pemasaran sering kali salah sasaran dan kurang efektif.",
  problems: [
    { title: "Data Pelanggan Tersebar & Pasif", copy: "Riwayat transaksi pelanggan hanya tersimpan di struk kasir tanpa terdata menjadi basis data terpusat yang bermanfaat." },
    { title: "Program Loyalitas Manual & Rumit", copy: "Penggunaan kartu stempel fisik rawan hilang dan menyulitkan pelacakan poin maupun retensi pelanggan secara riil." },
    { title: "Promosi General Tanpa Segmentasi", copy: "Pesan promosi dikirim secara acak ke semua pelanggan tanpa mempertimbangkan minat atau frekuensi kunjungan." },
    { title: "Kurangnya Visibilitas Masukan Pelanggan", copy: "Ulasan dan kendala layanan dari pelanggan jarang terekam dengan baik sehingga sulit dijadikan bahan evaluasi operasional." },
  ],
  featureEyebrow: "FITUR PENGELOLAAN PELANGGAN",
  featureHeadline: "Semua yang Dibutuhkan untuk Mengelola dan Menjaga Retensi Pelanggan.",
  featureIntro: "Mille mengintegrasikan seluruh instrumen pemasaran CRM — dari pengumpulan data, program reward, kampanye terarah, hingga otomasi personal — dalam satu antarmuka terpadu.",
  features: [
    { title: "Database Pelanggan", copy: "Pusat profil pelanggan terpadu yang mencatat riwayat transaksi, total belanja, tanggal ulang tahun, dan preferensi produk.", visual: "Direktori Pelanggan", labels: ["Alya · Platinum", "Raka · Gold", "Nadia · Silver", "Dimas · Gold"], metric: "12.4k" },
    { title: "Segmentasi", copy: "Pengelompokan pelanggan secara otomatis berdasarkan frekuensi kunjungan, nilai transaksi (RFM Analytics), atau preferensi kategori.", visual: "RFM Segmentation", labels: ["VIP Members", "Regular Customers", "At-Risk", "Inactive"], metric: "8 segmen" },
    { title: "Program Loyalitas", copy: "Rancang skema perolehan poin dan penukaran reward digital yang fleksibel langsung dari aplikasi kasir atau web-app.", visual: "Digital Member Card", labels: ["Platinum Tier", "4.280 poin", "2 voucher aktif", "Reward catalog"], metric: "4.280 pt" },
    { title: "Referral", copy: "Perluas jangkauan pelanggan baru melalui program rujukan berinsentif poin atau diskon khusus bagi pemberi dan penerima rekomendasi.", visual: "Referral Tracker", labels: ["MILLE-ALYA24", "42 undangan", "18 terkonversi", "900 poin reward"], metric: "42.8%" },
    { title: "Kampanye Marketing", copy: "Kirimkan pesan promosi, pengumuman menu baru, atau penawaran eksklusif melalui integrasi WhatsApp Broadcast dan Email.", visual: "Campaign Manager", labels: ["Delivered · 94%", "Read · 76%", "Clicked · 31%", "Converted · 18.6%"], metric: "18.6%" },
    { title: "Ulasan & Penilaian", copy: "Kumpulkan masukan dan tingkat kepuasan pelanggan secara digital usai transaksi untuk menjaga standar kualitas layanan.", visual: "Feedback & Rating", labels: ["★★★★★ · 842", "★★★★☆ · 124", "CSAT Score", "Ulasan terbaru"], metric: "4.8/5" },
    { title: "Gift Card", copy: "Terbitkan voucher belanja dan kartu hadiah digital berbayar sebagai instrumen peningkat arus kas awal dan akuisisi pelanggan.", visual: "Digital Gift Card", labels: ["Saldo Rp500.000", "Kode MILLE-GIFT", "QR siap digunakan", "Berlaku 90 hari"], metric: "Rp500k" },
    { title: "Personalisasi & Otomasi", copy: "Jalankan penawaran otomatis seperti ucapan ulang tahun berhadiah voucher atau pengingat kunjungan kembali bagi pelanggan pasif.", visual: "Automation Flow", labels: ["Birthday Event", "WhatsApp Coupon", "Wait 7 days", "Redeem Status"], metric: "24 flow" },
  ],
  aiHeadline: "Prediksi Risiko Pelanggan Pasif dan Tingkatkan Kunjungan Ulang.",
  aiPrompt: "Berapa banyak pelanggan VIP yang tidak berkunjung dalam 30 hari terakhir dan apa rekomendasi penanganannya?",
  aiAnswer: "Terdeteksi 142 pelanggan VIP belum melakukan transaksi bulan ini. OptiMille merekomendasikan pengiriman penawaran otomatis 'Voucher Diskon 20% Private Tier' via WhatsApp.",
  closingHeadline: "Siap Membangun Hubungan Pelanggan yang Lebih Bernilai dan Berkelanjutan?",
  dashboard: "customers",
};

export default function ProdukPelanggan() {
  return <ProductDetailPage config={config} />;
}
