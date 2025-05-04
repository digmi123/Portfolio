"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="py-6 sticky top-0 z-10">
      <div
        id="nav-list"
        // bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,#ffffff6f,#6161614f)]
        className="bg-white/70 backdrop-blur backdrop-hue-rotate-270 uppercase text-shadow-(--shadow-glow) flex items-center gap-4 text-background py-3 px-6 rounded-full w-fit m-auto text-lg"
      >
        <Link id="nav-link" className="scale-110" href="#profile-section">
          Profile
        </Link>
        <Link id="nav-link" href="#experience-section">
          Experience
        </Link>
        <Link id="nav-link" href="#projects-section">
          Projects
        </Link>
        <p id="nav-link">Contact</p>
      </div>
    </div>
  );
}
