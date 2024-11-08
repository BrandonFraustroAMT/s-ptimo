import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Image from "next/image";

const garamondItalic = localFont({
  src: "./fonts/EB GARAMOND/EBGaramond-Italic-VariableFont_wght.ttf",
  variable: "--font-garamond-italic",
  weight: "100 900",
})
const garamondVariable = localFont({
  src: "./fonts/EB GARAMOND/EBGaramond-VariableFont_wght.ttf",
  variable: "--font-garamond-variable",
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
const charlevoixThin = localFont({
  src: "./fonts/CHARLEVOIX PRO/CharlevoixPro-Thin.otf",
  variable: "--font-charlevoix-thin",
  weight: "100 900",
})
const charlevoixMedium = localFont({
  src: "./fonts/CHARLEVOIX PRO/CharlevoixPro-Medium.otf",
  variable: "--font-charlevoix-medium",
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
      <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        {/* Meta Pixel Code Villas Galeira */}
        <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '447590154369893');
              `,
            }}
          />
          <noscript>
            <Image  src="https://www.facebook.com/tr?id=447590154369893&noscript=1" 
              alt="" style={{ display: 'none' }} height={1} width={1}/>
          </noscript>

          {/* Meta Pixel Code Sevena */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '906596128052386');
              `,
            }}
          />
          <noscript>
            <Image  src="https://www.facebook.com/tr?id=906596128052386&noscript=1" 
              alt="" style={{ display: 'none' }} height={1} width={1}/>
          </noscript>
      </Head>
      <body className={`${garamondItalic.variable} ${charlevoixRegular.variable} ${charlevoixBold.variable} ${garamondVariable.variable} ${charlevoixThin.variable} ${charlevoixMedium.variable}`}>
        {children}
        <script
            dangerouslySetInnerHTML={{
              __html: `
                document.addEventListener('DOMContentLoaded', function() {
                  var btnWP = document.getElementById('btnWP');
                  if (btnWP) {
                    btnWP.addEventListener('click', function() {
                      fbq('track', 'Lead');
                    });
                  }
                  var btnSevena = document.getElementById('btnSevena');
                  if (btnSevena) {
                    btnSevena.addEventListener('click', function() {
                      fbq('track', 'Lead');
                    });
                  }
                });
              `,
            }}
          />
      </body>
    </html>
  );
}
