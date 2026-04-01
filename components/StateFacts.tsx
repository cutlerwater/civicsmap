import { Url } from "next/dist/shared/lib/router/router";

type StateFactsProps = {
  facts?: {
    capital?: string;
    population?: string;
    area?: string;
    statehood?: string;
    flagUrl?: string;
    sealUrl?:string;
    mapUrl?:string;
    ltgovernor?: string;
    largestcity?: string;
    legislature?: string,
    judiciary?: string,
    counties?: string,
    incomerank?: string;
    medianincome?: string;
    website?: string;
    electoral?: string;
    nickname?: string;
    };
  name: string;
};

export default function StateFacts({ facts, name }: StateFactsProps) {
  if (!facts) return null;

  return (
    <section className="mb-10">
      <div className="flex items-center gap-6 mb-6">
        <h1 className="text-3xl font-bold text-slate-900">
          {name}
        </h1>
        {facts.flagUrl && (
          <img
            src={facts.flagUrl}
            alt={`${name} flag`}
            className="h-16 w-auto rounded shadow"
          />
        )}
        {facts.sealUrl && (
          <img
            src={facts.sealUrl}
            alt={`${name} seal`}
            className="h-16 w-auto rounded shadow"
          />
        )}
        {facts.mapUrl && (
          <img
            src={facts.mapUrl}
            alt={`${name} map`}
            className="h-16 w-auto rounded shadow"
          />
        )}

        
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
        {facts.ltgovernor && (
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-xs text-slate-500">Lt. Governor</p>
            <p className="font-semibold">{facts.ltgovernor}</p>
          </div>
          
        )}
        {facts.largestcity && (
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-xs text-slate-500">Largest City</p>
            <p className="font-semibold">{facts.largestcity}</p>
          </div>
          
        )}
        {facts.legislature && (
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-xs text-slate-500">Legislature</p>
            <p className="font-semibold">{facts.legislature}</p>
          </div>
          
        )}
        {facts.judiciary && (
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-xs text-slate-500">Judiciary</p>
            <p className="font-semibold">{facts.judiciary}</p>
          </div>
          
        )}
        {facts.counties && (
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-xs text-slate-500">Counties</p>
            <p className="font-semibold">{facts.counties}</p>
          </div>
          
        )}
        {facts.incomerank && (
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-xs text-slate-500">Income rank</p>
            <p className="font-semibold">{facts.incomerank}</p>
          </div>
          
        )}{facts.medianincome && (
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-xs text-slate-500">Median income</p>
            <p className="font-semibold">{facts.medianincome}</p>
          </div>
          
        )}
        {facts.website && (
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-xs text-slate-500">Website</p>
            <p className="font-semibold">{facts.website}</p>
          </div>
          
        )}
        {facts.electoral && (
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-xs text-slate-500">Electoral Votes</p>
            <p className="font-semibold">{facts.electoral}</p>
          </div>
          
        )}
        {facts.nickname && (
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-xs text-slate-500">Nickname</p>
            <p className="font-semibold">{facts.nickname}</p>
          </div>
          
        )}
        
      </div>
    </section>
  );
}