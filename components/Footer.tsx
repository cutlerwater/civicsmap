// components/Footer.tsx
import Link from "next/link";
import {
  
  Globe,
  Mail,
  ExternalLink,
  Music,
  User,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Cutlerwater Civics Map
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              A modern, map-based experience for exploring U.S. states,
              government officials, congressional districts, and civic
              information in a clean, accessible format.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Projects & Links
            </h4>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="https://www.cigarshopfinder.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white"
                >
                  <User className="h-4 w-4" />
                  Cigar Shop Finder
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://albums-catalog.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white"
                >
                  <Music className="h-4 w-4" />
                  Albums Catalog
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>

              <li>
                <a
                  href="https://cutlerwater-profile.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white"
                >
                  <User className="h-4 w-4" />
                  My Profile
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61583064705126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white"
                >
                  <Globe className="h-4 w-4" />
                  Facebook
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>

              <li>
                <a
                  href="mailto:cutlerwater2@live.com"
                  className="flex items-center gap-2 text-slate-400 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  Contact Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Cutlerwater Civics Map. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs text-slate-500">
            <Link href="/about" className="hover:text-slate-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-slate-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}