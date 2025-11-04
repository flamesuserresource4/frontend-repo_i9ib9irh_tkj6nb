import { useMemo } from "react";
import { Recycle } from "lucide-react";

export default function Deposits({ deposits }) {
  const totalWeight = useMemo(() => deposits.reduce((sum, d) => sum + d.weightKg, 0), [deposits]);
  const totalValue = useMemo(() => deposits.reduce((sum, d) => sum + d.value, 0), [deposits]);

  return (
    <section id="deposits" className="bg-gradient-to-b from-white to-emerald-50 py-16 dark:from-neutral-900 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Setoran Sampah</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-300">Rekap setoran terbaru anggota</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-emerald-700 shadow ring-1 ring-emerald-100 dark:bg-neutral-900 dark:text-emerald-200 dark:ring-neutral-800">
            <Recycle className="h-5 w-5" />
            <span className="text-sm">Total: {totalWeight.toFixed(1)} kg • Rp {formatIDR(totalValue)}</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deposits.map((d, idx) => (
            <article key={idx} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md dark:bg-neutral-900 dark:ring-neutral-800">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">{d.name}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{formatDate(d.date)}</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-200 dark:ring-emerald-800/40">
                  {d.category}
                </span>
              </div>
              <dl className="mt-4 grid grid-cols-3 gap-3 text-center">
                <Stat label="Berat" value={`${d.weightKg.toFixed(1)} kg`} />
                <Stat label="Harga/Kg" value={`Rp ${formatIDR(d.pricePerKg)}`} />
                <Stat label="Nilai" value={`Rp ${formatIDR(d.value)}`} />
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg bg-gray-50 p-3 dark:bg-neutral-800">
      <dt className="text-xs text-gray-500 dark:text-gray-400">{label}</dt>
      <dd className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">{value}</dd>
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
