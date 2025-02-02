import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siro",
  description: "Solo siro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-8VM372KS1G"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8VM372KS1G');
            `,
          }}
        />
      </>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KWHTRSDX" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {children}
      </body>
    </html>
  );
}
