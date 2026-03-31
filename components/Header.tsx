import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-blue-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-slate-900">
          CivicMap | Cutlerwater Apps
        </Link>

        <nav className="flex gap-6 text-sm font-medium text-green-600">
          <Link href="/" className="hover:text-blue-900">
            Home
          </Link>
          <Link href="/" className="hover:text-blue-900">
            States
          </Link>
          <Link href="/" className="hover:text-blue-900">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}