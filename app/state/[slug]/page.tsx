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
    <main className="min-h-screen mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        State not available yet
      </h1>
      <p className="mt-4 text-slate-600">
        We're still adding data for this state.
      </p>
    </main>
  );
}

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          State Overview
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          {data.name}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          View the Governor, U.S. senators, and U.S. representatives for{" "}
          {data.name}.
        </p>
      </div>

      {data.governor && (
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            Governor
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <OfficialCard official={data.governor} />
          </div>
        </section>
      )}

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-slate-900">
          U.S. Senators
        </h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.senators.map((official) => (
            <OfficialCard key={official.id} official={official} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-slate-900">
          U.S. House Members
        </h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.representatives.map((official) => (
            <OfficialCard key={official.id} official={official} />
          ))}
        </div>
      </section>
    </main>
  );
}