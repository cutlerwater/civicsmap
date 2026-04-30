import { Bill } from "@/lib/policy";

export default function BillCard({ bill }: { bill: Bill }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-xs uppercase tracking-wide text-slate-400">
                {bill.id}
            </p>

            <h3 className="mt-2 text-lg font-semibold text-white">
                {bill.title}
            </h3>

            <p className="mt-2 text-sm text-slate-300">
                Sponsored by {bill.sponsor}
            </p>

            <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span
                    className={
                        bill.party === "Democratic"
                            ? "text-blue-400"
                            : "text-red-400"
                    }
                >
                    {bill.party}
                </span>

                <span className="text-slate-400">• {bill.topic}</span>

                <span className="text-slate-400">• {bill.status}</span>
            </div>

            <p className="mt-3 text-xs text-slate-500">
                Introduced: {bill.introducedDate}
            </p>
        </div>
    );
}