import { createBrowserRouter } from "react-router";
import Root from "../components/layout/Root";
import Home from "../pages/Home";
import SolusiRestoran from "../pages/SolusiRestoran";
import SolusiKedaiKopi from "../pages/SolusiKedaiKopi";
import SolusiCepatSaji from "../pages/SolusiCepatSaji";
import SolusiBakery from "../pages/SolusiBakery";
import SolusiTokoRetail from "../pages/SolusiTokoRetail";
import SolusiSalonSpa from "../pages/SolusiSalonSpa";
import ProdukOperasionalPemesananPembayaran from "../pages/ProdukOperasionalPemesananPembayaran";
import ProdukInventarisRantaiPasokan from "../pages/ProdukInventarisRantaiPasokan";
import ProdukPengelolaanBisnisKeuangan from "../pages/ProdukPengelolaanBisnisKeuangan";
import ProdukPengelolaanKaryawan from "../pages/ProdukPengelolaanKaryawan";
import ProdukPelanggan from "../pages/ProdukPelanggan";
import OptiMille from "../pages/OptiMille";
import Berlangganan from "../pages/Berlangganan";
import ProdukPointOfSale from "../pages/ProdukPointOfSale";
import BlogIndex from "../pages/BlogIndex";
import BlogDetail from "../pages/BlogDetail";
import Support from "../pages/Support";
import FAQ from "../pages/FAQ";
import TentangPerusahaan from "../pages/TentangPerusahaan";
import Karir from "../pages/Karir";
import UnduhApp from "../pages/UnduhApp";
import FiturPage from "../components/fitur/FiturPage";
import JadwalkanDemo from "../pages/JadwalkanDemo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "solusi/restoran", Component: SolusiRestoran },
      { path: "solusi/kedai-kopi", Component: SolusiKedaiKopi },
      { path: "solusi/cepat-saji", Component: SolusiCepatSaji },
      { path: "solusi/bakery", Component: SolusiBakery },
      { path: "solusi/toko-retail", Component: SolusiTokoRetail },
      { path: "solusi/salon-spa", Component: SolusiSalonSpa },
      { path: "produk/operasional-pemesanan-pembayaran", Component: ProdukOperasionalPemesananPembayaran },
      { path: "produk/point-of-sale", Component: ProdukPointOfSale },
      { path: "produk/inventaris-rantai-pasokan", Component: ProdukInventarisRantaiPasokan },
      { path: "produk/pengelolaan-bisnis-keuangan", Component: ProdukPengelolaanBisnisKeuangan },
      { path: "produk/pengelolaan-karyawan", Component: ProdukPengelolaanKaryawan },
      { path: "produk/pelanggan", Component: ProdukPelanggan },
      { path: "produk/:slug", Component: FiturPage },
      { path: "optimille", Component: OptiMille },
      { path: "berlangganan", Component: Berlangganan },
      { path: "blog", Component: BlogIndex },
      { path: "blog/:slug", Component: BlogDetail },
      { path: "support", Component: Support },
      { path: "faq", Component: FAQ },
      { path: "tentang-perusahaan", Component: TentangPerusahaan },
      { path: "karir", Component: Karir },
      { path: "unduh", Component: UnduhApp },
      { path: "jadwalkan-demo", Component: JadwalkanDemo },
    ],
  },
]);
