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
    "An independent internet company creating products, businesses, media and experiments from Nigeria.",
  metadataBase: new URL("https://somehowinternet.app"),
  openGraph: {
    title: "Somehow Internet",
    description:
      "An independent internet company creating products, businesses, media and experiments from Nigeria.",
    type: "website",
    siteName: "Somehow Internet",
  },
  twitter: {
    card: "summary",
    title: "Somehow Internet",
    description:
      "An independent internet company creating products, businesses, media and experiments from Nigeria.",
    creator: "@somehowinternet",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
