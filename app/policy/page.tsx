"use client";

import { useState } from "react";
import { bills } from "@/lib/policy";
import BillCard from "@/components/BillCard";

export default function PolicyPage() {
    const [query, setQuery] = useState("");

    const filtered = bills.filter((bill) =>
        bill.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <main className="mx-auto max-w-7xl px-6 py-10">
            <h1 className="text-4xl font-bold text-white">
                Policy Explorer
            </h1>

            <p className="mt-2 text-slate-400">
                Explore recent legislation, sponsors, and policy areas.
            </p>

            {/* Search */}
            <div className="mt-6 max-w-md">
                <input
                    type="text"
                    placeholder="Search bills..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white backdrop-blur focus:border-sky-400 focus:outline-none"
                />
            </div>

            {/* Grid */}
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filtered.map((bill) => (
                    <BillCard key={bill.id} bill={bill} />
                ))}
            </div>
        </main>
    );
}