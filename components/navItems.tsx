"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => (
        <Link href={href} key={label} className={cn(pathname === href)}>
          <p className="relative before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-0.5 before:bg-current before:transition-all before:duration-300">
            {label}
          </p>
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
