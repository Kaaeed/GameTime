import Link from "next/link";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className="bg-neutral-700 text-white flex justify-center h-40">
      <div className="flex items-center justify-around w-4/5">
        <div>
          <h2 className={classes.title}>Social</h2>
          <ul className={classes.link}>
            <li>
              <Link href="https://discord.com/">
                <p>Discord</p>
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/">
                <p>Facebook</p>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/">
                <p>Twitter</p>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className={classes.title}>Information</h2>
          <ul className={classes.link}>
            <li>
              <Link href="/work-in-progress">
                <p>Contact Us</p>
              </Link>
            </li>
            <li>
              <Link href="/work-in-progress">
                <p>Code of Conduct</p>
              </Link>
            </li>
            <li>
              <Link href="/work-in-progress">
                <p>Privacy Policy</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
