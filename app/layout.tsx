import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Somehow Internet",
  description:
    "An independent internet product company building open-source products for the onchain economy.",
  metadataBase: new URL("https://somehowinternet.com"),
  openGraph: {
    title: "Somehow Internet",
    description: "Building open-source products for the onchain economy.",
    type: "website",
    siteName: "Somehow Internet",
  },
  twitter: {
    card: "summary",
    title: "Somehow Internet",
    description: "Building open-source products for the onchain economy.",
    creator: "@danbuildss",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
