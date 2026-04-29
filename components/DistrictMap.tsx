"use client";

import React, { useState } from "react";
import type { MouseEvent } from "react";
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

type Representative = {
  name?: string;
  district?: string | number | null;
  party?: string | null;
};
type GeographiesRenderProps = {
  geographies: GeographyFeature[];
};

type Props = {
  geoUrl: string;
  title?: string;
  selectedDistrict?: string | null;
  onDistrictSelect?: (district: string) => void;
  center?: [number, number];
  scale?: number;

  representatives: Representative[];
};

const PARTY_COLORS: Record<string, string> = {
  Democratic: "#2563eb",
  Democrat: "#2563eb",
  D: "#2563eb",

  Republican: "#dc2626",
  R: "#dc2626",

  Independent: "#9333ea",
  I: "#9333ea",

  Vacant: "#6b7280",
  Vacancy: "#6b7280",
};

function getPartyColor(party?: string | null) {
  if (!party) return PARTY_COLORS.Vacant;
  return PARTY_COLORS[party] ?? "#64748b";
}

function getPartyForDistrict(
  district: string | null,
  representatives: { district?: string | number | null; party?: string | null }[]
) {
  if (!district) return "Vacant";

  const rep = representatives.find(
    (person) => normalizeDistrict(person.district) === district
  );

  return rep?.party ?? "Vacant";
}

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

function getRepresentativeForDistrict(
  district: string | null,
  representatives: {
    name?: string;
    district?: string | number | null;
    party?: string | null;
  }[]
) {
  if (!district) return null;

  return representatives.find(
    (person) => normalizeDistrict(person.district) === district
  );
}

export default function DistrictMap({
  geoUrl,
  title,
  selectedDistrict,
  onDistrictSelect,
  center,
  scale,
  representatives,
}: Props) {
  const [hoveredDistrict, setHoveredDistrict] = useState<{
    district: string;
    x: number;
    y: number;
    name?: string;
    party?: string;
  } | null>(null);

  
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

        <div className="text-sm text-slate-500">
          {hoveredDistrict
            ? `Hovering: District ${hoveredDistrict.district}`
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
              {({ geographies }: GeographiesRenderProps) =>
                geographies.map((geo) => {
                  

                  const district = getDistrictFromProperties(geo.properties);
                  const isValidDistrict = !!district && district !== "0";

                  const party = isValidDistrict
                    ? getPartyForDistrict(district, representatives)
                    : "Vacant";
                  const fill = getPartyColor(party);
                  const isSelected = selectedDistrict === district;
                  const rep = getRepresentativeForDistrict(district, representatives);

                  // 👇 then return Geography
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={(event: MouseEvent<SVGPathElement>) => {
                       

                        setHoveredDistrict({
                          district: district ?? "unknown",
                          x: event.clientX,
                          y: event.clientY,
                          name: rep?.name,
                          party: rep?.party ?? "Vacant",
                        });
                      }}
                      onMouseMove={(event: MouseEvent<SVGPathElement>) => {
                        setHoveredDistrict((current) =>
                          current
                            ? {
                              ...current,
                              x: event.clientX,
                              y: event.pageY,
                            }
                            : current
                        );
                      }}
                      onMouseLeave={() => setHoveredDistrict(null)}
                      onClick={() => {
                        if (district) onDistrictSelect?.(district);
                      }}
                      style={{
                        default: {
                          fill,
                          fillOpacity: 0.85,
                          stroke: selectedDistrict === district ? "#facc15" : "#0f172a",
                          strokeWidth: selectedDistrict === district ? 1.4 : 0.5,
                          filter:
                            selectedDistrict === district
                              ? "drop-shadow(0 0 7px rgba(250, 204, 21, 0.65))"
                              : "none",
                          animation:
                            selectedDistrict === district
                              ? "districtPulse 2.4s ease-in-out infinite"
                              : "none",
                          outline: "none",
                          cursor: district ? "pointer" : "default",
                        },
                        hover: {
                          fill,
                          fillOpacity: 0.9,
                          filter:
                            selectedDistrict === district
                              ? "drop-shadow(0 0 9px rgba(250, 204, 21, 0.8)) brightness(1.12)"
                              : "brightness(1.12)",
                          stroke: "#facc15",
                          strokeWidth: 1.2,
                          outline: "none",
                          cursor: district ? "pointer" : "default",
                        },
                        pressed: {
                          fill,
                          fillOpacity: 0.9,
                          stroke: "#facc15",
                          strokeWidth: 1.6,
                          filter: "drop-shadow(0 0 10px rgba(250, 204, 21, 0.9))",
                          outline: "none",
                          cursor: district ? "pointer" : "default",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
          {hoveredDistrict && (
            <div
              className="pointer-events-none fixed z-[9999] rounded-lg border border-white/10 bg-slate-900/95 px-3 py-2 text-xs text-green-400 shadow-xl backdrop-blur transition-opacity duration-150 opacity-100"
              style={{
                left: hoveredDistrict.x + 14,
                top: Math.max(10, hoveredDistrict.y - 190)
              }}
            >
              <p className="font-semibold">
                District {hoveredDistrict.district}
              </p>

              {hoveredDistrict.name && (
                <p className="mt-1 text-white">
                  {hoveredDistrict.name}
                </p>
              )}

              <p className="mt-1 text-[10px] uppercase tracking-wide">
                <span
                  className={
                    hoveredDistrict.party === "Democrat"
                      ? "text-blue-400"
                      : hoveredDistrict.party === "Republican"
                        ? "text-red-400"
                        : hoveredDistrict.party === "Independent"
                          ? "text-purple-400"
                          : "text-slate-400"
                  }
                >
                  {hoveredDistrict.party ?? "Unknown"}
                </span>
              </p>
            </div>
          )}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-600">
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full bg-red-600" />
            Republican
          </span>

          <span className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full bg-blue-600" />
            Democratic
          </span>

          <span className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full bg-purple-600" />
            Independent
          </span>

          <span className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full bg-gray-500" />
            Vacant
          </span>
        </div>
          </div>
        </div>
      
    
  );
}