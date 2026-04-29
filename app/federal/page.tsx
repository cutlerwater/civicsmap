import { federalData } from "@/lib/federal";
import FederalOfficialCard from "@/components/FederalOfficialCard";

export default function FederalPage() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-10">
            <h1 className="text-4xl font-bold text-white">
                United States Federal Government
            </h1>

            {/* Executive */}
            <section className="mt-10">
                <h2 className="text-2xl font-semibold text-sky-300">
                    Executive Branch
                </h2>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {federalData.executive.map((official) => (
                        <FederalOfficialCard
                            key={official.name}
                            official={official}
                        />
                    ))}
                </div>

                <h3 className="mt-8 text-xl font-semibold text-white">
                    Cabinet
                </h3>

                <div className="mt-4 grid gap-6 md:grid-cols-3">
                    {federalData.cabinet.map((official) => (
                        <FederalOfficialCard
                            key={official.name}
                            official={official}
                        />
                    ))}
                </div>
            </section>

            {/* Supreme Court */}
            <section className="mt-12">
                <h2 className="text-2xl font-semibold text-sky-300">
                    Supreme Court
                </h2>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                    {federalData.supremeCourt.map((official) => (
                        <FederalOfficialCard
                            key={official.name}
                            official={official}
                        />
                    ))}
                </div>
            </section>

            {/* Congress */}
            <section className="mt-12">
                <h2 className="text-2xl font-semibold text-sky-300">
                    Congressional Leadership
                </h2>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                    {federalData.congress.map((official) => (
                        <FederalOfficialCard
                            key={official.name}
                            official={official}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}