import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

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

export const metadata = {
  title: "Tonmoy Ghosh | Faceless YouTube Growth Secrets",
  description: "Learn how Tonmoy Ghosh helps you grow faceless YouTube channels with a done-for-you service.",
  keywords: ["Tonmoy Ghosh", "YouTube growth", "faceless channels", "content creation"],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="cwjEdqTQKylyhS76nIEduQe4rIENTjg3Ii-5urEwuew"
        />
      </Head>
      {/* Google Tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-RG5GEG7YQJ"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RG5GEG7YQJ');
        `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload" // Load the script lazily
        />
        {children}
      </body>
    </html>
  );
}
