import { AOSAnimate, ScrollToTop, WhatsAppButton } from "@/components/common";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { BASE_URL as url } from "@/config";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.scss";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: "#f8f8f8",
        }}
      >
        <AOSAnimate />
        <NextTopLoader color="#000000" />
        <Providers>
          <Navbar />

          <main>{children}</main>

          <Footer />
          <ScrollToTop />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "",
  description: "",
  openGraph: {
    title: "",
    description: "",
    url: url,
  },
  icons: {
    icon: "/images/logo.jpg",
  },
  keywords: [],
};
