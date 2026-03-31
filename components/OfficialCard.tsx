import { Official } from "@/lib/types";

type Props = {
  official: Official;
};

export default function OfficialCard({ official }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-start gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 text-lg font-bold text-slate-700">
          {official.name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {official.name}
          </h3>
          <p className="text-sm text-slate-600">{official.title}</p>
          {official.party && (
            <p className="mt-1 text-sm text-slate-500">{official.party}</p>
          )}
          {official.district && (
            <p className="text-sm text-slate-500">{official.district}</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {official.website && (
          <a
            href={official.website}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
          >
            Website
          </a>
        )}

        {official.contactUrl && (
          <a
            href={official.contactUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Contact
          </a>
        )}
      </div>
    </div>
  );
}