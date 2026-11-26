import type { Metadata } from "next";
import "./globals.css";
import Header from "./componentes-base/header/Header";
import Footer from "./componentes-base/footer/Footer";

export const metadata: Metadata = {
  title: "Portafolio UX/UI",
  description: "Portafolio de diseño UX/UI",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="page-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
