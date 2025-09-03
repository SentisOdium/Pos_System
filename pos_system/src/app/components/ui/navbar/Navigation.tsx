"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../../styles/nav.css";

export default function Navigation() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/auth/register", label: "Register" },
    { href: "/auth/login", label: "Login" },
  ];

  const pathname = usePathname();

  return (
    <nav className="navbar">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`hover:underline px-2 py-1 rounded ${
              pathname === href ? "text-white font-bold" : "text-black font-bold"}`}> 
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
