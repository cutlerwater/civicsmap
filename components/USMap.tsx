"use client";

import { useRouter } from "next/navigation";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

import { allStates } from "@/lib/data";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function USMap() {
  const router = useRouter();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => {
              const stateName = geo.properties.name;

              const state = allStates.find((s) => s.name === stateName);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    if (state) {
                      router.push(`/state/${state.slug}`);
                    }
                  }}
                  style={{
                    default: {
                      fill: state ? "#c7d2fe" : "#e5e7eb",
                      outline: "none",
                    },
                    hover: {
                      fill: state ? "#3b82f6" : "#e5e7eb",
                      outline: "none",
                      cursor: state ? "pointer" : "not-allowed",
                    },
                    pressed: {
                      fill: "#1d4ed8",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}