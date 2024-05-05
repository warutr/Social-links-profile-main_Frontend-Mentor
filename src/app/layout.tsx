import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "social links profile main",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col w-full min-h-screen px-4 py-24 xl:px-[525px] xl:py-44 bg-neutral-off-black">
          {children}
        </main>
      </body>
    </html>
  );
}
