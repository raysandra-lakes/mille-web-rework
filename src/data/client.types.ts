// src/data/customers.types.ts
export interface Testimonial {
  quote: string;
  author: string; // nama pemberi testimoni
  role: string; // jabatan, mis. "Owner"
  rating?: 1 | 2 | 3 | 4 | 5;
}

export interface Client {
  id: string;
  name: string; // nama bisnis
  sector: string;
  logo?: string; // kosong = pakai placeholder
  location?: string;
  since?: string;
  website?: string;
  testimonial?: Testimonial; // kosong = logo tidak bisa diklik
}