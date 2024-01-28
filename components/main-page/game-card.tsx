import Image from "next/image";
import Link from "next/link";

import GameImage from "../../public/BG3-PC-COVER.jpg";

import classes from "./game-card.module.css";

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
    <div className="flex p-4 text-white bg-gradient-to-tr from-gray-800 to-gray-500">
      <div className="max-w-28">
        <Link href="/work-in-progress">
          <Image src={GameImage} alt="Image of a game" />
        </Link>
      </div>
      <div className="ml-4 w-full">
        <Link href="/work-in-progress">
          <h2 className="font-bold text-lg mb-2 hover:underline decoration-2 underline-offset-2">
            {name}
          </h2>
        </Link>
        <div className="grid grid-cols-2 gap-x-28 gap-y-1">
          <div>
            <span className={classes.centerText}>Main Story</span>
          </div>
          <div className={classes.timeStyle}>
            <span className={classes.centerText}>{main} Hours</span>
          </div>
          <div>
            <span className={classes.centerText}>Main + Extra</span>
          </div>
          <div className={classes.timeStyle}>
            <span className={classes.centerText}>{extra} Hours</span>
          </div>
          <div>
            <span className={classes.centerText}>Completionist</span>
          </div>
          <div className={classes.timeStyle}>
            <span className={classes.centerText}>{completionist} Hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}
