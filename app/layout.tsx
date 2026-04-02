import "./globals.css";
import Header from "@/components/Header";
import type { ReactNode } from "react";
// app/layout.tsx
import Footer from "@/components/Footer";

export const metadata = {
  title: "Civics Map | Cutlerwater Apps",
  description: "Find your governor, senators, and representatives by state.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-green-800 text-red-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}