import { AOSAnimate, ScrollToTop } from "@/components/common";
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
          {/* <WhatsAppButton /> */}
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Woman In Technology And Innovation",
  description:
    "Empowering women through technology and innovation. Discover how we support and inspire women in the tech industry.",
  openGraph: {
    title: "Woman In Technology And Innovation",
    description:
      "Empowering women through technology and innovation. Discover how we support and inspire women in the tech industry.",
    url: url,
    images: [
      {
        url: `${url}/images/logo_blue.svg`,
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Woman In Technology And Innovation",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Womenintech_af",
    title: "Woman In Technology And Innovation",
    description:
      "Empowering women through technology and innovation. Discover how we support and inspire women in the tech industry.",
    images: `${url}/images/logo_blue.svg`,
  },
  icons: {
    icon: "/images/logo_blue.svg",
  },
  keywords: [
    "Women in Technology",
    "Tech Innovation",
    "Empowerment",
    "Technology",
    "Innovation",
  ],
};
