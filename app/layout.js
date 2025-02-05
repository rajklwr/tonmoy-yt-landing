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
  keywords: ["Tonmoy Ghosh", "YouTube growth", "faceless channels", "content creation", "YouTube marketing", "digital marketing"],
  author: "Tonmoy Ghosh",
  robots: "index, follow",
  "og:title": "Tonmoy Ghosh | Faceless YouTube Growth Secrets",
  "og:description": "Learn how Tonmoy Ghosh helps you grow faceless YouTube channels with a done-for-you service.",
  "og:image": "/images/tonmoy.png",
  "og:url": "https://www.yt-growthsecrets.com/",
  "og:type": "website",
  "twitter:card": "summary_large_image",
  "twitter:title": "Tonmoy Ghosh | Faceless YouTube Growth Secrets",
  "twitter:description": "Learn how Tonmoy Ghosh helps you grow faceless YouTube channels with a done-for-you service.",
  "twitter:image": "/images/tonmoy.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="cwjEdqTQKylyhS76nIEduQe4rIENTjg3Ii-5urEwuew" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata["og:title"]} />
        <meta property="og:description" content={metadata["og:description"]} />
        <meta property="og:image" content={metadata["og:image"]} />
        <meta property="og:url" content={metadata["og:url"]} />
        <meta property="og:type" content={metadata["og:type"]} />
        <meta name="twitter:card" content={metadata["twitter:card"]} />
        <meta name="twitter:title" content={metadata["twitter:title"]} />
        <meta name="twitter:description" content={metadata["twitter:description"]} />
        <meta name="twitter:image" content={metadata["twitter:image"]} />
      </Head>
      {/* Google Tag (gtag.js) */}
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-RG5GEG7YQJ" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RG5GEG7YQJ');
        `}
      </Script>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        {children}
      </body>
    </html>
  );
}
