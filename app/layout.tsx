import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from './(components)/Navbar'
import { AnimationProvider } from './(components)/AnimationContext'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden` }
      >
        <AnimationProvider>
          <Navbar />
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
