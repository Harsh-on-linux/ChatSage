'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Companions', href: '/companions' },
  { label: 'My Journey', href: '/my-journey' }
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => (
        <Link href={href} key={label}>
          <p>{label}</p>
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;

