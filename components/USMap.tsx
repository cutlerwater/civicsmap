"use client";

import { useRouter } from "next/navigation";

type StateShape = {
  name: string;
  slug: string;
  path: string;
};

const states: StateShape[] = [
  {
    name: "Pennsylvania",
    slug: "pennsylvania",
    path: "M250 120 L340 120 L350 165 L260 170 Z",
  },
  {
    name: "Maryland",
    slug: "maryland",
    path: "M300 180 L370 175 L385 195 L315 205 L290 193 Z",
  },
  {
    name: "Virginia",
    slug: "virginia",
    path: "M260 210 L380 215 L395 250 L290 255 L245 230 Z",
  },
  {
    name: "Delaware",
    slug: "delaware",
    path: "M380 165 L395 165 L402 210 L388 212 Z",
  },
  {
    name: "New York",
    slug: "new-york",
    path: "M250 40 L340 45 L360 95 L285 105 L235 75 Z",
  },
  {
    name: "West Virginia",
    slug: "west-virginia",
    path: "M220 170 L280 175 L285 225 L235 230 L205 200 Z",
  },
  {
    name: "Ohio",
    slug: "ohio",
    path: "M170 120 L235 120 L245 195 L175 195 L160 155 Z",
  },
  {
    name: "North Carolina",
    slug: "north-carolina",
    path: "M310 260 L430 262 L445 285 L325 292 L290 275 Z",
  },
  {
    name: "New Jersey",
    slug: "new-jersey",
    path: "M355 125 L375 128 L378 175 L360 175 Z",
  },
];

export default function USMap() {
  const router = useRouter();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <svg
        viewBox="0 0 900 520"
        className="h-auto w-full"
        role="img"
        aria-label="Clickable United States map"
      >
        <rect width="900" height="520" rx="24" className="fill-slate-50" />

        <text
          x="32"
          y="42"
          className="fill-slate-700 text-[20px] font-semibold"
        >
          Select a state
        </text>

        <text
          x="32"
          y="68"
          className="fill-slate-500 text-[12px]"
        >
          Maryland is ready now. Other states can be added next.
        </text>

        <g transform="translate(80,40) scale(1.45)">
          <rect
            x="20"
            y="40"
            width="520"
            height="300"
            rx="18"
            className="fill-blue-50 stroke-slate-200"
          />

          {states.map((state) => (
            <g
              key={state.slug}
              onClick={() => router.push(`/state/${state.slug}`)}
              className="cursor-pointer"
            >
              <path
                d={state.path}
                className="fill-slate-300 stroke-slate-600 stroke-[2] transition duration-200 hover:fill-blue-500 hover:drop-shadow-md"
              />
            </g>
          ))}

          <text x="278" y="148" className="pointer-events-none fill-slate-900 text-[10px] font-medium">
            Pennsylvania
          </text>
          <text x="314" y="192" className="pointer-events-none fill-slate-900 text-[10px] font-medium">
            Maryland
          </text>
          <text x="282" y="237" className="pointer-events-none fill-slate-900 text-[10px] font-medium">
            Virginia
          </text>
          <text x="382" y="192" className="pointer-events-none fill-slate-900 text-[9px] font-medium">
            DE
          </text>
          <text x="273" y="74" className="pointer-events-none fill-slate-900 text-[10px] font-medium">
            New York
          </text>
          <text x="214" y="202" className="pointer-events-none fill-slate-900 text-[9px] font-medium">
            WV
          </text>
          <text x="182" y="157" className="pointer-events-none fill-slate-900 text-[10px] font-medium">
            Ohio
          </text>
          <text x="330" y="280" className="pointer-events-none fill-slate-900 text-[9px] font-medium">
            North Carolina
          </text>
          <text x="356" y="150" className="pointer-events-none fill-slate-900 text-[9px] font-medium">
            NJ
          </text>
        </g>
      </svg>
    </div>
  );
}