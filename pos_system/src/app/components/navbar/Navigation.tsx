"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./nav.css";

export default function Navigation(){
    const links = [
        {href: "/", label: "Accounts"},
        {href: "/Login/Register", label: "Register"},
    ]

    const pathname = usePathname();

    return(     
            <nav className="navbar">
                {links.map(({href, label}) =>(
                    <Link 
                    key={href}
                    href={href}
                    className={`${pathname}`}>
                        {label}
                    </Link>
                ))}
            </nav>
    )
}