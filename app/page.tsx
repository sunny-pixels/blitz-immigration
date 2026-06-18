import TrustBar from "@/components/home/TrustBar";
import IndustriesRecruit from "@/components/home/IndustriesRecruit";
import CountriesWorkers from "@/components/home/CountriesWorker";
import HowItWorks from "@/components/home/HowItWorks";
import SuccessStories from "@/components/home/SuccessStories";
import FAQSection from "@/components/home/FAQSection";
import Hero from "@/components/home/Hero";
import ResourcesCareerGuides from "@/components/home/ResourcesCareerGuides";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <IndustriesRecruit />
      <CountriesWorkers />
      <HowItWorks />
      <SuccessStories />
      <FAQSection />
      <ResourcesCareerGuides />
      <FinalCTA />
    </main>
  );
}
