"use client";
import Link from "@/components/site-link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X, Utensils, MapPin } from "lucide-react";
import { Brand } from "./brand";
import { normalizedPath } from "@/lib/site-path";
const links = [
  { href: "/", label: "Úvod" },
  { href: "/menu", label: "Menu" },
  { href: "/nas-pribeh", label: "Náš príbeh" },
  { href: "/kontakt", label: "Kontakt" },
];
export function Header() {
  const pathname = normalizedPath(usePathname());
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key === "Tab") {
        const elements = [
          toggle.current,
          ...Array.from(
            nav.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
          ),
        ].filter(Boolean) as HTMLElement[];
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        }
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const onResize = () => {
      if (window.innerWidth > 760) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    nav.current?.querySelector("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav aria-label="Hlavná navigácia" className="desktop-nav">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/menu" className="button header-cta">
            Na čo máš chuť? <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <button
            ref={toggle}
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Zavrieť navigáciu" : "Otvoriť navigáciu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>
      {open && (
        <nav
          ref={nav}
          id="mobile-navigation"
          aria-label="Mobilná navigácia"
          className="mobile-nav"
        >
          <span className="eyebrow">VITAJ PRI NAŠOM STOLE</span>
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              <span className="nav-number">0{index + 1}</span>
              {link.label}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
          <p>Dobrá pizza. Dobrá spoločnosť.</p>
        </nav>
      )}
      <nav className="mobile-shortcuts" aria-label="Rýchle odkazy">
        <Link
          href="/menu"
          aria-current={pathname === "/menu" ? "page" : undefined}
          onClick={() => setOpen(false)}
        >
          <Utensils size={17} aria-hidden="true" /> Pozrieť menu
        </Link>
        <Link
          href="/kontakt"
          aria-current={pathname === "/kontakt" ? "page" : undefined}
          onClick={() => setOpen(false)}
        >
          <MapPin size={17} aria-hidden="true" /> Kontakt
        </Link>
      </nav>
    </>
  );
}
