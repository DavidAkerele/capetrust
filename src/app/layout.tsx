import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://capetrust.ca"),
  title: {
    default: "Capetrust Funeral Services | A Legacy of Dignity in Lagos",
    template: "%s | Capetrust Funeral Services"
  },
  description: "Nigeria's preeminent funeral and memorial provider. We combine heritage with modern clarity to provide families in Lagos with the peace of mind they deserve.",
  keywords: ["Funeral Services Lagos", "Cemetery Nigeria", "Memorial Estates", "Cremation Services", "Grief Support Lagos"],
  authors: [{ name: "Capetrust Editorial" }],
  themeColor: "#E1EFFF",
  openGraph: {
    title: "Capetrust | Honoring Life & Legacy with Premium Care",
    description: "Nigeria's leading premium funeral and cemetery provider. Discover our tranquil sanctuaries and compassionate, professional services in Lagos.",
    url: "https://capetrust.ca",
    siteName: "Capetrust Funeral Services",
    images: [
      {
        url: "/images/hero-unsplash.jpg",
        width: 1200,
        height: 630,
        alt: "Capetrust Funeral Services - A Sanctuary of Peace",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capetrust Funeral Services | Premium Care in Lagos",
    description: "Honoring every life with dignity and modern clarity. Nigeria's leading memorial provider.",
    images: ["/images/hero-unsplash.jpg"],
    creator: "@capetrust",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">{children}</body>
    </html>
  );
}
