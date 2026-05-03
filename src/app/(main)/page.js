export async function generateMetadata() {
  return {
    title: "Home | Book Borrowing",
    description: "Welcome to the Online Book Borrowing Platform. Discover and borrow your next favorite book.",
  };
}

import AppPromoSection from "@/components/AppPromoSection/AppPromoSection";
import HeroSection from "@/components/Banner/Hero";
import FeaturePage from "@/components/feature/Feature";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturePage />
      <AppPromoSection />
    </>
  );
}
