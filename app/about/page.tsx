// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Map,
  Landmark,
  ShieldCheck,
  Users,
  Flag,
  Search,
  Info,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about this U.S. government and state information app, including its purpose, features, and how to use it.",
};

const features = [
  {
    title: "Interactive U.S. Map",
    description:
      "Browse the country visually and select a state to explore its overview, elected officials, and key facts.",
    icon: Map,
  },
  {
    title: "State Profiles",
    description:
      "Each state page includes core information such as capital, population, area, statehood, and state flag.",
    icon: Globe,
  },
  {
    title: "Government Directory",
    description:
      "View governors, U.S. senators, representatives, and other public-facing information organized by state.",
    icon: Landmark,
  },
  {
    title: "Civic Discovery",
    description:
      "The app is built to make it easier for people to understand who represents them and learn more about the states.",
    icon: Flag,
  },
];

const principles = [
  {
    title: "Simple",
    description:
      "Clear navigation and clean layouts make information easier to scan and understand.",
    icon: Search,
  },
  {
    title: "Useful",
    description:
      "The goal is to provide practical, easy-to-find public information without unnecessary clutter.",
    icon: Info,
  },
  {
    title: "Accessible",
    description:
      "A civic tool should feel approachable for students, families, voters, and anyone curious about government.",
    icon: Globe,
  },
  {
    title: "Trust-Oriented",
    description:
      "This project is intended as an informative reference experience and can evolve with improved sourcing and updates.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-8 shadow-sm sm:p-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            About This Project
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            A modern guide to the states and the people who represent them
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            This app was built to make public state and government information
            easier to explore. Whether someone is browsing the U.S. map,
            reviewing state facts, or looking up elected officials, the goal is
            to provide a clean and approachable civic reference experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-900"
            >
              Explore the Map
            </Link>

            <Link
              href="/states"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-amber-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-amber-700"
            >
              Browse States
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Mission
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Making civic information easier to understand
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-200">
            Government information is often public, but not always easy to
            browse. This project brings together state-level details and public
            officeholder information in one place, using a map-first experience
            and dedicated state pages to help users move quickly from curiosity
            to clarity.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              What You’ll Find
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Core features
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          Data and Scope
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          What this app is designed to do
        </h2>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Current focus
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              The app currently emphasizes state-level browsing, public office
              lookup, and easy-to-read reference information. It is well suited
              for quick exploration, educational use, and general civic
              awareness.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Future growth
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Over time, this project can expand to include district-level
              search, ZIP-based representative lookup, richer biographies,
              improved sourcing, and more detailed state government structures.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Design Principles
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Built to feel clean, readable, and useful
          </h2>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-900 shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-14 rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-sm">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">
            Note
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Informational, not official
          </h2>
          <p className="mt-4 leading-7 text-slate-200">
            This project is intended as an informational reference tool. While
            it may present public-facing civic and government information, it is
            not an official government website.
          </p>
        </div>
      </section>
    </main>
  );
}