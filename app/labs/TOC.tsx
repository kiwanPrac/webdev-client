import Link from "next/link";

export default function TOC() {
  return (
    <ul>
      <li>Kiwan Park</li>
      <li>
        <Link href="/labs" id="wd-home-link">
          Home
        </Link>
      </li>
      {/* ... lab links ... */}
      <li>
        <Link href="/book/ch1" id="wd-toc-book-link">
          Chapter 1
        </Link>
      </li>
      <li>
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>
    </ul>
  );
}
