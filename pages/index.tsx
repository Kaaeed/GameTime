import FeaturedGames from "@/components/main-page/featured-games";
import News from "@/components/main-page/news";
import SiteIntro from "@/components/site-intro/site-intro";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-full">
      <SiteIntro />
      <News />
      <FeaturedGames sectionTitle="Popular Games" />
    </div>
  );
}
