import "./globals.css";
import Header from "@/components/Header";
import type { ReactNode } from "react";

export const metadata = {
  title: "CivicMap | Cutlerwater Apps",
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
      </body>
    </html>
  );
}