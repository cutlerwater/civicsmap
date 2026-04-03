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
  label?: string;
};

type GeographyFeature = {
  rsmKey: string;
  properties: DistrictProperties;
};

type Props = {
  geoUrl: string;
  title?: string;
  selectedDistrict?: string | null;
  onDistrictSelect?: (district: string) => void;
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
  return normalizeDistrict(
    properties.DISTRICT ??
      properties.district ??
      properties.CD ??
      properties.CD118FP ??
      properties.label
  );
}

export default function DistrictMap({
  geoUrl,
  title = "Congressional Districts",
  selectedDistrict,
  onDistrictSelect,
}: Props) {
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);

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
                center: [-76.7, 38.8],
                scale: 7500,
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
    geographies.map((geo) => {
      const district = getDistrictFromProperties(geo.properties);

      const isSelected =
        !!district &&
        !!selectedDistrict &&
        district === selectedDistrict;

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
                        outline: "none",
                        stroke: "#ffffff",
                        strokeWidth: 0.75,
                        cursor: district ? "pointer" : "default",
                        },
                        hover: {
                        fill: isSelected ? "#2563eb" : "#93c5fd",
                        outline: "none",
                        stroke: "#ffffff",
                        strokeWidth: 0.75,
                        cursor: district ? "pointer" : "default",
                        },
                        pressed: {
                        fill: "#1d4ed8",
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