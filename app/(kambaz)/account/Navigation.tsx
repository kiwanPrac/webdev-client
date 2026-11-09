"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const pathname = usePathname();
  const { currentUser } = useAccountContext();

  const links = currentUser
    ? [{ label: "Profile", href: "/account/profile" }]
    : [
        { label: "Signin", href: "/account/signin" },
        { label: "Signup", href: "/account/signup" },
      ];

  return (
    <div
      id="wd-account-navigation"
      className="flex w-full flex-col text-lg"
    >
      {links.map((link) => {
        const active = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              active
                ? "block border-l-[3px] border-black bg-white px-3 py-2 font-semibold text-black no-underline"
                : "block border-l-[3px] border-transparent bg-transparent px-3 py-2 text-red-600 no-underline"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
