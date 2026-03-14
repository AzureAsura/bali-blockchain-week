import type { Metadata, } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})


export const metadata: Metadata = {

  metadataBase: new URL("https://baliblockchainweeks.com"),

  title: {
    default: "Bali Blockchain Weeks | Southeast Asia’s Premier Web3 & Crypto Festival",
    template: "%s | Bali Blockchain Weeks"
  },
  description: "Join the most influential Web3 & Crypto event in Bali. Experience high-level networking, exclusive industry insights, and the future of blockchain technology in Southeast Asia.",
  keywords: [
    "Bali Blockchain Weeks",
    "Bali Blockchain Week",
    "Web3 Event Bali",
    "Crypto Conference 2026",
    "Blockchain Indonesia",
    "Networking Bali",
    "DeFi",
    "Crypto Festival",
    "Southeast Asia Web3"
  ],
  authors: [{ name: "Bali Blockchain Weeks Team" }],
  openGraph: {
    title: "Bali Blockchain Week | Southeast Asia’s Premier Web3 Event",
    description: "The ultimate gathering for Web3 innovators and crypto enthusiasts in the heart of Bali. Don't miss out!",
    url: "https://baliblockchainweeks.com",
    siteName: "Bali Blockchain Weeks",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bali Blockchain Weeks Event Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bali Blockchain Weeks",
    description: "Connect with industry leaders at Southeast Asia’s leading Web3 & Crypto festival.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://baliblockchainweeks.com"
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${inter.className} antialiased`}
      >
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
