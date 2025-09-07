"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../../styles/nav.css";
import { useEffect, useState } from "react";
import { fetchUser } from "@/app/auth/userPage/fetchSignedInUser";
export default function Navigation() {
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() =>{
    async function loadUser(){
      try {
        const data = await fetchUser();
        setUser(data);
      } catch (err) {
        console.error("Fetch user error:", err);
      }
    }
    loadUser();
  }, []);
  

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
      { href: "/auth/userPage", label: user.name || "Profile" },
      { href: "/rwar", label: "Admin Dashboard" },
      { href: "/teset", label: "Users" },
      { href: "/tesdfet", label: "Menu Table" },
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
