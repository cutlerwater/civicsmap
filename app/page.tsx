import StateSelector from "@/components/StateSelector";
import USMap from "@/components/USMap";
import ZipLookup from "@/components/ZipLookup";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:py-16">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(250,204,21,0.10),_transparent_28%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />
        </div>

        <div className="relative grid gap-10 px-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 lg:py-14">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
              Premium Civic Directory
            </p>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
              Explore governors, senators, representatives, and districts by state.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Browse state leadership, congressional representation, and district
              information through an interactive U.S. map and state-by-state lookup
              experience.
            </p>

            <div className="mt-8 max-w-xl">
              <StateSelector />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#map-panel"
                className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Explore the Map
              </a>

              <a
                href="#zip-lookup"
                className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                ZIP Lookup
              </a>
            </div>
          </div>

          <div id="map-panel">
            <section className="rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                    United States
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Interactive Civics Map
                  </h2>
                </div>

                <div className="hidden rounded-full border border-white/10 bg-black/5 px-3 py-1 text-xs font-medium text-blue-700 md:block">
                  Select a state
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <USMap />
              </div>

              <div
                id="zip-lookup"
                className="mt-8 border-t border-white/10 pt-6"
              >
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                    Quick Search
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    Find representation by ZIP code
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <ZipLookup />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}