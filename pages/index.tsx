import PopularGames from "@/components/main-page/popular-games";
import SiteIntro from "@/components/site-intro/site-intro";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-full">
      <SiteIntro />
      <PopularGames />
    </div>
  );
}
