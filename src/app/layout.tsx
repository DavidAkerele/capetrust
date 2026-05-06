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
  title: "Capetrust Funeral Services | Honoring Life & Legacy in Lagos",
  description: "Nigeria's premium funeral, cremation, and cemetery provider. Based in Ikorodu, Lagos, we offer compassionate, dignified care for your loved ones.",
  openGraph: {
    title: "Capetrust Funeral Services",
    description: "Nigeria's leading premium funeral, cremation, and cemetery provider based in Lagos. We honor every life with dignity and respect.",
    url: "https://capetrust.ca",
    siteName: "Capetrust Funeral Services",
    images: [
      {
        url: "/images/jacinta-christos-pJ8WXG5C_5U-unsplash.jpg",
        width: 1200,
        height: 630,
        alt: "Capetrust Funeral Services Legacy",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capetrust Funeral Services",
    description: "Premium compassionate funeral care in Lagos, Nigeria.",
    images: ["/images/jacinta-christos-pJ8WXG5C_5U-unsplash.jpg"],
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
