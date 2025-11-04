import { useEffect, useMemo, useState } from "react";
import Hero from "./components/Hero";
import FinancialReport from "./components/FinancialReport";
import Deposits from "./components/Deposits";
import Community from "./components/Community";
import { Sun, Moon, Heart } from "lucide-react";

export default function App() {
  // Mock data that can be wired to a backend later
  const [totals, setTotals] = useState({ collected: 2150000, used: 775000 });
  const [deposits, setDeposits] = useState(initialDeposits);
  const [instagramPosts, setInstagramPosts] = useState(sampleInstagramPosts);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.title = "Sedekah Sampah Nururrosyad – Transparansi Keuangan dan Setoran Sampah";
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const remaining = useMemo(() => Math.max(totals.collected - totals.used, 0), [totals]);

  const handleDonate = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-sky-50 text-gray-900 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950 dark:text-gray-100">
      {/* Top ticker widget */}
      <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-sm">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded bg-emerald-100 px-2 py-0.5 font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200">Terkumpul: Rp {formatIDR(totals.collected)}</span>
            <span className="rounded bg-amber-100 px-2 py-0.5 font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-200">Terpakai: Rp {formatIDR(totals.used)}</span>
            <span className="rounded bg-sky-100 px-2 py-0.5 font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-200">Sisa: Rp {formatIDR(remaining)}</span>
          </div>
          <button
            onClick={() => setDark((d) => !d)}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 ring-1 ring-gray-200 transition hover:bg-gray-50 dark:bg-neutral-900 dark:ring-neutral-800"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-sky-400" />}
            <span className="hidden sm:inline text-xs">{dark ? "Terang" : "Gelap"}</span>
          </button>
        </div>
      </div>

      <Hero onDonate={handleDonate} />
      <FinancialReport totals={totals} />
      <Deposits deposits={deposits} />
      <Community instagramPosts={instagramPosts} />

      {/* Floating Donate Button */}
      <a
        href="https://wa.me/6281234567890?text=Halo%20Sedekah%20Sampah%2C%20saya%20ingin%20donasi."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-white shadow-xl transition hover:scale-105 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        <Heart className="h-5 w-5" />
        Donasi Sekarang
      </a>

      <footer className="mt-20 border-t border-gray-100 bg-white/60 py-8 text-center text-sm text-gray-500 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-gray-400">
        © {new Date().getFullYear()} Sedekah Sampah Nururrosyad • Transparansi untuk kebaikan bersama
      </footer>
    </div>
  );
}

function formatIDR(n) {
  try {
    return new Intl.NumberFormat("id-ID").format(Math.round(n));
  } catch {
    return n;
  }
}

const initialDeposits = [
  { name: "Aisyah", category: "Plastik", weightKg: 5.2, pricePerKg: 2500, value: 13000, date: "2025-01-10" },
  { name: "Budi", category: "Kertas", weightKg: 8.1, pricePerKg: 2000, value: 16200, date: "2025-01-12" },
  { name: "Citra", category: "Kardus", weightKg: 12.7, pricePerKg: 2200, value: 27940, date: "2025-01-15" },
  { name: "Dedi", category: "Botol", weightKg: 4.5, pricePerKg: 3000, value: 13500, date: "2025-01-17" },
  { name: "Eka", category: "Kaleng", weightKg: 3.1, pricePerKg: 4000, value: 12400, date: "2025-01-20" },
  { name: "Farah", category: "Kaca", weightKg: 6.0, pricePerKg: 1500, value: 9000, date: "2025-01-22" },
];

const sampleInstagramPosts = [
  {
    media_url:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?q=80&w=1200&auto=format&fit=crop",
    caption: "Kegiatan bersih-bersih lingkungan bersama warga.",
    permalink: "https://www.instagram.com/sedekahsampahnururrosyad",
  },
  {
    media_url:
      "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=1200&auto=format&fit=crop",
    caption: "Pemilahan sampah plastik untuk didaur ulang.",
    permalink: "https://www.instagram.com/sedekahsampahnururrosyad",
  },
  {
    media_url:
      "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1200&auto=format&fit=crop",
    caption: "Transparansi dana hasil setoran untuk program sosial.",
    permalink: "https://www.instagram.com/sedekahsampahnururrosyad",
  },
  {
    media_url:
      "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1200&auto=format&fit=crop",
    caption: "Edukasi pengelolaan sampah di sekolah sekitar.",
    permalink: "https://www.instagram.com/sedekahsampahnururrosyad",
  },
  {
    media_url:
      "https://images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=1200&auto=format&fit=crop",
    caption: "Kunjungan ke bank sampah mitra.",
    permalink: "https://www.instagram.com/sedekahsampahnururrosyad",
  },
  {
    media_url:
      "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=1200&auto=format&fit=crop",
    caption: "Setoran sampah mingguan dari anggota.",
    permalink: "https://www.instagram.com/sedekahsampahnururrosyad",
  },
];
