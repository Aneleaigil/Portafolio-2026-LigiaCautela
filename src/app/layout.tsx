import type { Metadata } from "next";
import { Jost, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./componentes-base/header/Header";
import Footer from "./componentes-base/footer/Footer";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ligia Cautela | Product Designer",
  description: "Portafolio de diseño de productos digitales",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${jost.variable} ${openSans.variable}`}>
      <body>
        <Header />
        <main className="page-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
