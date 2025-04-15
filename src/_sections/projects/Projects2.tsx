import ProjectCard from "../experience/_components/ProjectCard";

function Projects2() {
  return (
    <div id="projects-section" className="py-6">
      <h1 className="text-3xl py-4">Projects</h1>

      <div
        id="grid-container"
        className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4"
      >
        <ProjectCard
          projectName="TASK.IT"
          technologies={["React", "Node.js"]}
          text="lorem"
        />
        <ProjectCard
          projectName="TASK.IT"
          technologies={["React", "Node.js"]}
          text="lorem"
        />
        <ProjectCard
          projectName="TASK.IT"
          technologies={["React", "Node.js"]}
          text="lorem"
        />
      </div>
    </div>
  );
}

export default Projects2;
