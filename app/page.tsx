import StateSelector from "@/components/StateSelector";
import USMap from "@/components/USMap";
import ZipLookup from "@/components/ZipLookup";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto max-w-7xl px-6 py-12">
      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        
        {/* LEFT SIDE */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
            State Lookup
          </p>

          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Find your representatives by selecting a state
          </h1>

          <p className="mt-5 max-w-xl text-lg text-slate-600">
            Start with a state-level view of your Governor, U.S. senators, and
            members of Congress.
          </p>

          <div className="mt-6">
            <StateSelector />
          </div>
        </div>

        {/* RIGHT SIDE (MAP + ZIP) */}
        <div>
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <USMap />

            <div className="mt-8 border-t border-slate-200 pt-6">
              <ZipLookup />
            </div>
          </section>
        </div>

      </section>
    </main>
  );
}