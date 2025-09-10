"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../../styles/nav.css";
import { useUser } from "@/app/auth/userPage/userContext";
export default function Navigation() {
  const pathname = usePathname();
  const { user, loading } = useUser();

  if (loading) {
    return <nav className="navbar">Loading...</nav>;
  }

   let links;

  if (!user) {
   
    links = [
      { href: "/", label: "Home" },
      { href: "/auth/register", label: "Register" },
      { href: "/auth/login", label: "Login" },
    ];
  } else if (user.role === "admin") {
  
    links = [
      { href: "/", label: "Home" },
      { href: "/rwar", label: "Admin Dashboard" },
      { href: "/userTable", label: "Users Table" },
      { href: "/menuTable", label: "Menu Table" },
      { href: "/auth/userPage", label: user.name || "Profile" },
    ];
  } else {
    
    links = [
      { href: "/", label: "Home" },
      { href: "/auth/userPage", label: user.name || "Profile" },
    ];
  }


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
