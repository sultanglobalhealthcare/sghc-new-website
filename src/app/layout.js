import { Geist, Geist_Mono, Montserrat, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/landing/Navbar";
import Footer from "@/landing/Footer";
import WhatsAppButton from "@/landing/WhatsAppButton";
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Sultan GHC | U.S.-Based Medical Tourism Concierge — India & Türkiye',
    template: '%s | Sultan GHC',
  },
  description:
    'Sultan Global Health Care (SGHC) is a United States-based medical tourism concierge connecting U.S. patients with JCI-accredited hospitals and specialist doctors in India and Türkiye. Save 60–80% on world-class medical treatment.',
  keywords: [
    'medical tourism USA',
    'medical tourism India',
    'medical tourism Türkiye',
    'affordable healthcare abroad',
    'JCI accredited hospitals India',
    'Sultan GHC',
    'medical concierge United States',
    'international patient services',
    'healthcare abroad for Americans',
    'medical travel company',
  ],
  authors: [{ name: 'Sultan Global Health Care', url: 'https://www.sultanghc.com' }],
  creator: 'Sultan Global Health Care',
  metadataBase: new URL('https://www.sultanghc.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Sultan Global Health Care',
    title: 'Sultan GHC | Trusted Medical Tourism Concierge for U.S. Patients',
    description:
      'Connect with JCI-accredited hospitals and specialist doctors in India and Türkiye. Save 60–80% on treatment. Dedicated case managers. End-to-end patient support.',
    images: [
      {
        url: 'https://www.sultanghc.com/api/og?title=Sultan+GHC+%7C+Medical+Tourism+Concierge&desc=JCI-accredited+hospitals+in+India+%26+Türkiye.+Save+60-80%25+on+world-class+treatment.+Free+medical+opinion.+Dedicated+Case+Managers.',
        width: 1200,
        height: 630,
        alt: 'Sultan Global Health Care — Medical Tourism Concierge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sultan GHC | Medical Tourism Concierge — India & Türkiye',
    description:
      'JCI-accredited hospitals, 60–80% savings, and a dedicated Case Manager. The trusted medical tourism concierge for U.S. patients.',
    images: ['https://www.sultanghc.com/api/og?title=Sultan+GHC+%7C+Medical+Tourism+Concierge&desc=JCI-accredited+hospitals+in+India+%26+Türkiye.+Save+60-80%25+on+world-class+treatment.'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Sultan Global Health Care',
  alternateName: 'Sultan GHC',
  url: 'https://www.sultanghc.com',
  logo: 'https://www.sultanghc.com/sghc-new-logo.png',
  description:
    'Sultan Global Health Care (SGHC) is a United States-based medical tourism concierge connecting U.S. patients with JCI-accredited hospitals and specialist doctors in India and Türkiye.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-610-787-0713',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  ],
  sameAs: [],
  areaServed: ['US', 'IN', 'TR'],
  serviceType: 'Medical Tourism Facilitation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-56VNWLWX');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${montserrat.variable} ${outfit.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-56VNWLWX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar/>
        {children}
        <Footer/>
        <WhatsAppButton />
      </body>
    </html>
  );
}
