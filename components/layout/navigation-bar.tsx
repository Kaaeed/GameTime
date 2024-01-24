import Image from "next/image";
import Link from "next/link";

import LogoImage from "../../public/logo/logo.png";

export default function NavigationBar() {
  return (
    <header className="bg-black flex justify-center">
      <nav className="text-white flex items-center justify-between w-4/5 gap-x-4">
        <Link href="/">
          <div className="w-24">
            <Image src={LogoImage} alt="Site logo" />
          </div>
        </Link>
        <div>
          <input type="text" id="search" placeholder="Search for a game" />
        </div>
        <ul className="grow flex gap-x-4">
          <li>
            <Link href="/work-in-progress">
              <p>Forum</p>
            </Link>
          </li>
          <li>
            <Link href="/work-in-progress">
              <p>Stats</p>
            </Link>
          </li>
          <li>
            <Link href="/work-in-progress">
              <p>Submit</p>
            </Link>
          </li>
        </ul>
        <ul className="flex gap-x-4">
          <li>
            <Link href="/work-in-progress">
              <p>Sign-in</p>
            </Link>
          </li>
          <li>
            <Link href="/work-in-progress">
              <p>Sign-up</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
