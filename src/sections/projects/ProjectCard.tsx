import Image from "next/image";
import GeneralCard from "../experience/components/GeneralCard";

interface ProjectCardProps {
  index: number;
  projectName: string;
  description: string;
  technologies: string[];
  setActive?: (index: number) => void;
  activeIndex: number;
}

function ProjectCard({
  index,
  projectName,
  description,
  technologies,
  setActive,
  activeIndex,
}: ProjectCardProps) {
  const handleClick = () => {
    if (setActive) {
      setActive(index);
    }
  };
  return (
    <GeneralCard active={activeIndex === index}>
      <div id="click-handler" className="cursor-pointer" onClick={handleClick}>
        <div id="top" className="flex items-center justify-between gap-4">
          <div id="left" className="flex flex-col gap-1">
            <h2 id="title" className="text-2xl font-bold text-foreground">
              {projectName}
            </h2>
            <div className="flex items-center gap-4">
              {technologies.map((tech, index) => {
                return (
                  <p key={`${tech}-${index}`} className="text-gray-400">
                    {tech}
                  </p>
                );
              })}
            </div>
          </div>
          <div id="right" className="">
            <Image
              src="./github.svg"
              alt="github-logo"
              width={60}
              height={60}
            />
          </div>
        </div>

        <div id="footer" className="p-2">
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </GeneralCard>
  );
}

export default ProjectCard;
