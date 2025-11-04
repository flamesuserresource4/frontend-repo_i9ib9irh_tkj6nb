import { useMemo } from "react";
import { Instagram, Phone, MessageCircle } from "lucide-react";

export default function Community({ instagramPosts }) {
  const latest = useMemo(() => instagramPosts.slice(0, 6), [instagramPosts]);

  return (
    <section id="community" className="bg-white py-16 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Kegiatan & Dokumentasi</h2>
          <p className="mt-1 text-gray-600 dark:text-gray-300">
            Update terbaru dari Instagram. Kunjungi akun kami untuk aktivitas lengkap.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((p, idx) => (
            <a
              key={idx}
              href={p.permalink}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-xl bg-gray-50 ring-1 ring-gray-100 transition hover:shadow-lg dark:bg-neutral-800 dark:ring-neutral-800"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={p.media_url}
                  alt={p.caption}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-0 flex w-full items-center justify-between p-4 text-white">
                  <div className="line-clamp-2 text-sm opacity-90">{p.caption}</div>
                  <Instagram className="h-5 w-5 opacity-80" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div id="contact" className="mt-14 grid gap-8 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-8 ring-1 ring-emerald-100 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900 dark:ring-neutral-800 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Kontak & Donasi</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Dukung kegiatan kami melalui donasi atau bergabung di komunitas. Hubungi kami untuk penjemputan setoran.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Sedekah%20Sampah%2C%20saya%20ingin%20donasi%20atau%20setor%20sampah."
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
              <a
                href="tel:+6281234567890"
                className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-2 text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50 dark:bg-neutral-800 dark:text-gray-200 dark:ring-neutral-700"
              >
                <Phone className="h-5 w-5" />
                0812-3456-7890
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white p-6 ring-1 ring-gray-100 dark:bg-neutral-900 dark:ring-neutral-800">
            <div className="text-center">
              <div className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">Scan untuk Donasi</div>
              <div className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">QR Code Donasi</div>
            </div>
            <img
              src={qrSrc}
              alt="QR Donasi"
              className="h-56 w-56 rounded-lg border border-gray-200 bg-white p-3 shadow-sm dark:border-neutral-800"
            />
            <p className="text-center text-xs text-gray-500 dark:text-gray-400">
              QR mengarah ke WhatsApp admin untuk konfirmasi donasi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const qrSrc =
  "https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=" +
  encodeURIComponent(
    "https://wa.me/6281234567890?text=Halo%20Sedekah%20Sampah%2C%20saya%20ingin%20donasi."
  );
