import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Discover Our Products - mettä muse | Handcrafted Artisan Products",
  description: "Explore our curated collection of handcrafted products at mettä muse. Discover unique artisan-made items including clothing, accessories, and home goods. Sign in to view pricing.",
  keywords: "handcrafted products, artisan goods, mettä muse, unique products, handmade items, boutique products",
  openGraph: {
    title: "Discover Our Products - mettä muse",
    description: "Explore our curated collection of handcrafted products at mettä muse",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover Our Products - mettä muse",
    description: "Explore our curated collection of handcrafted products",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://mettamuse.com/products" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
