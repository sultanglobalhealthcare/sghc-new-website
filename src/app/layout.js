import { Geist, Geist_Mono, Montserrat, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/landing/Navbar";
import Footer from "@/landing/Footer";
import WhatsAppButton from "@/landing/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
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
    template: '%s',
  },
  description:
    'Sultan Global Health Care (SGHC) is a United States-based medical tourism concierge connecting U.S. patients with JCI-accredited hospitals and specialist doctors in India and Türkiye. Save 60–80% on world-class medical treatment.',
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  '@id': 'https://www.sultanghc.com/#organization',
  name: 'Sultan Global Health Care',
  alternateName: 'Sultan GHC',
  description:
    'U.S.-based medical tourism concierge connecting American patients with JCI-accredited hospitals in India and Türkiye. Sultan GHC is a facilitator, not a hospital or clinic.',
  url: 'https://www.sultanghc.com',
  logo: 'https://www.sultanghc.com/sghc-new-logo.png',
  telephone: '+1-610-787-0713',
  email: 'info@sultanghc.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
    addressRegion: 'PA',
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
  founder: {
    '@type': 'Person',
    name: 'Dr. Nasar A. Sultan',
    jobTitle: 'Founder & CEO',
  },
  foundingDate: '2020',
  areaServed: 'US',
  knowsAbout: [
    'Medical tourism',
    'Healthcare facilitation',
    'India hospitals',
    'Turkey hospitals',
    'JCI accreditation',
  ],
  sameAs: [
    'https://www.instagram.com/sultanglobalhealthcare/',
    'https://www.facebook.com/sultanglobalhealthcare/',
    'https://www.linkedin.com/company/sultan-global-health-care',
  ],
  serviceType: 'Medical Tourism Facilitation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JV08B1Y8C4"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JV08B1Y8C4');`,
          }}
        />
        {/* End Google Analytics 4 */}

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
        <div className="pb-[52px] md:pb-0">
          {children}
        </div>
        <Footer/>
        <WhatsAppButton />
        <MobileCTA />
      </body>
    </html>
  );
}
