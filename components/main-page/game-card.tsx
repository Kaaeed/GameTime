import Image from "next/image";
import Link from "next/link";

import GameImage from "../../public/vercel.svg";

interface GameCardProps {
  name: string;
  main: number;
  extra: number;
  completionist: number;
}

export default function GameCard({
  name,
  main,
  extra,
  completionist,
}: GameCardProps) {
  return (
    <div className="flex">
      <div className="w-40">
        <Link href="/work-in-progress">
          <Image src={GameImage} alt="Image of a game" />
        </Link>
      </div>
      <div>
        <h2>{name}</h2>
        <div className="grid">
          <div>Main Story</div>
          <div>{main}</div>
          <div>Main + Extra</div>
          <div>{extra}</div>
          <div>Completionist</div>
          <div>{completionist}</div>
        </div>
      </div>
    </div>
  );
}
