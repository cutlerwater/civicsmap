"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type LookupResponse = {
  zip: string;
  city: string;
  state: string;
  stateAbbr: string;
  slug: string;
};

export default function ZipLookup() {
  const router = useRouter();
  const [zip, setZip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<LookupResponse | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setResult(null);

    const cleaned = zip.trim();

    if (!/^\d{5}$/.test(cleaned)) {
      setError("Enter a valid 5-digit ZIP code.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/zip/${cleaned}`);
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Lookup failed.");
        return;
      }

      setResult(data);
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function goToState() {
    if (result?.slug) {
      router.push(`/state/${result.slug}`);
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
        ZIP Lookup
      </p>

      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
        Find your state by ZIP code
      </h2>

      <p className="mt-2 text-sm text-slate-600">
        Enter a U.S. ZIP code to jump to the matching state profile.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          inputMode="numeric"
          maxLength={5}
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
          placeholder="e.g. 21201"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:max-w-xs"
        />

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Looking up..." : "Lookup ZIP"}
        </button>
      </form>

      {error && (
        <p className="mt-4 text-sm font-medium text-red-600">{error}</p>
      )}

      {result && (
        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-600">Match found</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">
            {result.city}, {result.stateAbbr}
          </p>
          <p className="text-sm text-slate-600">
            State: {result.state} · ZIP: {result.zip}
          </p>

          <button
            type="button"
            onClick={goToState}
            className="mt-4 inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Go to {result.state}
          </button>
        </div>
      )}
    </div>
  );
}