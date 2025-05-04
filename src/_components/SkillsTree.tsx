import Image from "next/image";

interface Skill {
  name: string;
  path: string;
}

interface SkillsTreeProps {
  skillCircleSize?: number;
  innerCircleSize?: number;

  size: number;
  spin?: boolean;
  skills: Skill[];
}

function SkillsTree({
  skills,
  size,
  skillCircleSize = 50,
  innerCircleSize = 100,
  spin = false,
}: SkillsTreeProps) {
  const offset = 30;
  const numberOfSkills = skills.length;
  const angleStep = (360 / numberOfSkills) * (Math.PI / 180); // Angle between each node in radians
  const radius = size / 2 - skillCircleSize / 2 - offset; // Radius of the circle

  return (
    <div
      style={{ width: `${size}px`, height: `${size}px`, aspectRatio: 1 }}
      className={`border-animation skills relative h-full before:rounded-full before:blur-xl after:rounded-full mb-8 ${
        spin ? "animate-spin" : ""
      } duration-5000`}
    >
      <div
        id="body-circle"
        className={`absolute top-1/2 left-1/2 p-4 border-2 border-foreground rounded-full flex items-center justify-center -translate-1/2 z-2 text-background bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#ffffff,theme('colors.background'))]`}
        style={{
          width: `${innerCircleSize}px`,
          height: `${innerCircleSize}px`,
        }}
      />

      {skills.map((skill, index) => {
        const angle = angleStep * index; // Calculate angle for each skill node

        return (
          <div
            key={index}
            className="animate-fade"
            style={{ animationDelay: `${200 * index}ms` }}
          >
            <div
              id="line"
              className="w-[1px] bg-foreground bottom-1/2 left-1/2 absolute origin-bottom"
              style={{
                height: radius,
                rotate: `${angle}rad`,
              }}
            />
            <div
              key={index}
              className={`${
                spin ? "animate-spin-reverse duration-5000" : ""
              }   outline rounded-full flex items-center absolute -translate-1/2 z-2 bg-background border-2 border-black p-2 justify-center hover:scale-125 transition-transform`}
              style={{
                top: `calc(50% + ${-radius}px * cos(${angle}))`,
                left: `calc(50% + ${radius}px * sin(${angle}))`,
                width: `${skillCircleSize}px`,
                height: `${skillCircleSize}px`,
              }}
            >
              <Image
                src={skill.path}
                alt="technology"
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
