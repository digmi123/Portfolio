import css from "../../public/css.svg";
import javascript from "../../public/javascript.svg";
import html from "../../public/html.svg";
import react from "../../public/react.svg";
import gcp from "../../public/gcp.svg";
import nodejs from "../../public/nodejs.svg";
import nextjs from "../../public/nextjs.svg";
import vue from "../../public/vue.svg";
import postgres from "../../public/postgres.svg";

import Image from "next/image";

function SkillsTree() {
  const skills = [
    css,
    html,
    javascript,
    react,
    nodejs,
    nextjs,
    vue,
    postgres,
    gcp,
  ];

  const numberOfSkills = skills.length;
  const angleStep = (360 / numberOfSkills) * (Math.PI / 180); // Angle between each node in radians
  const radius = 150;

  return (
    <div className="w-full h-full relative">
      <div
        id="fade-colors"
        className="absolute inset-0 h-full rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 blur-[50px] animate-spin"
      ></div>

      <div
        id="black-circle"
        className="absolute inset-0 h-full bg-background rounded-full"
      ></div>

      <div
        id="body-circle"
        className="absolute top-1/2 left-1/2 p-4 border-2 border-foreground rounded-full w-40 h-40 flex items-center justify-center -translate-1/2 z-2 text-background bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#ffffff,theme('colors.background'))]"
      ></div>

      {skills.map((skill, index) => {
        const angle = angleStep * index; // Calculate angle for each skill node

        // Calculate the (x, y) position using polar-to-cartesian conversion
        const y = -radius * Math.cos(angle);
        const x = radius * Math.sin(angle);

        return (
          <div
            key={index}
            className="animate-fade"
            style={{ animationDelay: `${200 * index}ms` }}
          >
            <div
              className="w-[1px] bg-foreground bottom-1/2 left-1/2 absolute origin-bottom"
              style={{
                height: radius,
                rotate: `${angle}rad`,
              }}
            />
            <div
              key={index}
              className="outline rounded-full flex items-center absolute -translate-1/2 z-2 bg-background w-[50px] h-[50px] border-2 border-black p-2 justify-center"
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
              }}
            >
              <Image
                src={skill}
                alt="texhnology"
                width={50}
                height={50}
                className="drop-shadow-[0_0_6px_#ffffff]"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillsTree;
