import AboutUs from "@/components/home/about-us";
import Hero2Video from "@/components/home/hero2-video";
import HowWeDoIt from "@/components/home/HowWeDoIt";
import PartnersSection from "@/components/home/PartnersSection";
import PerformanceMatrix from "@/components/home/PerformanceMatrix";
import StatisticSection from "@/components/home/StatisticSection";
import TestimpnialsSection from "@/components/home/TestimpnialsSection";
import TopServiceCare from "@/components/home/TopServiceCare";
import "./homepage.scss";

export const metadata = {
  title: "Woman In Technology And Innovation",
  description:
    "Empowering women through technology and innovation. Discover how we support and inspire women in the tech industry.",
  keywords:
    "Women in Technology, Tech Innovation, Empowerment, Technology, Innovation",
  openGraph: {
    title: "Woman In Technology And Innovation",
    description:
      "Empowering women through technology and innovation. Discover how we support and inspire women in the tech industry.",
    url: "https://womenintechnology.africa/",
    image: "/images/logo.svg",
    site_name: "Woman In Technology And Innovation",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Womenintech_af",
    title: "Woman In Technology And Innovation",
    description:
      "Empowering women through technology and innovation. Discover how we support and inspire women in the tech industry.",
    image: "/images/logo.jpg",
  },
};
export default async function Home() {
  return (
    <>
      <Hero2Video />
      <AboutUs />
      <HowWeDoIt />
      <StatisticSection />
      <TopServiceCare />
      <PerformanceMatrix />
      <TestimpnialsSection />
      <PartnersSection />
    </>
  );
}
