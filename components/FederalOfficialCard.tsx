import Image from "next/image";

type Props = {
    official: {
        name: string;
        role: string;
        party?: string;
        image?: string;
        appointedBy?: string;
        servedsince?: string;
    };
};

export default function FederalOfficialCard({ official }: Props) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
            {official.image && (
                <div className="relative mb-5 h-50 overflow-hidden rounded-xl bg-black/30">
                    <Image
                        src={official.image}
                        alt={official.name}
                        fill
                        className="object-contain"
                    />
                </div>
            )}

            <h3 className="text-lg font-semibold text-white">
                {official.name}
            </h3>

            <p className="mt-1 text-sm text-slate-300">
                {official.role}
            </p>

            {official.party && (
                <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">
                    {official.party}
                </p>
            )}

            {official.appointedBy && (
                <p className="mt-2 text-xs text-slate-500">
                    Appointed by {official.appointedBy}
                </p>
            )}
            {official.servedsince && (
                <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">
                    {official.servedsince}
                </p>
            )}
        </div>
    );
}