"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../../styles/nav.css";
import { useEffect, useState } from "react";
import { getUser } from "@/lib/getUser";

export default function Navigation() {
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() =>{
    async function fetchUser(){
      const u = await getUser();
      console.log("Fetched user:", u);
      setUser(u);
    }
    fetchUser();
  }, []);

  const links = !user ?
    [
      { href: "/", label: "Home" },
      { href: "/auth/register", label: "Register" },
      { href: "/auth/login", label: "Login" },
    ] 
   :[
      { href: "/", label: "Home" },
      { href: "/profile", label: user.name || "Profile" }, 
      { href: "/logout", label: "Logout" },
    ];

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
