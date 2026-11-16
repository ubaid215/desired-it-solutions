import type { Metadata } from "next";
import { Inter, Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Web Design, App & Software Development Australia | Desired IT Solutions",
    template: "%s | Desired IT Solutions",
  },
  description:
    "Websites, apps, custom software, SEO and AI automation for Australian businesses. Fixed-price quotes, on-time delivery and real results. Book a free strategy call.",
  openGraph: {
    siteName: site.name,
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AU"
      className={`${jakarta.variable} ${inter.variable} ${instrument.variable} antialiased`}
    >
      <body className="min-h-dvh">
        <SmoothScroll />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="relative z-10 bg-paper shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
