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
      try {
      const res = await fetch("http://localhost:5000/api/profilePage", {
        credentials: "include", // <-- needed to send cookie
      });
      const data = await res.json();
      setUser(data.user);
    } catch (err) {
      console.error("Fetch user error:", err);
    }
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
      { href: "/auth/userPage", label: user.name || "Profile" }, 
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
