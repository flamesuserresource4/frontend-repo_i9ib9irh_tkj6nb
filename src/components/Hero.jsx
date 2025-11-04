import { motion } from "framer-motion";
import { Recycle, Leaf, ArrowRight } from "lucide-react";

export default function Hero({ onDonate }) {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-green-400/20 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200">
            <Recycle className="h-4 w-4" />
            <span className="text-sm font-medium">Sedekah Sampah Nururrosyad</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Setor Sampah, Wujudkan Kebaikan
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Gerakan komunitas untuk daur ulang dan amal. Transparansi dana, laporan setoran, dan dokumentasi kegiatan dalam satu tempat.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onDonate}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-white shadow-lg transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              Donasi Sekarang
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="#reports"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-emerald-700 shadow-lg ring-1 ring-emerald-100 transition hover:bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-200 dark:ring-emerald-800/40"
            >
              <Leaf className="h-5 w-5" />
              Lihat Transparansi
            </a>
          </div>

          {/* Floating icons */}
          <div className="pointer-events-none mt-12 grid grid-cols-3 gap-6 opacity-80 sm:grid-cols-6">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-center rounded-xl bg-white/60 p-4 shadow-md backdrop-blur dark:bg-white/10"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 + i * 0.4, ease: "easeInOut" }}
              >
                <Recycle className="h-8 w-8 text-emerald-600" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
