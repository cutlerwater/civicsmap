type StateFactsProps = {
  facts?: {
    capital?: string;
    population?: string;
    area?: string;
    statehood?: string;
    flagUrl?: string;
  };
  name: string;
};

export default function StateFacts({ facts, name }: StateFactsProps) {
  if (!facts) return null;

  return (
    <section className="mb-10">
      <div className="flex items-center gap-6 mb-6">
        {facts.flagUrl && (
          <img
            src={facts.flagUrl}
            alt={`${name} flag`}
            className="h-16 w-auto rounded shadow"
          />
        )}

        <h1 className="text-3xl font-bold text-slate-900">
          {name}
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {facts.capital && (
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-xs text-slate-500">Capital</p>
            <p className="font-semibold">{facts.capital}</p>
          </div>
        )}

        {facts.population && (
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-xs text-slate-500">Population</p>
            <p className="font-semibold">{facts.population}</p>
          </div>
        )}

        {facts.area && (
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-xs text-slate-500">Area</p>
            <p className="font-semibold">{facts.area}</p>
          </div>
        )}

        {facts.statehood && (
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-xs text-slate-500">Statehood</p>
            <p className="font-semibold">{facts.statehood}</p>
          </div>
        )}
      </div>
    </section>
  );
}