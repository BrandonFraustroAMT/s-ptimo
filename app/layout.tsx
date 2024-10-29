import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const garamondItalic = localFont({
  src: "./fonts/EB GARAMOND/EBGaramond-Italic-VariableFont_wght.ttf",
  variable: "--font-garamond-italic",
  weight: "100 900",
})
const charlevoixRegular = localFont({
  src: "./fonts/CHARLEVOIX PRO/CharlevoixPro-Regular.otf",
  variable: "--font-charlevoix-regular",
  weight: "100 900",
})
const charlevoixBold = localFont({
  src: "./fonts/CHARLEVOIX PRO/CharlevoixPro-Bold.otf",
  variable: "--font-charlevoix-bold",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Zeptimo Desarrollos",
  description: "Nosotros. Somos una desarrolladora inmobiliaria ubicada en Mérida, Yucatán, especializada en el desarrollo de proyectos a la carta. Nuestro enfoque se distingue ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${garamondItalic.variable} ${charlevoixRegular.variable} ${charlevoixBold.variable}`}>
        {children}
      </body>
    </html>
  );
}
