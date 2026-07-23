"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

const MenuIcon = ({ open }) => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    {open ? (
      <>
        <path d="M4 4L16 16" stroke="currentColor" strokeWidth="1.7" />
        <path d="M16 4L4 16" stroke="currentColor" strokeWidth="1.7" />
      </>
    ) : (
      <>
        <path d="M3 6H17" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3 14H17" stroke="currentColor" strokeWidth="1.7" />
      </>
    )}
  </svg>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="nav-wrap">
      <nav className="site-shell nav-inner" aria-label="Primary navigation">
        <Link className="brand" href="#main-content" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            AM
          </span>
          <span>Adam Matthews</span>
        </Link>

        <button
          className="nav-menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-links"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((current) => !current)}
        >
          <MenuIcon open={open} />
        </button>

        <ul id="primary-links" className={`nav-links${open ? " open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link className="nav-link" href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              className="button button-dark nav-cta"
              href="#contact"
              onClick={closeMenu}
            >
              Let&apos;s talk
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
