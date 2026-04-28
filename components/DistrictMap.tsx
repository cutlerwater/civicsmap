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
              fillOpacity: 0.75,
              outline: "none",
              stroke: "#ffffff",
              strokeWidth: 0.75,
              cursor: district ? "pointer" : "default",
            },
            hover: {
              fill: isSelected ? "#ff1100" : "#116633",
              fillOpacity: 0.75,
              outline: "none",
              stroke: "#ffffff",
              strokeWidth: 0.75,
              cursor: district ? "pointer" : "default",
            },
            pressed: {
              fill: "#ff1100",
              fillOpacity: 0.75,
              outline: "none",
              stroke: "#ffffff",
              strokeWidth: 0.75,
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