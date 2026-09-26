import Link from "next/link";

export default function TOC() {
  return (
    <ul>
      <li>KIWAN PARK</li>
      <li>
        <Link href="/labs" id="wd-home-link">
          Home
        </Link>
      </li>
      {/* ... lab links ... */}
      <li>
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>
    </ul>
  );
}