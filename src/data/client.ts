import type { Client } from "./client.types";


const logo = (file: string) => `/assets/client-img/${file}`;

/**
 * CARA MENAMBAH KLIEN
 * 1. Simpan file logo di public/assets/client-img/
 * 2. Salin salah satu blok di bawah, tempel di bagian paling bawah array
 * 3. Isi data. Pastikan `id` unik
 * 4. Tanpa `testimonial` = logo tampil tapi tidak bisa diklik
 */

export const clients: Client[] = [
   {
    id: "dr-ells",
    name: "dr.Ells",
    sector: "Coffee Shop",
    location: "Bandung",
    since: "2024",
    logo: logo("dr-ells.webp"),
    testimonial: {
      quote: "Test",
      author: "Testing",
      role: "Owner",
      rating: 5,
    },
  },
  {
    id: "pepi-bakehouse",
    name: "Pepi BakeHouse",
    sector: "F&B",
    logo: logo("pepi-bakehouse.webp"),
    testimonial: {
      quote: "[Isi testimoni klien di sini.]",
      author: "[Nama Pemberi Testimoni]",
      role: "Manajer Operasional",
    },
  },
  { id: "de.u", 
    name: "De.u Coffee", 
    sector: "Coffee Shop", 
    logo: "/assets/client-img/deu-coffee.webp" 
  },
  {
    id: "get-tea",
    name: "Get Tea",
    sector: "F&B",
    logo: logo("get-tea.webp"),
    testimonial: { 
      quote: "[Isi testimoni klien di sini.]", 
      author: "[Nama]", 
      role: "Owner", 
      rating: 5 
    },
  },
  {
    id: "gin-gin",
    name: "Gin-Gin",
    logo: logo("gin-gin.webp"),
    sector: "F&B",
    testimonial: { 
        quote: "[Isi testimoni klien di sini.]", 
        author: "[Nama]", 
        role: "Owner" 
    },
  },
  {
    id: "lelebo",
    logo: logo("Lelebo.png"),
    name: "Lelebo",
    sector: "F&B",
    testimonial: { 
        quote: "[Isi testimoni klien di sini.]", 
        author: "[Nama]", 
        role: "Owner" 
    },
  },
  {
    id: "madam-wong",
    name: "Madam Wong",
    sector: "Ritel",
    logo: logo("Madam Wong.png"),
    testimonial: { 
        quote: "[Isi testimoni klien di sini.]", 
        author: "[Nama]", 
        role: "Owner", 
        rating: 4 
    },
  },
  {
    id: "namsai",
    name: "Namsai",
    sector: "Ritel",
    logo: logo("Namsai.png"),
    testimonial: { 
        quote: "[Isi testimoni klien di sini.]", 
        author: "[Nama]", 
        role: "Kasir Utama" 
    },
  },
  {
    id: "ozt",
    name: "Ozt",
    sector: "Ritel",
    logo: logo("ozt.webp"),
    testimonial: { 
        quote: "[Isi testimoni klien di sini.]", 
        author: "[Nama]", 
        role: "Kasir Utama" 
    },
  },
  {
    id: "roempi",
    name: "Roempi",
    sector: "Ritel",
    logo: logo("roempi.webp"),
    testimonial: { 
        quote: "[Isi testimoni klien di sini.]", 
        author: "[Nama]", 
        role: "Kasir Utama" 
    },
  },
  {
    id: "wingzowingz",
    name: "Wings o Wingz",
    sector: "Ritel",
    logo: logo("wingzowingz.webp"),
    testimonial: { 
        quote: "[Isi testimoni klien di sini.]", 
        author: "[Nama]", 
        role: "Kasir Utama" 
    },
  },
  {
    id: "beintemas",
    name: "Beintemas",
    sector: "Ritel",
    logo: logo("beintemas.webp"),
    testimonial: { 
        quote: "[Isi testimoni klien di sini.]", 
        author: "[Nama]", 
        role: "Kasir Utama" 
    },
  },
  {
    id: "titik-koma",
    name: "Titik Koma",
    sector: "Ritel",
    logo: logo("kopi-titik-koma.webp"),
    testimonial: { 
        quote: "[Isi testimoni klien di sini.]", 
        author: "[Nama]", 
        role: "Kasir Utama" 
    },
  },
  { id: "giggle-box", 
    name: "Giggle Box", 
    sector: "Ritel",
    logo: logo("gigglebox.webp"), 
},
  { id: "sendja", 
    name: "Sendja", 
    sector: "Ritel",
    logo: logo("sendja-spa.webp"), 
},
  { id: "gooma", 
    name: "Gooma", 
    sector: "Ritel",
    logo: logo("gooma.webp"), 
},
  { id: "kabin", 
    name: "Kabin", 
    sector: "Ritel",
    logo: logo("kabin.webp"), 
},
  { id: "hutanika", 
    name: "Hutanika", 
    sector: "Ritel",
    logo: logo("hutanika.webp"), 
},
  { id: "kamarasa", 
    name: "Kamarasa", 
    sector: "Ritel",
    logo: logo("kamarasa.jpeg"), 
},
  { id: "drunk-baker", 
    name: "Drunk Baker", 
    sector: "Ritel",
    logo: logo("drunk-baker.webp"), 
},
  { id: "sop-burtok", 
    name: "Sop Burtok", 
    sector: "Ritel",
    logo: logo("sop_burtok.webp"), 
},
  { id: "sop-banjar", 
    name: "Sop Banjar Aj", 
    sector: "Ritel",
    logo: logo("soto_banjar_aj.webp"), 
},
  { id: "macks-creamery", 
    name: "Macks Creamery", 
    sector: "Ritel",
    logo: logo("macks-creamery.webp"), 
},
];

if (import.meta.env?.DEV) {
  const ids = clients.map((c) => c.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) console.warn("[customers] id ganda:", [...new Set(dupes)]);
}