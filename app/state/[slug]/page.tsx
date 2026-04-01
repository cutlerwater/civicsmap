import Link from "next/link";
import Image from "next/image";
import StateFacts from "@/components/StateFacts";
import OfficialCard from "@/components/OfficialCard";
import { getState } from "@/lib/data";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function StatePage({ params }: Props) {
  const { slug } = await params;
  const data = getState(slug);

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
      {/* Back Link */}
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm font-medium text-blue-700 hover:text-blue-900"
        >
          ← Back to map
        </Link>
      </div>

      {/* HERO VISUALS */}
<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
  {data.facts?.flagUrl && (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
        Flag
      </p>
      <div className="relative h-24 sm:h-28 md:h-32">
        <Image
          src={data.facts.flagUrl}
          alt={`${data.name} flag`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  )}

  {data.facts?.sealUrl && (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
        Seal
      </p>
      <div className="relative h-24 sm:h-28 md:h-32">
        <Image
          src={data.facts.sealUrl}
          alt={`${data.name} seal`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  )}

  {data.facts?.mapUrl && (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
        Map
      </p>
      <div className="relative h-24 sm:h-28 md:h-32">
        <Image
          src={data.facts.mapUrl}
          alt={`${data.name} map`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  )}
</div>
      

      {/* QUICK FACTS */}
      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <QuickFact label="Capital" value={data.facts?.capital} />
        <QuickFact label="Largest City" value={data.facts?.largestCity} />
        <QuickFact label="Population" value={data.facts?.population} />
        <QuickFact label="Area" value={data.facts?.area} />
        <QuickFact label="Statehood" value={data.facts?.statehood} />
        <QuickFact label="Number of Counties" value={data.facts?.counties} />
      </section>

      {/* DETAIL CARDS */}
      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <InfoCard title="Government">
          <FactRow label="Governor" value={data.governor?.name} />
          <FactRow label="Lt. Governor" value={data.facts?.ltGovernor} />
          <FactRow label="Legislature" value={data.facts?.legislature} />
          <FactRow label="Judiciary" value={data.facts?.judiciary} />
          <FactRow label="Website" value={data.facts?.website} isLink />
        </InfoCard>

        <InfoCard title="Geography">
          <FactRow label="Capital" value={data.facts?.capital} />
          <FactRow label="Largest City" value={data.facts?.largestCity} />
          <FactRow label="Area" value={data.facts?.area} />
          <FactRow label="Number of Counties" value={data.facts?.counties} />
        </InfoCard>

        <InfoCard title="Demographics & Economy">
          <FactRow label="Population" value={data.facts?.population} />
          <FactRow label="Median Income" value={data.facts?.medianIncome} />
          <FactRow label="Income Rank" value={data.facts?.incomerank} />
        </InfoCard>

        <InfoCard title="Civics & Identity">
          <FactRow label="Nickname" value={data.facts?.nickname} />
          <FactRow label="Electoral Votes" value={data.facts?.electoral} />
          <FactRow label="Statehood" value={data.facts?.statehood} />
        </InfoCard>
      </section>

      {/* OFFICIALS */}
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
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-slate-900">
              Governor
            </h3>
            <OfficialCard official={data.governor} />
          </div>
        )}

        {data.senators?.length > 0 && (
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-slate-900">
              U.S. Senators
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {data.senators.map((senator) => (
                <OfficialCard key={senator.name} official={senator} />
              ))}
            </div>
          </div>
        )}

        {data.representatives?.length > 0 && (
          <div>
            <h3 className="mb-4 text-xl font-semibold text-slate-900">
              U.S. Representatives
            </h3>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {data.representatives.map((rep) => (
                <OfficialCard key={rep.name} official={rep} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* BOTTOM NAV */}
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