export type MockupStatus = "emerald" | "amber" | "rose" | "brand"

export type MockupItem = {
  label: string
  value?: string
  status?: MockupStatus
}

export type FiturEntry = {
  slug: string
  name: string
  chip: string
  h1: string
  intro: string
  mockup: {
    variant: "list" | "grid" | "board" | "cards"
    title: string
    items: MockupItem[]
    columns?: { title: string; items: string[] }[]
    button?: string
  }
  problems: { title: string; text: string }[]
  features: { title: string; text: string }[]
  flow: { title: string; text: string }[]
  block: { title: string; text: string; points: string[] }
  related: string[]
}

export const fiturLinks: Record<string, { label: string; href: string }> = {
  "point-of-sale": { label: "Point of Sale", href: "/produk/point-of-sale" },
  "qr-order": { label: "QR Order", href: "/produk/qr-order" },
  "self-order-kiosk": { label: "Self Order Kiosk", href: "/produk/self-order-kiosk" },
  "order-queue": { label: "Order Queue", href: "/produk/order-queue" },
  reservasi: { label: "Reservasi", href: "/produk/reservasi" },
  "waiting-list": { label: "Waiting List", href: "/produk/waiting-list" },
  "kitchen-display-system": { label: "Kitchen Display System", href: "/produk/kitchen-display-system" },
  "tata-ruang-meja": { label: "Tata Ruang & Meja", href: "/produk/tata-ruang-meja" },
  "integrasi-online-order": { label: "Integrasi Online Order", href: "/produk/integrasi-online-order" },
}

export const fiturData: FiturEntry[] = [
  {
    slug: "qr-order",
    name: "QR Order",
    chip: "QR ORDER",
    h1: "Pelanggan Memesan dan Membayar Sendiri dari Meja Hanya dengan Memindai QR.",
    intro: "Mille QR Order memungkinkan pelanggan membuka menu, memesan, dan menyelesaikan pembayaran dari ponsel masing-masing, sehingga pesanan langsung masuk ke sistem tanpa menunggu kasir atau pelayan.",
    mockup: {
      variant: "cards",
      title: "Menu Mille",
      items: [
        { label: "Latte", value: "28k" },
        { label: "Croissant", value: "32k" },
        { label: "Pasta", value: "78k" },
        { label: "Teh Tarik", value: "24k" },
      ],
      button: "Lihat Pesanan",
    },
    problems: [
      { title: "Pelanggan Menunggu Dilayani", text: "Pemesanan yang bergantung pada pelayan memperlambat layanan, terutama di jam ramai." },
      { title: "Pesanan Salah Catat", text: "Pencatatan manual membuka peluang salah dengar dan salah input." },
      { title: "Kasir Terbebani Antrean", text: "Semua pemesanan dan pembayaran menumpuk di satu titik." },
    ],
    features: [
      { title: "Pesan via Scan QR", text: "Pelanggan memindai QR di meja untuk membuka menu dan memesan secara mandiri." },
      { title: "Menu Digital", text: "Daftar menu dan harga tampil sesuai data terbaru." },
      { title: "Variasi & Catatan", text: "Pelanggan memilih varian dan menambahkan catatan pesanan." },
      { title: "Pembayaran Mandiri", text: "Pelanggan memilih metode pembayaran langsung dari meja." },
      { title: "Gabung atau Pisah Tagihan", text: "Opsi pembayaran dapat digabung atau dipisah sesuai kebutuhan." },
      { title: "Sinkron ke Kasir & Dapur", text: "Pesanan tersinkronisasi otomatis hingga ke pembayaran dan operasional dapur." },
    ],
    flow: [
      { title: "Scan QR", text: "Pelanggan memindai kode QR di meja." },
      { title: "Pilih Menu", text: "Menu dipilih beserta varian dan catatan." },
      { title: "Kirim Pesanan", text: "Pesanan masuk ke sistem secara langsung." },
      { title: "Bayar", text: "Pembayaran diselesaikan dari ponsel pelanggan." },
    ],
    block: {
      title: "Pesanan Mandiri Tetap Terpantau di Kasir.",
      text: "Setiap pesanan dari QR langsung tercatat di sistem, sehingga tim bekerja lebih cepat tanpa proses input ulang.",
      points: [
        "Pesanan masuk otomatis ke kasir dan dapur",
        "Pembayaran tercatat dalam satu alur",
        "Stok ikut diperbarui sesuai penjualan",
      ],
    },
    related: ["point-of-sale", "order-queue", "kitchen-display-system"],
  },
  {
    slug: "self-order-kiosk",
    name: "Self Order Kiosk",
    chip: "SELF ORDER KIOSK",
    h1: "Layar Pemesanan Mandiri yang Mengurangi Antrean Kasir dan Menambah Nilai Transaksi.",
    intro: "Mille Self Order Kiosk menyediakan layar pemesanan mandiri yang intuitif untuk memesan dan membayar secara non-tunai, dilengkapi rekomendasi produk serta promo yang berjalan otomatis.",
    mockup: {
      variant: "cards",
      title: "Pesan Mandiri",
      items: [
        { label: "Menu 1" },
        { label: "Menu 2" },
        { label: "Menu 3" },
        { label: "Menu 4" },
      ],
      button: "Lihat Pesanan",
    },
    problems: [
      { title: "Antrean Kasir Memanjang", text: "Antrean panjang membuat pelanggan enggan menunggu di jam ramai." },
      { title: "Peluang Tambahan Pesanan Terlewat", text: "Tanpa rekomendasi, pelanggan jarang menambah produk pendamping." },
      { title: "Pembayaran Tunai Memperlambat", text: "Pembayaran tunai menambah waktu pada setiap transaksi." },
    ],
    features: [
      { title: "Pemesanan Mandiri", text: "Pelanggan memilih dan memesan sendiri lewat layar yang mudah dipahami." },
      { title: "Pembayaran Non-Tunai", text: "Pesanan langsung dibayar secara non-tunai di kiosk." },
      { title: "Rekomendasi Menu", text: "Produk pendamping ditawarkan untuk meningkatkan nilai transaksi." },
      { title: "Voucher & Diskon", text: "Promo dan voucher diterapkan otomatis saat memesan." },
      { title: "Program Loyalitas", text: "Poin dan keanggotaan terhubung ke transaksi di kiosk." },
      { title: "Kustomisasi & Personalisasi", text: "Tampilan menu disesuaikan dengan konsep dan kebutuhan usaha." },
    ],
    flow: [
      { title: "Pilih Menu", text: "Pelanggan memilih produk di layar kiosk." },
      { title: "Tambah Rekomendasi", text: "Produk pendamping dan promo ditawarkan otomatis." },
      { title: "Bayar Non-Tunai", text: "Pembayaran diselesaikan langsung di kiosk." },
      { title: "Pesanan Diproses", text: "Pesanan masuk ke operasional outlet tanpa input ulang." },
    ],
    block: {
      title: "Kiosk Terhubung ke Kasir, Stok, dan Laporan.",
      text: "Pesanan dari kiosk tercatat dalam sistem yang sama dengan kasir, sehingga data penjualan selalu utuh.",
      points: [
        "Penjualan kiosk masuk ke laporan yang sama dengan kasir",
        "Stok terbarui sesuai pesanan",
        "Promo dan loyalitas berjalan konsisten di semua kanal",
      ],
    },
    related: ["point-of-sale", "order-queue", "qr-order"],
  },
  {
    slug: "order-queue",
    name: "Order Queue",
    chip: "ORDER QUEUE",
    h1: "Antrean Pesanan Terpantau Real-Time agar Pelanggan dan Tim Tahu Status Setiap Pesanan.",
    intro: "Mille Order Queue menampilkan urutan dan status pesanan secara real-time, sehingga pelanggan tidak perlu terus bertanya dan tim dapat bekerja sesuai prioritas.",
    mockup: {
      variant: "list",
      title: "Antrean Pesanan",
      items: [
        { label: "#A021", value: "Diproses", status: "amber" },
        { label: "#A022", value: "Siap", status: "emerald" },
        { label: "#A023", value: "Menunggu", status: "brand" },
        { label: "#A024", value: "Menunggu", status: "brand" },
      ],
    },
    problems: [
      { title: "Pelanggan Terus Bertanya", text: "Tanpa informasi status, pelanggan berulang kali menanyakan pesanannya." },
      { title: "Urutan Pesanan Tidak Jelas", text: "Pesanan yang masuk bersamaan mudah tertukar urutannya." },
      { title: "Pesanan Siap Terlambat Diambil", text: "Pesanan yang sudah siap tidak segera diketahui pelanggan." },
    ],
    features: [
      { title: "Nomor Antrean Otomatis", text: "Setiap pesanan memperoleh nomor secara otomatis." },
      { title: "Status Real-Time", text: "Status menunggu, diproses, dan siap diperbarui langsung." },
      { title: "Pemantauan Antrean", text: "Antrean dapat dipantau secara real-time oleh tim." },
      { title: "Urutan Berdasarkan Waktu", text: "Pesanan ditampilkan sesuai urutan masuk." },
      { title: "Terhubung ke Pemesanan Mandiri", text: "Pesanan dari kiosk dan kanal lain tampil dalam satu antrean." },
      { title: "Terhubung ke Dapur", text: "Status mengikuti proses yang berjalan di dapur." },
    ],
    flow: [
      { title: "Pesanan Masuk", text: "Pesanan tercatat dari kasir atau pemesanan mandiri." },
      { title: "Nomor Terbit", text: "Pesanan memperoleh nomor antrean." },
      { title: "Status Diperbarui", text: "Status berubah mengikuti proses di dapur." },
      { title: "Pesanan Diambil", text: "Pelanggan mengambil pesanan yang sudah siap." },
    ],
    block: {
      title: "Antrean yang Selaras dengan Operasional Outlet.",
      text: "Status pesanan mengikuti alur dari pemesanan hingga penyajian, tanpa pencatatan tambahan.",
      points: [
        "Satu antrean untuk berbagai kanal pemesanan",
        "Status terbarui otomatis dari proses dapur",
        "Mengurangi pertanyaan berulang di meja kasir",
      ],
    },
    related: ["self-order-kiosk", "qr-order", "kitchen-display-system"],
  },
  {
    slug: "reservasi",
    name: "Reservasi",
    chip: "RESERVASI",
    h1: "Reservasi Online yang Tercatat Rapi dan Terhubung ke Meja serta Pembayaran.",
    intro: "Mille Reservasi memungkinkan pelanggan memesan tempat secara online, lengkap dengan pembayaran di muka, sehingga jadwal dan kapasitas meja terkelola lebih tertib.",
    mockup: {
      variant: "list",
      title: "Reservasi Hari Ini",
      items: [
        { label: "Meja 04 · 19.00 · 4 orang", value: "Terkonfirmasi", status: "emerald" },
        { label: "Meja 07 · 19.30 · 2 orang", value: "Menunggu DP", status: "amber" },
        { label: "Meja 02 · 20.00 · 6 orang", value: "Terkonfirmasi", status: "emerald" },
      ],
    },
    problems: [
      { title: "Reservasi Dicatat Manual", text: "Pencatatan lewat pesan atau buku mudah terlewat dan bentrok." },
      { title: "Meja Tidak Sesuai Kapasitas", text: "Tanpa data kapasitas, penempatan tamu kurang optimal." },
      { title: "Pelanggan Tidak Datang", text: "Pembatalan tanpa kabar membuat meja terbuang percuma." },
    ],
    features: [
      { title: "Reservasi Online", text: "Pelanggan memilih jadwal dan jumlah tamu secara online." },
      { title: "Down Payment", text: "Pembayaran di muka membantu mengamankan reservasi." },
      { title: "Kapasitas Meja", text: "Reservasi disesuaikan dengan kapasitas meja yang tersedia." },
      { title: "Status Meja", text: "Status meja terbarui mengikuti reservasi." },
      { title: "Pembayaran Digital", text: "Pembayaran reservasi dapat diselesaikan secara digital." },
      { title: "Tata Ruang", text: "Reservasi mengikuti tata ruang dan meja yang telah diatur." },
    ],
    flow: [
      { title: "Pilih Jadwal", text: "Pelanggan memilih tanggal, jam, dan jumlah tamu." },
      { title: "Konfirmasi", text: "Reservasi tercatat dan dikonfirmasi di sistem." },
      { title: "Bayar DP", text: "Down payment diselesaikan bila diperlukan." },
      { title: "Kedatangan", text: "Tamu datang dan langsung ditempatkan di meja." },
    ],
    block: {
      title: "Reservasi Terhubung ke Kasir, Meja, dan Tim.",
      text: "Data reservasi tersambung dengan kasir, tata ruang, dan pengelolaan karyawan.",
      points: [
        "Reservasi tampil di tata ruang dan status meja",
        "Down payment tercatat di kasir",
        "Tim melihat jadwal reservasi yang sama",
      ],
    },
    related: ["waiting-list", "tata-ruang-meja", "point-of-sale"],
  },
  {
    slug: "waiting-list",
    name: "Waiting List",
    chip: "WAITING LIST",
    h1: "Daftar Tunggu Digital yang Membuat Antrean Meja Lebih Tertib.",
    intro: "Mille Waiting List mencatat tamu yang menunggu meja dan mengaturnya berdasarkan urutan, sehingga meja yang kosong segera terisi.",
    mockup: {
      variant: "list",
      title: "Daftar Tunggu",
      items: [
        { label: "1 · Andi · 2 orang", value: "Berikutnya", status: "emerald" },
        { label: "2 · Sinta · 4 orang", value: "Menunggu", status: "amber" },
        { label: "3 · Budi · 3 orang", value: "Menunggu", status: "amber" },
      ],
    },
    problems: [
      { title: "Antrean Meja Dicatat di Kertas", text: "Pencatatan manual mudah hilang dan sulit dipantau." },
      { title: "Meja Kosong Terlambat Terisi", text: "Tanpa daftar yang jelas, meja tersedia tidak segera dipakai." },
      { title: "Tamu Tidak Tahu Posisi", text: "Tamu tidak mendapat kepastian urutan mereka." },
    ],
    features: [
      { title: "Pencatatan Daftar Tunggu", text: "Tamu dicatat lengkap dengan jumlah orang." },
      { title: "Urutan Antrean", text: "Tamu dilayani sesuai urutan kedatangan." },
      { title: "Status Meja Real-Time", text: "Meja yang tersedia terlihat langsung oleh tim." },
      { title: "Penempatan ke Meja", text: "Tamu ditempatkan ke meja yang sesuai dengan kapasitas." },
      { title: "Terhubung ke Reservasi", text: "Reservasi dan daftar tunggu dikelola dalam satu tampilan." },
      { title: "Terhubung ke Kasir", text: "Tamu yang ditempatkan langsung terhubung ke pemesanan." },
    ],
    flow: [
      { title: "Tamu Datang", text: "Tim mencatat tamu dan jumlah orang." },
      { title: "Masuk Daftar Tunggu", text: "Tamu masuk ke urutan antrean." },
      { title: "Meja Tersedia", text: "Sistem menunjukkan meja yang sesuai." },
      { title: "Tamu Ditempatkan", text: "Tamu diarahkan ke meja dan mulai memesan." },
    ],
    block: {
      title: "Daftar Tunggu yang Selaras dengan Status Meja.",
      text: "Perubahan status meja langsung memengaruhi urutan penempatan tamu.",
      points: [
        "Status meja dan antrean tampil bersamaan",
        "Terhubung ke reservasi",
        "Tamu ditempatkan tanpa pencatatan ulang",
      ],
    },
    related: ["reservasi", "tata-ruang-meja", "point-of-sale"],
  },
  {
    slug: "tata-ruang-meja",
    name: "Tata Ruang & Meja",
    chip: "TATA RUANG & MEJA",
    h1: "Atur Ruangan dan Meja Sesuai Kondisi Outlet, Pantau Statusnya Secara Real-Time.",
    intro: "Mille Tata Ruang & Meja membantu mengatur denah, kapasitas, dan status meja, serta terhubung ke reservasi dan pemesanan via QR untuk pengalaman pelanggan yang nyaman.",
    mockup: {
      variant: "grid",
      title: "Denah Lantai 1",
      items: [
        { label: "M01", value: "Kosong", status: "emerald" },
        { label: "M02", value: "Terisi", status: "rose" },
        { label: "M03", value: "Reservasi", status: "amber" },
        { label: "M04", value: "Terisi", status: "rose" },
        { label: "M05", value: "Kosong", status: "emerald" },
        { label: "M06", value: "Kosong", status: "emerald" },
      ],
    },
    problems: [
      { title: "Status Meja Tidak Terpantau", text: "Tim harus mengecek manual untuk mengetahui meja yang kosong." },
      { title: "Denah Tidak Sesuai Kondisi", text: "Perubahan tata letak tidak tercermin di sistem." },
      { title: "Penggunaan Meja Kurang Optimal", text: "Tamu sering ditempatkan di meja yang tidak sesuai kapasitas." },
    ],
    features: [
      { title: "Denah Ruangan", text: "Atur ruangan dan area sesuai kondisi outlet." },
      { title: "Tata Letak Meja", text: "Susun posisi meja dengan mudah." },
      { title: "Kapasitas Meja", text: "Tetapkan kapasitas untuk penempatan yang tepat." },
      { title: "Status Meja", text: "Pantau meja kosong, terisi, dan dipesan secara real-time." },
      { title: "Reservasi", text: "Reservasi terhubung langsung ke meja." },
      { title: "Pesanan via QR", text: "Pesanan dari QR tercatat di meja yang sesuai." },
    ],
    flow: [
      { title: "Atur Denah", text: "Susun ruangan dan meja." },
      { title: "Tetapkan Kapasitas", text: "Isi kapasitas setiap meja." },
      { title: "Pantau Status", text: "Lihat status meja secara langsung." },
      { title: "Tempatkan Pelanggan", text: "Arahkan tamu ke meja yang sesuai." },
    ],
    block: {
      title: "Meja Terhubung ke Kasir, QR Order, dan Laporan.",
      text: "Data meja tersambung dengan alur pemesanan dan pelaporan outlet.",
      points: [
        "Pesanan tercatat per meja",
        "Reservasi tampil di denah",
        "Laporan outlet memuat data meja",
      ],
    },
    related: ["reservasi", "qr-order", "point-of-sale"],
  },
  {
    slug: "kitchen-display-system",
    name: "Kitchen Display System",
    chip: "KITCHEN DISPLAY SYSTEM",
    h1: "Alur Kerja Dapur yang Terorganisir, dari Pesanan Masuk hingga Siap Disajikan.",
    intro: "Mille Kitchen Display System (KDS) memilah pesanan, memberi pengingat, dan mengelompokkan pesanan sejenis untuk mempercepat penyajian dan meningkatkan kepuasan pelanggan.",
    mockup: {
      variant: "board",
      title: "Dapur",
      items: [],
      columns: [
        { title: "Baru", items: ["#A021 Latte x2", "#A022 Pasta x1"] },
        { title: "Diproses", items: ["#A019 Croissant x3"] },
        { title: "Siap", items: ["#A017 Teh Tarik x2"] },
      ],
    },
    problems: [
      { title: "Tiket Kertas Hilang atau Tertukar", text: "Tiket manual mudah hilang dan sulit dilacak." },
      { title: "Prioritas Pesanan Tidak Jelas", text: "Tim dapur sulit menentukan pesanan yang perlu didahulukan." },
      { title: "Dapur Tidak Terbagi per Divisi", text: "Pesanan untuk stasiun berbeda tercampur dalam satu daftar." },
    ],
    features: [
      { title: "Manajemen Pesanan", text: "Pesanan masuk tersusun rapi dan mudah dibaca." },
      { title: "Multi Divisi", text: "Pesanan dipilah ke divisi atau stasiun yang tepat." },
      { title: "Prioritas Pesanan", text: "Pesanan ditampilkan sesuai urutan dan prioritas." },
      { title: "Status Pesanan", text: "Status diperbarui dari baru, diproses, hingga siap." },
      { title: "Kustomisasi Tampilan", text: "Tampilan layar disesuaikan dengan alur dapur." },
      { title: "Tanpa Tiket Kertas", text: "Mengurangi penggunaan kertas di dapur." },
    ],
    flow: [
      { title: "Pesanan Masuk", text: "Pesanan dari kasir dan kanal lain tampil di layar." },
      { title: "Dipilah per Divisi", text: "Setiap divisi menerima pesanannya." },
      { title: "Diproses", text: "Tim memperbarui status saat memasak." },
      { title: "Siap Disajikan", text: "Pesanan siap diteruskan ke pelanggan." },
    ],
    block: {
      title: "Dapur Terhubung ke Kasir, QR Order, dan Inventaris.",
      text: "Pesanan dari berbagai kanal tampil dalam satu layar dan terhubung ke data stok.",
      points: [
        "Pesanan dari kasir dan QR Order tampil langsung",
        "Terhubung ke inventaris",
        "Analisis pesanan membantu evaluasi alur dapur",
      ],
    },
    related: ["point-of-sale", "qr-order", "order-queue"],
  },
  {
    slug: "integrasi-online-order",
    name: "Integrasi Online Order",
    chip: "INTEGRASI ONLINE ORDER",
    h1: "Pesanan dari Platform Online Masuk Langsung ke Sistem, Tanpa Input Ulang.",
    intro: "Mille mengintegrasikan pesanan dari layanan online food & delivery, termasuk GrabFood dan GoSend, langsung ke POS untuk memudahkan pengelolaan pesanan dari berbagai platform.",
    mockup: {
      variant: "list",
      title: "Pesanan Online",
      items: [
        { label: "GrabFood #1032", value: "Baru", status: "brand" },
        { label: "GoSend #0457", value: "Diproses", status: "amber" },
        { label: "Kasir #A021", value: "Selesai", status: "emerald" },
      ],
    },
    problems: [
      { title: "Banyak Perangkat, Banyak Pencatatan", text: "Pesanan dari tiap platform dicatat di tempat berbeda." },
      { title: "Pesanan Online Terlewat", text: "Pesanan yang masuk saat ramai mudah tidak terpantau." },
      { title: "Rekap Penjualan Terpisah", text: "Penjualan online dan offline sulit digabung dalam satu laporan." },
    ],
    features: [
      { title: "Pesanan Online Terintegrasi", text: "Pesanan dari layanan food & delivery masuk langsung ke POS." },
      { title: "Dukungan GrabFood & GoSend", text: "Pesanan dari kedua layanan dikelola dalam satu sistem." },
      { title: "Sinkron ke Pembayaran", text: "Pesanan tersinkronisasi hingga proses pembayaran." },
      { title: "Sinkron ke Dapur", text: "Pesanan langsung diteruskan ke operasional dapur." },
      { title: "Pengelolaan Multi Platform", text: "Pesanan dari berbagai platform dikelola dari satu tempat." },
      { title: "Laporan Terpadu", text: "Penjualan online dan offline tercatat dalam satu laporan." },
    ],
    flow: [
      { title: "Pesanan Masuk", text: "Pesanan dari platform online diterima sistem." },
      { title: "Terbaca di POS", text: "Pesanan tampil di POS tanpa input ulang." },
      { title: "Diproses Dapur", text: "Pesanan diteruskan ke dapur." },
      { title: "Tercatat di Laporan", text: "Penjualan masuk ke laporan terpadu." },
    ],
    block: {
      title: "Satu Sistem untuk Pesanan Online dan Offline.",
      text: "Pesanan dari platform online diperlakukan setara dengan pesanan kasir sehingga data tidak terpecah.",
      points: [
        "Tidak perlu input ulang dari tablet platform",
        "Pesanan online dan kasir dalam satu alur",
        "Data penjualan utuh di satu laporan",
      ],
    },
    related: ["point-of-sale", "kitchen-display-system", "order-queue"],
  },
]

export function getFiturBySlug(slug: string) {
  return fiturData.find((feature) => feature.slug === slug)
}
