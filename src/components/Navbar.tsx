"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="py-6 sticky top-5 z-10">
      {/* Desktop Navbar */}
      <div className="hidden md:flex bg-white/70 backdrop-blur backdrop-hue-rotate-270 uppercase text-shadow-(--shadow-glow) items-center gap-4 text-background py-3 px-6 rounded-full w-fit m-auto text-lg">
        <Link className="scale-110" href="#profile-section">
          Profile
        </Link>
        <Link href="#experience-section">Experience</Link>
        <Link href="#projects-section">Projects</Link>
        <Link href="#contact-section">Contact</Link>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex flex-col items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-white/70 backdrop-blur backdrop-hue-rotate-270 text-background px-4 py-2 rounded-full text-lg uppercase shadow-md"
        >
          ☰ Menu
        </button>

        {menuOpen && (
          <div className="mt-2 flex flex-col items-center gap-2 bg-white/70 backdrop-blur backdrop-hue-rotate-270 text-background px-6 py-4 rounded-xl text-base uppercase w-[90%] max-w-xs shadow-lg transition-all duration-300">
            <Link href="#profile-section" onClick={() => setMenuOpen(false)}>
              Profile
            </Link>
            <Link href="#experience-section" onClick={() => setMenuOpen(false)}>
              Experience
            </Link>
            <Link href="#projects-section" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
            <Link href="#contact-section" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
