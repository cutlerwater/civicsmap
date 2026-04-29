import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/CutlerwaterCivicsMapLogo.png"
            alt="Cutlerwater Civics Map"
            width={200}
            height={62}
            priority
            className="h-auto w-[180px] md:w-[220px]"
          />
        </Link>

        {/* CENTER: Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <Link href="/federal" className="hover:text-sky-300">
            Federal
          </Link>
          <Link href="/" className="transition hover:text-white">
            States
          </Link>
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
        </nav>

        {/* RIGHT: CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Explore
          </Link>
        </div>
      </div>

      {/* subtle glow line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
    </header>
  );
}