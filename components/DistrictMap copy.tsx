"use client";

import React, { useState } from "react";
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
  CD119?: string;
  BASENAME?: string;
  label?: string;
  [key: string]: string | number | null | undefined;
};

type GeographyFeature = {
  rsmKey: string;
  properties: DistrictProperties;
  geometry?: {
    type?: string;
  };
};

type Props = {
  geoUrl: string;
  title?: string;
  selectedDistrict?: string | null;
  onDistrictSelect?: (district: string) => void;
  center?: [number, number];
  scale?: number;
};

const PARTY_COLORS: Record<string, string> = {
  Democratic: "#2563eb",
  Democrat: "#2563eb",
  Republican: "#dc2626",
  Independent: "#9333ea",
  Vacancy: "#737373",
  Vacant: "#737373",
};

function normalizeDistrict(
  value: string | number | null | undefined
): string | null {
  if (value === null || value === undefined) return null;

  const str = String(value).trim();
  if (!str) return null;

  const digits = str.match(/\d+/)?.[0];
  if (!digits) return null;

  return String(Number(digits));
}

function getDistrictFromProperties(
  properties: DistrictProperties
): string | null {
  const cdField = Object.keys(properties).find((key) =>
    /^CD\d+/.test(key)
  );

  return normalizeDistrict(
    properties.DISTRICT ??
    properties.district ??
    properties.CD ??
    properties.CD119 ??
    properties.CD118FP ??
    (cdField ? properties[cdField] : undefined) ??
    properties.BASENAME ??
    properties.label
  );
}

export default function DistrictMap({
  geoUrl,
  title = "Congressional Districts",
  selectedDistrict,
  onDistrictSelect,
  center = [-98, 39],
  scale = 900,
}: Props) {
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
  const normalizedSelectedDistrict = normalizeDistrict(selectedDistrict);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

        <div className="text-sm text-slate-500">
          {hoveredDistrict
            ? `Hovering: District ${hoveredDistrict}`
            : selectedDistrict
              ? `Selected: District ${selectedDistrict}`
              : "Select a district"}
        </div>
      </div>

      <div className="overflow-hidden rounded-xl bg-slate-50">
        <div className="mx-auto max-w-3xl">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              center,
              scale,
            }}
            width={800}
            height={500}
            className="h-auto w-full"
          >
            <Geographies geography={geoUrl}>
  {({
    geographies,
  }: {
    geographies: GeographyFeature[];
  }) =>
                geographies
                  .slice()
                  .sort((a, b) => {
                    const da = getDistrictFromProperties(a.properties);
                    const db = getDistrictFromProperties(b.properties);

                    if (da === normalizedSelectedDistrict) return 1;
                    if (db === normalizedSelectedDistrict) return -1;
                    return 0;
                  })
                  .map((geo, index) => {
                  const district = getDistrictFromProperties(geo.properties);
                  

                  

                  const isSelected =
                    !!district &&
                    !!normalizedSelectedDistrict &&
                    district === normalizedSelectedDistrict;

      const isHovered =
        !!district &&
        !!hoveredDistrict &&
        district === hoveredDistrict;

      const fill = isSelected
        ? "#2563eb"
        : isHovered
          ? "#93c5fd"
          : "#cbd5e1";

      return (
                    <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    role={district ? "button" : undefined}
                    tabIndex={district ? 0 : -1}
                    aria-label={
                        district ? `Congressional District ${district}` : undefined
                    }
                    onMouseEnter={() => {
                        if (district) setHoveredDistrict(district);
                    }}
                    onMouseLeave={() => {
                        setHoveredDistrict(null);
                    }}
                    onFocus={() => {
                        if (district) setHoveredDistrict(district);
                    }}
                    onBlur={() => {
                        setHoveredDistrict(null);
                    }}
                    onClick={() => {
                        if (district) onDistrictSelect?.(district);
                    }}
                    onKeyDown={(event: React.KeyboardEvent<SVGPathElement>) => {
                        if (!district) return;

                        if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        onDistrictSelect?.(district);
                        }
                    }}
          style={{
            default: {
              fill,
              fillOpacity: 0.85,
              outline: "none",
              stroke: isSelected ? "#facc15" : "#0f172a",
              strokeWidth: isSelected ? 1.4 : 0.5,
              filter: isSelected
                ? "drop-shadow(0 0 6px rgba(250, 204, 21, 0.6))"
                : "none",
              cursor: district ? "pointer" : "default",
            },
            hover: {
              fill,
              filter: isSelected
                ? "drop-shadow(0 0 8px rgba(250, 204, 21, 0.8)) brightness(1.15)"
                : "brightness(1.15)",
              outline: "none",
              stroke: "#facc15",
              strokeWidth: 1.2,
              cursor: district ? "pointer" : "default",
            },
            pressed: {
              fill,
              outline: "none",
              stroke: "#facc15",
              strokeWidth: 1.6,
              filter: "drop-shadow(0 0 10px rgba(250, 204, 21, 0.9))",
              cursor: district ? "pointer" : "default",
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
    </div>
  );
}