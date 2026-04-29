import Image from "next/image";

type Official = {
  name: string;
  role?: string;
  party?: string;
  district?: string;
  photoUrl?: string;
  website?: string;
  phone?: string;
  office?: string;
};

type OfficialCardProps = {
  official: Official;
  featured?: boolean;
  large?: boolean;
};

export default function OfficialCard({
  official,
  featured = false,
  large = false,
}: OfficialCardProps) {
  const partyStyles =
    official.party === "Democratic" || official.party === "D"
      ? "bg-blue-500 text-blue-700 ring-blue-500"
      : official.party === "Republican" || official.party === "R"
      ? "bg-red-50 text-red-700 ring-red-200"
      : official.party === "Independent" || official.party === "I"
      ? "bg-violet-50 text-violet-700 ring-violet-200"
      : "bg-blue-200 text-slate-700 ring-blue-200";

  const partyLabel =
    official.party === "D"
      ? "Democratic"
      : official.party === "R"
      ? "Republican"
      : official.party === "I"
      ? "Independent"
      : official.party;

  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50" />
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl" />
        </div>

        <div className="relative grid gap-6 md:grid-cols-[140px_1fr] md:items-start">
          <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200 md:mx-0 md:h-36 md:w-36">
            {official.photoUrl ? (
              <Image
                src={official.photoUrl}
                alt={official.name}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-slate-500">
                {official.name?.[0]}
              </div>
            )}
          </div>

          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
              {official.role || "Governor"}
            </p>

            <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              {official.name}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {partyLabel && (
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${partyStyles}`}
                >
                  {partyLabel}
                </span>
              )}

              <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                State Executive
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {official.office && (
                <FeaturedInfoCard label="Office" value={official.office} />
              )}
              {official.phone && (
                <FeaturedInfoCard label="Phone" value={official.phone} />
              )}
            </div>

            {official.website && (
              <div className="mt-6">
                <a
                  href={official.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
                >
                  Visit official website
                </a>
              </div>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
     <div className={`flex items-start ${large ? "gap-5" : "gap-4"}`}>
        <div
          className={`relative shrink-0 overflow-hidden bg-slate-100 ring-1 ring-slate-200 ${
            large
              ? "h-28 w-28 rounded-2xl"
              : "h-24 w-24 rounded-2xl"
          }`}
        >
          {official.photoUrl ? (
            <Image
              src={official.photoUrl}
              alt={official.name}
              fill
              sizes={large ? "112px" : "96px"}
              unoptimized
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-slate-500">
              {official.name?.[0]}
            </div>
          )}
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            {official.role || "Official"}
          </p>

          <h3
            className={`mt-1 font-bold tracking-tight text-slate-900 ${
              large ? "text-2xl" : "text-xl"
            }`}
          >
            {official.name}
          </h3>

          <div className="mt-2 flex flex-wrap gap-2">
            {partyLabel && (
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${partyStyles}`}
              >
                {partyLabel}
              </span>
            )}

            {official.district && (
              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                District {official.district}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {official.office && <InfoRow label="Office" value={official.office} />}

        {official.phone && <InfoRow label="Phone" value={official.phone} />}

        {official.website && (
          <div className="border-t border-slate-100 pt-4">
            <p className="text-sm font-medium text-slate-500">Website</p>
            <a
              href={official.website}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center font-medium text-blue-700 transition hover:text-blue-900"
            >
              Visit official website
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-t border-slate-100 pt-4">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-base text-slate-900">{value}</p>
    </div>
  );
}

function FeaturedInfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-base font-semibold text-slate-900">{value}</p>
    </div>
  );
}