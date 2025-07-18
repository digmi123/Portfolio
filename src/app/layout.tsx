import type { Metadata } from "next";
import { Roboto, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistBebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const geistRoboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistRoboto.variable} ${geistBebas.variable} antialiased flex flex-col min-h-screen dark`}
      >
        <Navbar />
        <main className="flex flex-col px-12 pt-8 h-full max-md:px-3 max-md:py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
