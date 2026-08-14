import LandingPage from "../landing/page";

export const metadata = {
  title: 'Sultan GHC | Trusted Medical Tourism Concierge for U.S. Patients — India & Türkiye',
  description:
    'Sultan GHC connects U.S. patients with JCI-accredited hospitals and specialist doctors in India and Türkiye. Save 60–80% on medical treatment costs. Free medical opinion, dedicated case managers, and end-to-end patient support.',
  keywords: [
    'medical tourism USA',
    'medical tourism company United States',
    'affordable healthcare India Türkiye',
    'JCI accredited hospitals',
    'Sultan GHC',
    'healthcare concierge for Americans',
    'save on medical treatment abroad',
    'international patient coordinator',
    'free medical opinion USA',
    'medical travel from America',
  ],
  openGraph: {
    title: 'Sultan GHC | Trusted Medical Tourism Concierge for U.S. Patients',
    description:
      'Connect with JCI-accredited hospitals in India and Türkiye. Save 60–80% on world-class treatment. Free medical opinion, dedicated case managers, and full end-to-end support.',
    url: 'https://www.sultanghc.com/',
    siteName: 'Sultan Global Health Care',
    type: 'website',
    images: [
      {
        url: 'https://www.sultanghc.com/api/og?title=Trusted+Medical+Tourism+Concierge+for+U.S.+Patients&desc=JCI-accredited+hospitals+in+India+%26+Türkiye.+Save+60-80%25+on+world-class+treatment.+Free+medical+opinion.',
        width: 1200,
        height: 630,
        alt: 'Sultan GHC — Medical Tourism Concierge for U.S. Patients',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sultan GHC | Medical Tourism Concierge — India & Türkiye',
    description:
      'JCI-accredited hospitals, 60–80% savings, and a dedicated Case Manager. Trusted by U.S. patients seeking treatment in India and Türkiye.',
    images: ['https://www.sultanghc.com/api/og?title=Trusted+Medical+Tourism+Concierge+for+U.S.+Patients&desc=JCI-accredited+hospitals+in+India+%26+Türkiye.+Save+60-80%25+on+world-class+treatment.'],
  },
  alternates: {
    canonical: 'https://www.sultanghc.com/',
  },
};

export default function Home() {
  return <LandingPage />;
}


