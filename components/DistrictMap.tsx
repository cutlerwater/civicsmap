"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

type DistrictProperties = {
  DISTRICT?: string;
  district?: string;
  CD?: string;
  CD118FP?: string;
  label?: string;
};

type Props = {
  geoUrl: string;
  title?: string;
  onDistrictSelect?: (district: string) => void;
};

export default function DistrictMap({
  geoUrl,
  title = "Congressional Districts",
  onDistrictSelect,
}: Props) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            District Map
          </p>
          <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            {title}
          </h3>
        </div>

        <div className="rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-600 ring-1 ring-slate-200">
          {hovered ?? "Hover over a district"}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 8500,
            center: [-77.45, 38.95],
          }}
          width={900}
          height={600}
          className="h-auto w-full"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo: any) => {
                const props = geo.properties as DistrictProperties;

                const rawDistrict =
                    props.DISTRICT ??
                    props.district ??
                    props.CD ??
                    props.CD118FP ??
                    "";

                    const districtNumberMatch = String(rawDistrict).match(/\d+/);
                    const districtNumber = districtNumberMatch
                    ? String(Number(districtNumberMatch[0]))
                    : "";

                const label =
                  props.label ||
                  (districtNumber ? `District ${districtNumber}` : "District");

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className="cursor-pointer"
                    onMouseEnter={() => setHovered(label)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => {
                      console.log("clicked district raw:", rawDistrict);
                      console.log("clicked district normalized:", districtNumber);
                      console.log("geo props:", props);

                      if (districtNumber && onDistrictSelect) {
                        onDistrictSelect(districtNumber);
                      }
                    }}
                    style={{
                      default: {
                        fill: "#dbeafe",
                        stroke: "#1e3a8a",
                        strokeWidth: 1,
                        outline: "none",
                      },
                      hover: {
                        fill: "#cc0000",
                        stroke: "#1e3a8a",
                        strokeWidth: 1.5,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#ff0000",
                        stroke: "#1e3a8a",
                        strokeWidth: 1.5,
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
    </div>
  );
}