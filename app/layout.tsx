import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProPlumb | 24/7 Emergency Plumbing",
  description: "High-quality professional plumbing services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-950">
      <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased`}>
        <Navbar />
        {/* pt-24 matches our taller navbar height */}
        <main className="pt-24 lg:pt-28">
          {children}
        </main>
      </body>
    </html>
  );
}