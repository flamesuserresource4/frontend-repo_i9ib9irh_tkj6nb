import { useEffect, useState } from "react";
import { Instagram, Phone, QrCode, MessageCircle } from "lucide-react";

const IG_URL = "https://www.instagram.com/sedekahsampahnururrosyad";

export default function InstagramAndContact() {
  const [latest, setLatest] = useState(0);
  const mockPosts = [
    {
      img: "https://images.unsplash.com/photo-1549980384-d61217e50c88?q=80&w=800&auto=format&fit=crop",
      caption: "Aksi bersih lingkungan bersama warga.",
      date: "2025-01-10",
    },
    {
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop",
      caption: "Pemilahan sampah anorganik menjadi bernilai.",
      date: "2025-01-18",
    },
    {
      img: "https://images.unsplash.com/photo-1604335399105-a0c49bd79bd8?q=80&w=800&auto=format&fit=crop",
      caption: "Setoran sampah mingguan untuk program sedekah.",
      date: "2025-01-25",
    },
  ];

  useEffect(() => {
    const t = setInterval(() => setLatest((i) => (i + 1) % mockPosts.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="activities" className="bg-white py-16 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Kegiatan & Dokumentasi</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-300">Sorotan aktivitas komunitas dari Instagram</p>
          </div>
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-white shadow hover:opacity-95"
          >
            <Instagram className="h-5 w-5" /> Lihat Instagram
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {mockPosts.map((p, idx) => (
            <figure key={idx} className="group overflow-hidden rounded-2xl bg-gray-100 shadow-sm ring-1 ring-gray-100 dark:bg-neutral-800 dark:ring-neutral-800">
              <img
                src={p.img}
                alt={p.caption}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="p-4">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{p.caption}</p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{formatDate(p.date)}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Real-time update widget */}
        <div className="mt-10 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 p-4 text-white shadow">
          <p className="text-sm opacity-90">Update terbaru</p>
          <p className="text-lg font-semibold">{mockPosts[latest].caption}</p>
        </div>

        {/* Contact & Donation */}
        <div id="contact" className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-neutral-900 dark:ring-neutral-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Kontak</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Hubungi kami untuk penjemputan setoran atau kolaborasi.</p>
            <form
              className="mt-4 grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Terima kasih! Pesan Anda telah terkirim.");
                e.currentTarget.reset();
              }}
            >
              <input required name="name" placeholder="Nama" className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400 dark:border-neutral-700 dark:bg-neutral-800" />
              <input required type="email" name="email" placeholder="Email" className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400 dark:border-neutral-700 dark:bg-neutral-800" />
              <textarea required name="message" placeholder="Pesan" rows={4} className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400 dark:border-neutral-700 dark:bg-neutral-800" />
              <button type="submit" className="inline-flex w-max items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2 text-white shadow hover:bg-emerald-700">
                <MessageCircle className="h-5 w-5" /> Kirim Pesan
              </button>
            </form>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> WhatsApp: <a className="underline" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">+62 812-3456-7890</a></p>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-emerald-50 to-white p-6 shadow-sm ring-1 ring-emerald-100 dark:from-neutral-900 dark:to-neutral-900 dark:ring-neutral-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Donasi</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Dukung program sedekah sampah. Hasil donasi akan dilaporkan secara transparan.</p>
            <div className="mt-6 flex items-center gap-6">
              <div className="flex h-40 w-40 items-center justify-center rounded-xl bg-white shadow ring-1 ring-gray-100 dark:bg-neutral-900 dark:ring-neutral-800">
                <QrCode className="h-24 w-24 text-gray-700 dark:text-gray-200" />
              </div>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                <p><span className="font-semibold">Bank:</span> BSI</p>
                <p><span className="font-semibold">No. Rekening:</span> 1234 5678 90</p>
                <p><span className="font-semibold">Atas Nama:</span> Sedekah Sampah Nururrosyad</p>
                <a
                  href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20donasi"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white shadow hover:bg-emerald-700"
                >
                  Konfirmasi via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return d;
  }
}
