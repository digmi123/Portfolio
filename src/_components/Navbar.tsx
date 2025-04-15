export default function Navbar() {
  return (
    <div className="py-6 sticky top-0 z-10">
      <div
        id="nav-list"
        className="uppercase text-shadow-(--shadow-glow) backdrop-blur bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,#ffffff6f,#6161614f)] flex items-center gap-4 text-background py-3 px-4 rounded-full w-fit m-auto text-xl"
      >
        <a
          id="nav-link"
          className="font-medium scale-110"
          href="#profile-section"
        >
          Profile
        </a>
        <a id="nav-link" href="#experience-section">
          Experience
        </a>
        <a id="nav-link" href="#projects-section">
          Projects
        </a>
        <p id="nav-link">Contact</p>
      </div>
    </div>
  );
}
