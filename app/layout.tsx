
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientShell from "./(components)/ClientShell";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sheekharr Starch Private Limited",
  description: "Sheekharr is a leading manufacturer of starch products for the food and beverage industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.noupe.com/embed/0198693afec9782d823f2bb04e87cae2f138.js" strategy="afterInteractive" />
      </head>
      <body
        className={`${geistSans.variable} antialiased overflow-x-hidden`}
      >
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
