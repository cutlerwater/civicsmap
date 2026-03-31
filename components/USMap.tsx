"use client";

import { useRouter } from "next/navigation";
import { states } from "@/lib/states";

type StateShape = {
  slug: string;
  path: string;
  labelX: number;
  labelY: number;
};

const stateShapes: StateShape[] = [
  {
    slug: "maryland",
    path: "M300 180 L370 175 L385 195 L315 205 L290 193 Z",
    labelX: 314,
    labelY: 192,
  },
  {
    slug: "virginia",
    path: "M260 210 L380 215 L395 250 L290 255 L245 230 Z",
    labelX: 282,
    labelY: 237,
  },
  {
    slug: "delaware",
    path: "M380 165 L395 165 L402 210 L388 212 Z",
    labelX: 382,
    labelY: 192,
  },
  {
    slug: "pennsylvania",
    path: "M250 120 L360 120 L370 170 L270 180 L240 150 Z",
    labelX: 300,
    labelY: 150,
  },
];

export default function USMap() {
  const router = useRouter();

  const mappedStates = stateShapes.map((shape) => {
    const state = states.find((s) => s.slug === shape.slug);

    return {
      ...shape,
      name: state?.name ?? shape.slug,
      abbreviation: state?.abbreviation ?? "",
    };
  });

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
          className="fill-slate-700 text-[24px] font-semibold"
        >
          Select a state
        </text>

        <text x="32" y="68" className="fill-slate-500 text-[18px]">
          Choose a state from the map or dropdown.
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

          {mappedStates.map((state) => (
            <g
              key={state.slug}
              onClick={() => router.push(`/state/${state.slug}`)}
              className="cursor-pointer"
            >
              <path
                d={state.path}
                className="fill-slate-300 stroke-slate-600 stroke-[2] transition duration-200 hover:fill-blue-500 hover:drop-shadow-md"
              />
              <text
                x={state.labelX}
                y={state.labelY}
                className="pointer-events-none fill-slate-900 text-[10px] font-medium"
              >
                {state.abbreviation}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}