import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boomerhub Task",
  description: "Boomershub task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-4xl m-auto">
          <NavBar />
          <div className="mt-8">
            {children}
          </div>
        </main>
        
      </body>
    </html>
  );
}
