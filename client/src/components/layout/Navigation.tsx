import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "WHO_AM_I?" },
  { href: "/projects", label: "WORKS" },
  { href: "/contact", label: "PING_ME" },
];

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-40 mix-blend-difference text-white">
      <Link href="/" className="text-2xl font-display font-bold tracking-tighter hover:text-primary transition-colors block">
        DEV.PF<span className="text-primary">_</span>
      </Link>

      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="relative group font-mono text-sm tracking-widest block">
              <span className={`group-hover:text-primary transition-colors ${location === link.href ? 'text-primary' : ''}`}>
                {link.label}
              </span>
              {location === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
