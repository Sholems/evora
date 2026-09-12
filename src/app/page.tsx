import React from "react";
import { Hero } from "@/components/home/Hero";
import { RunwayMarquee } from "@/components/home/RunwayMarquee";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { NewArrivals } from "@/components/home/NewArrivals";
import { BrandStatement } from "@/components/home/BrandStatement";
import { LookbookTeaser } from "@/components/home/LookbookTeaser";
import { PrivateShoppingBanner } from "@/components/home/PrivateShoppingBanner";
import { SocialPresence } from "@/components/home/SocialPresence";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RunwayMarquee />
      <FeaturedCollections />
      <NewArrivals />
      <BrandStatement />
      <LookbookTeaser />
      <PrivateShoppingBanner />
      <SocialPresence />
      <FinalCTA />
    </>
  );
}
