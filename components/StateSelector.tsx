"use client";

import { useRouter } from "next/navigation";
import { states } from "@/lib/states";

export default function StateSelector() {
  const router = useRouter();

  return (
    <div className="w-full max-w-sm">
      <label
        htmlFor="state-select"
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        Select a state
      </label>

      <select
        id="state-select"
        defaultValue=""
        onChange={(e) => {
          const slug = e.target.value;
          if (slug) {
            router.push(`/state/${slug}`);
          }
        }}
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>
          Choose a state
        </option>

        {states.map((state) => (
          <option key={state.slug} value={state.slug}>
            {state.name}
          </option>
        ))}
      </select>
    </div>
  );
}