import Link from "next/link";

export default function header() {
  return (
    <header>
      <ul>
        <li>
          <Link href="login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="*">
            <a>Setting</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
