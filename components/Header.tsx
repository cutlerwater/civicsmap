import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-blue-500 bg-cyan-400">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-slate-900">
          Civics Map brought to you by Cutlerwater apps
        </Link>

        <nav className="flex gap-6 text-sm font-medium text-grey-600">
          <Link href="/" className="hover:text-blue-900">
            Home
          </Link>
          <Link href="/" className="hover:text-blue-900">
            States
          </Link>
          <Link href="/about" className="hover:text-blue-900">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}