import { useMemo } from "react";
import { Wallet, PieChart, BarChart3 } from "lucide-react";

export default function FinancialReport({ totals }) {
  const { collected, used } = totals;
  const remaining = Math.max(collected - used, 0);
  const pctUsed = collected > 0 ? (used / collected) * 100 : 0;

  const bars = useMemo(() => {
    return [
      { label: "Terkumpul", value: collected, color: "bg-emerald-500" },
      { label: "Digunakan", value: used, color: "bg-amber-500" },
      { label: "Sisa", value: remaining, color: "bg-sky-500" },
    ];
  }, [collected, used, remaining]);

  return (
    <section id="reports" className="bg-white py-16 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Laporan Keuangan</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-300">Ringkasan dana terkini</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-emerald-700 ring-1 ring-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-200 dark:ring-emerald-800/40">
            <Wallet className="h-5 w-5" />
            <span className="font-semibold">Rp {formatIDR(collected)}</span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Donut chart */}
          <div className="rounded-2xl bg-gradient-to-b from-white to-emerald-50 p-6 shadow-sm ring-1 ring-emerald-100 dark:from-neutral-900 dark:to-neutral-900 dark:ring-neutral-800">
            <div className="mb-6 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <PieChart className="h-5 w-5" />
              <span className="font-semibold">Komposisi Dana</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="relative mx-auto h-48 w-48">
                <div
                  className="h-full w-full rounded-full"
                  style={{
                    background: `conic-gradient(#f59e0b ${pctUsed}%, #10b981 ${pctUsed}% 100%)`,
                  }}
                />
                <div className="absolute inset-6 rounded-full bg-white dark:bg-neutral-900" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Sisa</div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">Rp {formatIDR(remaining)}</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <Legend color="#10b981" label="Terkumpul" value={`Rp ${formatIDR(collected)}`} />
                <Legend color="#f59e0b" label="Digunakan" value={`Rp ${formatIDR(used)}`} />
                <Legend color="#38bdf8" label="Sisa" value={`Rp ${formatIDR(remaining)}`} />
              </div>
            </div>
          </div>

          {/* Bar chart */}
          <div className="rounded-2xl bg-gradient-to-b from-white to-sky-50 p-6 shadow-sm ring-1 ring-sky-100 dark:from-neutral-900 dark:to-neutral-900 dark:ring-neutral-800">
            <div className="mb-6 flex items-center gap-2 text-sky-700 dark:text-sky-300">
              <BarChart3 className="h-5 w-5" />
              <span className="font-semibold">Ringkasan</span>
            </div>
            <div className="space-y-6">
              {bars.map((b) => (
                <div key={b.label}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">{b.label}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Rp {formatIDR(b.value)}</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-neutral-800">
                    <div
                      className={`h-full ${b.color}`}
                      style={{ width: `${collected > 0 ? (b.value / collected) * 100 : 0}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 dark:bg-neutral-900 dark:ring-neutral-800">
          <table className="min-w-full divide-y divide-gray-100 dark:divide-neutral-800">
            <thead className="bg-gray-50 dark:bg-neutral-900">
              <tr>
                <Th>Peruntukan</Th>
                <Th>Nominal</Th>
                <Th>Tanggal</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
              <Tr label="Pembelian kantong & alat kebersihan" amount={150000} date="2025-01-05" />
              <Tr label="Biaya operasional penjemputan" amount={275000} date="2025-01-12" />
              <Tr label="Donasi sosial dari hasil setoran" amount={350000} date="2025-01-20" />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Legend({ color, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: color }} />
      <span className="text-sm text-gray-600 dark:text-gray-300">{label}</span>
      <span className="ml-auto text-sm font-semibold text-gray-900 dark:text-white">{value}</span>
    </div>
  );
}

function Th({ children }) {
  return (
    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
      {children}
    </th>
  );
}

function Tr({ label, amount, date }) {
  return (
    <tr className="hover:bg-gray-50/60 dark:hover:bg-neutral-800/60">
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700 dark:text-gray-200">{label}</td>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">Rp {formatIDR(amount)}</td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{formatDate(date)}</td>
    </tr>
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
