// app/contact/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageSquare, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch regarding this U.S. government and state information app.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-8 shadow-sm sm:p-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Get in touch
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Have a question, found an issue, or want to suggest an improvement?
            This project is designed to make civic information easier to explore,
            and feedback helps make it better.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Home
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Reach Out
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Contact information
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Use the contact details below for general questions, corrections,
            collaboration ideas, or feature requests.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Email</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Replace this with your real contact email
                </p>
                <a
                  href="cutlerwater2@live.com"
                  className="mt-2 inline-block text-sm font-medium text-blue-700 hover:text-blue-800"
                >
                  you@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Feedback
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Suggestions for new features, missing information, UI
                  improvements, or corrections are always helpful.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Response time
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Response times may vary depending on message volume and the
                  nature of the request.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Project scope
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  This app is focused on state and public office information and
                  is intended as an informational reference experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">
            Start Here
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            What to include in your message
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Including a little detail helps make support and updates faster and
            more accurate.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "What page or state you were viewing",
              "What information looked incorrect or incomplete",
              "Any feature request or improvement idea",
              "Screenshots or examples, if relevant",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-300" />
                <p className="text-sm leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">Helpful note</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              This is not an official government contact channel. For official
              constituent services or government assistance, users should contact
              the appropriate office directly.
            </p>
          </div>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
          >
            Learn more about the project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}