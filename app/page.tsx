import AboutUs from "@/components/home/about-us";
import Hero2Video from "@/components/home/hero2-video";
import HowWeDoIt from "@/components/home/HowWeDoIt";
import PartnersSection from "@/components/home/PartnersSection";
import PerformanceMatrix from "@/components/home/PerformanceMatrix";
import StatisticSection from "@/components/home/StatisticSection";
import TestimpnialsSection from "@/components/home/TestimpnialsSection";
import TopServiceCare from "@/components/home/TopServiceCare";
import "./homepage.scss";

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
