"use client";

import { useRouter } from "next/navigation";
import { allStates } from "@/lib/data";

type StateShape = {
  slug: string;
  path: string;
  labelX: number;
  labelY: number;
};

const stateShapes: StateShape[] = [
  {
    slug: "maine",
    path: "M380 20 L430 25 L445 80 L405 95 L365 65 Z",
    labelX: 407,
    labelY: 58,
  },
  {
    slug: "new-hampshire",
    path: "M356 58 L375 58 L380 100 L363 102 Z",
    labelX: 370,
    labelY: 82,
  },
  {
    slug: "vermont",
    path: "M320 58 L336 58 L340 102 L324 102 Z",
    labelX: 330,
    labelY: 82,
  },
  {
    slug: "massachusetts",
    path: "M340 104 L392 104 L398 124 L346 126 Z",
    labelX: 370,
    labelY: 118,
  },
  {
    slug: "rhode-island",
    path: "M394 112 L402 112 L404 126 L396 126 Z",
    labelX: 400,
    labelY: 123,
  },
  {
    slug: "connecticut",
    path: "M344 128 L385 128 L388 142 L347 143 Z",
    labelX: 367,
    labelY: 140,
  },
  {
    slug: "new-york",
    path: "M250 40 L340 45 L360 95 L285 105 L235 75 Z",
    labelX: 290,
    labelY: 74,
  },
  {
    slug: "new-jersey",
    path: "M355 125 L375 128 L378 175 L360 175 Z",
    labelX: 366,
    labelY: 150,
  },
  {
    slug: "pennsylvania",
    path: "M250 120 L360 120 L370 170 L270 180 L240 150 Z",
    labelX: 300,
    labelY: 150,
  },
  {
    slug: "delaware",
    path: "M380 165 L395 165 L402 210 L388 212 Z",
    labelX: 392,
    labelY: 192,
  },
  {
    slug: "maryland",
    path: "M300 180 L370 175 L385 195 L315 205 L290 193 Z",
    labelX: 334,
    labelY: 192,
  },
  {
    slug: "west-virginia",
    path: "M200 175 L255 180 L260 230 L215 235 L185 205 Z",
    labelX: 222,
    labelY: 205,
  },
  {
    slug: "virginia",
    path: "M260 210 L380 215 L395 250 L290 255 L245 230 Z",
    labelX: 318,
    labelY: 237,
  },
  {
    slug: "north-carolina",
    path: "M310 260 L430 262 L445 285 L325 292 L290 275 Z",
    labelX: 368,
    labelY: 280,
  },
  {
    slug: "south-carolina",
    path: "M360 300 L395 300 L400 345 L368 350 Z",
    labelX: 382,
    labelY: 326,
  },
  {
    slug: "georgia",
    path: "M340 345 L405 345 L410 400 L355 405 L330 372 Z",
    labelX: 372,
    labelY: 376,
  },
  {
    slug: "florida",
    path: "M390 405 L430 410 L455 450 L445 500 L420 480 L405 430 Z",
    labelX: 428,
    labelY: 452,
  },
];

export default function USMap() {
  const router = useRouter();

  const mapStates = stateShapes
    .map((shape) => {
      const state = allStates.find((s) => s.slug === shape.slug);
      if (!state) return null;

      return {
        ...shape,
        name: state.name,
        abbreviation: state.abbreviation,
      };
    })
    .filter(Boolean) as Array<
    StateShape & { name: string; abbreviation: string }
  >;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <svg
        viewBox="0 0 1000 800"
        className="h-auto w-full"
        role="img"
        aria-label="Clickable United States map"
      >
        <rect width="1000" height="700" rx="24" className="fill-slate-50" />

        <text
          x="32"
          y="22"
          className="fill-slate-700 text-[24px] font-semibold"
        >
          Select a state | Choose a state from the map or dropdown.
        </text>

        /*<text x="32" y="43" className="fill-slate-500 text-[20px]">
          Choose a state from the map or dropdown.
        </text>*/

        <g transform="translate(80,20) scale(1.45)">
          <rect
            x="20"
            y="20"
            width="520"
            height="500"
            rx="18"
            className="fill-blue-50 stroke-slate-200"
          />

          {mapStates.map((state) => (
            <g
              key={state.slug}
              onClick={() => router.push(`/state/${state.slug}`)}
              className="cursor-pointer"
            >
              <path
                d={state.path}
                className="fill-red-400 stroke-black stroke-[2] transition duration-200 hover:fill-blue-500"
              />
              <text
                x={state.labelX}
                y={state.labelY}
                textAnchor="middle"
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