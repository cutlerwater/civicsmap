"use client";

import { useRouter } from "next/navigation";

const starterStates = [
  { name: "Maryland", slug: "maryland", x: 220, y: 120 },
  { name: "Virginia", slug: "virginia", x: 180, y: 160 },
  { name: "Pennsylvania", slug: "pennsylvania", x: 180, y: 70 },
  { name: "Delaware", slug: "delaware", x: 260, y: 110 },
  { name: "New York", slug: "new-york", x: 150, y: 20 },
];

export default function USMap() {
  const router = useRouter();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <svg
        viewBox="0 0 500 300"
        className="h-auto w-full"
        role="img"
        aria-label="United States starter map"
      >
        <rect width="500" height="300" fill="#f8fafc" rx="16" />

        <text x="20" y="30" className="fill-slate-700 text-[14px] font-semibold">
          Click a state to view officials
        </text>

        {starterStates.map((state) => (
          <g
            key={state.slug}
            onClick={() => router.push(`/state/${state.slug}`)}
            className="cursor-pointer"
          >
            <rect
              x={state.x}
              y={state.y}
              width="90"
              height="40"
              rx="8"
              className="fill-slate-300 stroke-slate-500 transition hover:fill-blue-500"
            />
            <text
              x={state.x + 45}
              y={state.y + 24}
              textAnchor="middle"
              className="fill-slate-900 text-[12px] font-medium pointer-events-none"
            >
              {state.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}