"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getState } from "@/lib/data";
import OfficialCard from "@/components/OfficialCard";
import DistrictMap from "@/components/DistrictMap";

const stateMapConfig: Record<
  string,
  { geoUrl: string; center: [number, number]; scale: number }
> = {
  maryland: {
    geoUrl: "/geo/maps/maryland-congressional-districts.geojson",
    center: [-76.7, 38.8],
    scale: 7500,
  },
  virginia: {
    geoUrl: "/geo/maps/fixedvirginia-districts.json",
    center: [-78.8, 37.7],
    scale: 6000,
  },
  "new-jersey": {
    geoUrl: "/geo/maps/nj2008.json",
    center: [-74.6, 40.1],
    scale: 8500,
  },
  "new-york": {
    geoUrl: "/geo/maps/nydistricts2008.json",
    center: [-75.4, 42.8],
    scale: 5000,
  },
};

function normalizeDistrict(value?: string) {
  if (!value) return "";

  const match = String(value).match(/\d+/);
  return match ? String(Number(match[0])) : "";
}

export default function StatePage() {
  const params = useParams();
  const slug = params.slug as string;

  const data = getState(slug);

  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const repRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const districtMapRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!selectedDistrict) return;

    const el = repRefs.current[selectedDistrict];

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }, [selectedDistrict]);

  function handleRepresentativeClick(district?: string) {
    const normalizedDistrict = normalizeDistrict(district);

    if (!normalizedDistrict) return;

    setSelectedDistrict(normalizedDistrict);

    districtMapRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  function handleDistrictSelect(district: string) {
    setSelectedDistrict(district);
  }

  if (!data) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">State not found</h1>
          <p className="mt-3 text-slate-600">
            We couldn&apos;t find that state page.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Back to map
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 md:py-12">
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm font-medium text-blue-700 hover:text-blue-900"
        >
          ← Back to map
        </Link>
      </div>

      <div className="mb-6 flex gap-3"></div>

      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:shadow-md">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-100" />
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl" />
        </div>

        <div className="relative grid gap-10 p-8 md:grid-cols-[1.4fr_1fr] md:p-12">
          <div className="transition duration-500">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
              State Profile
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              {data.name}
            </h1>

            {data.facts?.nickname && (
              <p className="mt-2 text-lg italic text-slate-600">
                “{data.facts.nickname}”
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
              {data.facts?.capital && (
                <span className="rounded-full bg-white/70 px-3 py-1 shadow-sm">
                  Capital: {data.facts.capital}
                </span>
              )}

              {data.facts?.population && (
                <span className="rounded-full bg-white/70 px-3 py-1 shadow-sm">
                  Population: {data.facts.population}
                </span>
              )}

              {data.facts?.electoral && (
                <span className="rounded-full bg-white/70 px-3 py-1 shadow-sm">
                  Electoral Votes: {data.facts.electoral}
                </span>
              )}

              {data.facts?.area && (
                <span className="rounded-full bg-white/70 px-3 py-1 shadow-sm">
                  Area: {data.facts.area}
                </span>
              )}

              {data.facts?.counties && (
                <span className="rounded-full bg-white/70 px-3 py-1 shadow-sm">
                  Number of Counties: {data.facts.counties}
                </span>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {data.facts?.website && (
                <a
                  href={data.facts.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
                >
                  Official Website
                </a>
              )}

              <Link
                href="/"
                className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
              >
                Back to Map
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {data.facts?.flagUrl && (
              <div className="group rounded-2xl border border-white/60 bg-white/70 p-5 shadow backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-xl">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Flag
                </p>
                <div className="relative h-36 overflow-hidden rounded-lg md:h-40">
                  <Image
                    src={data.facts.flagUrl}
                    alt={`${data.name} flag`}
                    fill
                    sizes="(max-width: 640px) 100vw, 120px"
                    className="object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            )}

            {data.facts?.sealUrl && (
              <div className="group rounded-2xl border border-white/60 bg-white/70 p-5 shadow backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-xl">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Seal
                </p>
                <div className="relative h-36 overflow-hidden rounded-lg md:h-40">
                  <Image
                    src={data.facts.sealUrl}
                    alt={`${data.name} seal`}
                    fill
                    sizes="(max-width: 640px) 100vw, 120px"
                    className="object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            )}

            {data.facts?.mapUrl && (
              <div className="group rounded-2xl border border-white/60 bg-white/70 p-5 shadow backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-xl">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Map
                </p>
                <div className="relative h-36 overflow-hidden rounded-lg md:h-40">
                  <Image
                    src={data.facts.mapUrl}
                    alt={`${data.name} map`}
                    fill
                    sizes="(max-width: 640px) 100vw, 120px"
                    className="object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <QuickFact label="Capital" value={data.facts?.capital} />
        <QuickFact label="Largest City" value={data.facts?.largestcity} />
        <QuickFact label="Population" value={data.facts?.population} />
        <QuickFact label="Area" value={data.facts?.area} />
        <QuickFact label="Statehood" value={data.facts?.statehood} />
        <QuickFact label="Counties" value={data.facts?.counties} />
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <InfoCard title="Government">
          <FactRow label="Governor" value={data.governor?.name} />
          <FactRow label="Lt. Governor" value={data.facts?.ltgovernor} />
          <FactRow label="Legislature" value={data.facts?.legislature} />
          <FactRow label="Judiciary" value={data.facts?.judiciary} />
          <FactRow label="Website" value={data.facts?.website} isLink />
        </InfoCard>

        <InfoCard title="Geography">
          <FactRow label="Capital" value={data.facts?.capital} />
          <FactRow label="Largest City" value={data.facts?.largestcity} />
          <FactRow label="Area" value={data.facts?.area} />
          <FactRow label="Counties" value={data.facts?.counties} />
        </InfoCard>

        <InfoCard title="Demographics & Economy">
          <FactRow label="Population" value={data.facts?.population} />
          <FactRow label="Median Income" value={data.facts?.medianincome} />
          <FactRow label="Income Rank" value={data.facts?.incomerank} />
        </InfoCard>

        <InfoCard title="Civics & Identity">
          <FactRow label="Nickname" value={data.facts?.nickname} />
          <FactRow label="Electoral Votes" value={data.facts?.electoral} />
          <FactRow label="Statehood" value={data.facts?.statehood} />
          <FactRow label="Legislature" value={data.facts?.legislature} />
        </InfoCard>
      </section>

      <section className="mt-12">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Elected Officials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            State Leadership
          </h2>
        </div>

        {data.governor && (
          <div className="mb-10">
            <h3 className="mb-4 text-xl font-semibold text-slate-900">
              Governor
            </h3>
            <OfficialCard official={data.governor} featured />
          </div>
        )}

        {data.senators?.length > 0 && (
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-slate-900">
              U.S. Senators
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {data.senators.map((senator) => (
                <OfficialCard key={senator.name} official={senator} large />
              ))}
            </div>
          </div>
        )}

        {data.representatives?.length > 0 && (
          <div>
            <h3 className="mb-4 text-xl font-semibold text-slate-900">
              U.S. Representatives
            </h3>

            <p className="mb-4 text-sm text-slate-600">
              Selected district : {selectedDistrict ?? "none"} (if you press on a box twice, you will be directed towards the congressional map automatically)
            </p>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {data.representatives.map((rep) => {
                const normalizedRepDistrict = normalizeDistrict(rep.district);
                const isSelected =
                  !!selectedDistrict &&
                  normalizedRepDistrict === selectedDistrict;

                return (
                  <div
                    key={rep.name}
                    ref={(el: HTMLDivElement | null) => {
                      if (normalizedRepDistrict) {
                        repRefs.current[normalizedRepDistrict] = el;
                      }
                    }}
                    onClick={() => handleRepresentativeClick(rep.district)}
                    className={`cursor-pointer rounded-2xl transition duration-300 ${
                      isSelected
                        ? "bg-blue-50/40 ring-2 ring-blue-500 ring-offset-2 shadow-lg"
                        : "hover:-translate-y-1 hover:shadow-md"
                    }`}
                  >
                    <OfficialCard official={rep} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {stateMapConfig[slug] && (
        <section
          ref={districtMapRef}
          className="mb-10 mt-12 scroll-mt-24"
        >
          <DistrictMap
            geoUrl={stateMapConfig[slug].geoUrl}
            title={`${slug.charAt(0).toUpperCase() + slug.slice(1)
              } Congressional Districts (Select a district on the map to find out who that Congressman/woman is)`}
            selectedDistrict={selectedDistrict}
            onDistrictSelect={handleDistrictSelect}
            center={stateMapConfig[slug].center}
            scale={stateMapConfig[slug].scale}
          />
        </section>
      )}

      <section className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-600">
          Explore more state profiles and compare leadership across the country.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Return to U.S. Map
        </Link>
      </section>
    </main>
  );
}

function QuickFact({
  label,
  value,
}: {
  label: string;
  value?: string | number;
}) {
  if (!value) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  );
}

function FactRow({
  label,
  value,
  isLink = false,
}: {
  label: string;
  value?: string | number;
  isLink?: boolean;
}) {
  if (!value) return null;

  return (
    <div className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      {isLink && typeof value === "string" ? (
        <a
          href={value}
          target="_blank"
          rel="noreferrer"
          className="mt-1 inline-block font-medium text-blue-700 hover:text-blue-900"
        >
          {value}
        </a>
      ) : (
        <p className="mt-1 text-base text-slate-900">{value}</p>
      )}
    </div>
  );
}