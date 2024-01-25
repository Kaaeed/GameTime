import PopularGames from "@/components/main-page/popular-games";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-full">
      <h1>MAIN PAGE</h1>
      <PopularGames />
    </div>
  );
}
