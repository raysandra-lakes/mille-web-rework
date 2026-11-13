import ProductDetailPage, {
  type ProductPageConfig,
} from "../components/product/ProductDetailPage";

const config: ProductPageConfig = {
  name: "Pengelolaan Karyawan",
  headline:
    "Kelola Tim, Jadwal Kerja, dan Payroll Karyawan Secara Otomatis dalam Satu Sistem.",
  intro:
    "Sederhanakan manajemen sumber daya manusia di seluruh outlet bisnis Anda. Mille menghubungkan pencatatan absensi, pengaturan shift, perhitungan komisi, hingga pencairan payroll secara transparan dan terintegrasi.",
  problemHeadline: "Manajemen Karyawan Multi-Outlet Rentan Kompleksitas.",
  problemIntro:
    "Pengelolaan tim secara manual berpotensi menimbulkan ketidakakuratan data absensi, hambatan pembagian shift, hingga kesalahan perhitungan hak finansial karyawan.",
  problems: [
    {
      title: "Absensi & Penitipan Jatah Shift",
      copy: "Pencatatan kehadiran manual rawan pemalsuan data dan sulit dipantau secara real-time dari kantor pusat.",
    },
    {
      title: "Pembagian Shift yang Tumpang Tindih",
      copy: "Penyusunan jadwal staf antar outlet tanpa sistem terpusat sering memicu kekosongan staf pada jam sibuk.",
    },
    {
      title: "Perhitungan Komisi Rumit",
      copy: "Perhitungan komisi berbasis pencapaian target penjualan kasir memakan waktu dan berisiko salah hitung.",
    },
    {
      title: "Keterlambatan Proses Payroll",
      copy: "Rekapitulasi total jam kerja, insentif, potongan keterlambatan, dan lembur secara manual memperlambat pencairan gaji.",
    },
  ],
  featureEyebrow: "FITUR PENGELOLAAN KARYAWAN",
  featureHeadline:
    "Semua yang Dibutuhkan untuk Mengelola Tim dalam Satu Platform.",
  featureIntro:
    "Mille mengintegrasikan seluruh alur kerja operasional HRD — dari pendataan staf, pemantauan performa, hingga penggajian otomatis — tanpa proses manual yang melelahkan.",
  features: [
    {
      title: "Data Karyawan",
      copy: "Pusat basis data staf terstruktur untuk mengelola profil, dokumen legalitas, riwayat posisi, hingga penugasan outlet.",
      visual: "Direktori Karyawan",
      labels: [
        "Alya · Store Manager",
        "Bima · Head Barista",
        "Citra · Cashier",
        "Danu · Kitchen",
      ],
      metric: "248 staf",
    },
    {
      title: "Absensi",
      copy: "Sistem pencatatan kehadiran digital berbasis geotagging atau PIN Kasir untuk validasi kehadiran secara akurat.",
      visual: "Verifikasi Kehadiran",
      labels: [
        "Clock-in · 07:58",
        "Kemang · Radius 12m",
        "PIN kasir terverifikasi",
        "Clock-out · 17:04",
      ],
      metric: "98%",
    },
    {
      title: "Shift",
      copy: "Pengaturan dan penjadwalan shift kerja staf antar cabang secara fleksibel untuk menjaga kelancaran operasional harian.",
      visual: "Kalender Shift Mingguan",
      labels: [
        "Senin · 12 staf",
        "Selasa · 14 staf",
        "Rabu · 11 staf",
        "Kamis · 16 staf",
      ],
      metric: "64 shift",
    },
    {
      title: "Performa",
      copy: "Pantau indikator kinerja individu seperti jumlah transaksi kasir, kecepatan pelayanan, hingga tingkat kehadiran.",
      visual: "KPI Leaderboard Staf",
      labels: [
        "Bima · 96 poin",
        "Alya · 92 poin",
        "Citra · 89 poin",
        "Danu · 84 poin",
      ],
      metric: "92.4",
    },
    {
      title: "Komisi",
      copy: "Perhitungan skema komisi dan bonus penjualan barang/layanan secara otomatis berdasarkan realisasi transaksi kasir.",
      visual: "Kalkulasi Komisi",
      labels: [
        "Penjualan layanan",
        "Produk add-on",
        "Target outlet",
        "Bonus pencapaian",
      ],
      metric: "Rp22.8jt",
    },
    {
      title: "Payroll",
      copy: "Otomatisasi kalkulasi gaji bersih yang menggabungkan gaji pokok, lembur, komisi, serta potongan absensi secara presisi.",
      visual: "Payroll Summary",
      labels: ["Gaji pokok", "Lembur & insentif", "Komisi", "Potongan absensi"],
      metric: "Rp184.2jt",
    },
  ],
  aiHeadline: "Optimalkan Efisiensi Staf dan Proyeksi Kebutuhan Shift.",
  aiPrompt:
    "Apakah alokasi jumlah staf pada jam sibuk weekend di Cabang Bandung sudah optimal?",
  aiAnswer:
    "Terdeteksi keterlambatan pemrosesan pesanan sebesar 12% pada hari Sabtu jam 18:00–20:00 di Cabang Bandung. Disarankan menambah 2 staf shift malam pada periode tersebut.",
  closingHeadline:
    "Siap Mewujudkan Manajemen Tim dan Payroll yang Lebih Terstruktur?",
  dashboard: "people",
};

export default function ProdukPengelolaanKaryawan() {
  return <ProductDetailPage config={config} />;
}
