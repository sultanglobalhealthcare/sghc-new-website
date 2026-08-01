import { Geist, Geist_Mono, Montserrat, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/landing/Navbar";
import Footer from "@/landing/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "SGHC",
  description: "Sultan Global Healthcare, a healthcare tourism company.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${outfit.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
