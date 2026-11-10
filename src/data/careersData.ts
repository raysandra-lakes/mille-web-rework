export const careerDepartments = ["Semua", "Marketing", "Sales", "Engineering"] as const

// Data contoh — posisi dan detail wajib diverifikasi oleh tim HR.
export const careersData = [
  {
    title: "Performance Marketing Specialist",
    department: "Marketing",
    location: "Bandung",
    type: "Full-time",
    description: "Mengelola kampanye digital dan membantu tim memahami kualitas setiap kanal pemasaran.",
    qualifications: ["Memahami dasar kampanye digital", "Mampu membaca dan menjelaskan data kampanye", "Nyaman berkolaborasi dengan tim kreatif dan penjualan"],
  },
  {
    title: "Sales Executive",
    department: "Sales",
    location: "Bandung",
    type: "Full-time",
    description: "Membantu calon pelanggan memahami solusi Mille sesuai kebutuhan operasional bisnis mereka.",
    qualifications: ["Komunikasi profesional dan terstruktur", "Mampu memahami kebutuhan bisnis", "Terbiasa bekerja dengan target dan tindak lanjut"],
  },
  {
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Bandung",
    type: "Full-time",
    description: "Membangun antarmuka produk yang jelas, cepat, dan dapat digunakan pada berbagai perangkat.",
    qualifications: ["Memahami React dan TypeScript", "Peduli pada aksesibilitas dan kualitas antarmuka", "Terbiasa berkolaborasi melalui review kode"],
  },
] as const
