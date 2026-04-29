"use client";

import { useRouter } from "next/navigation";
import { allStates } from "@/lib/data"; // 👈 HERE

export default function StateSelector() {
  const router = useRouter();

  return (
    <div className="w-full max-w-sm">
      

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

        {allStates.map((state) => (
          <option key={state.slug} value={state.slug}>
            {state.name}
          </option>
        ))}
      </select>
    </div>
  );
}