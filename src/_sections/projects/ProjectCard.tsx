import Image from "next/image";
import GeneralCard from "../experience/_components/GeneralCard";

interface ProjectCardProps {
  index: number;
  projectName: string;
  description: string;
  technologies: string[];
  setActive: (index: number) => void;
  activeIndex: number;
}

function ProjectCard({
  index,
  projectName,
  description,
  technologies,
  activeIndex,
  setActive,
}: ProjectCardProps) {
  return (
    <GeneralCard active={false}>
      <div
        id="click-handler"
        className="cursor-pointer"
        onClick={() => setActive(index)}
      >
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
          <p className="text-text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            impedit omnis soluta, minus, quae reprehenderit officia dolorum vel
            laudantium ex natus vero? Accusamus eum voluptates earum quidem
            saepe recusandae possimus.
          </p>
        </div>
      </div>
    </GeneralCard>
  );
}

export default ProjectCard;
