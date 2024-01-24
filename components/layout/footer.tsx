import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <h2>Social</h2>
          <ul>
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
          <h2>Information</h2>
          <ul>
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
