"use client";
import { useState } from "react";
import ProjectCard from "../experience/_components/ProjectCard";
import Project from "./Project";

const projects = [
  {
    projectName: "TASK.IT",
    technologies: ["React", "Node.js"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam excepturi, officiis cum natus cumque sunt deserunt rerum exercitationem debitis accusamus commodi nesciunt doloribus quis accusantium nam obcaecati eos. Libero, doloribus.",
    previewImage: "/add-task.gif",
  },
  {
    projectName: "SOCIAL TODO",
    technologies: ["React", "Node.js"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam excepturi, officiis cum natus cumque sunt deserunt rerum exercitationem debitis accusamus commodi nesciunt doloribus quis accusantium nam obcaecati eos. Libero, doloribus.",
    previewImage: "/social-todo.gif",
  },
  {
    projectName: "MAKEUP STORE",
    technologies: ["React", "Node.js"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam excepturi, officiis cum natus cumque sunt deserunt rerum exercitationem debitis accusamus commodi nesciunt doloribus quis accusantium nam obcaecati eos. Libero, doloribus.",
    previewImage: "/makeup-store.png",
  },
  {
    projectName: "ADIR",
    technologies: ["React", "Node.js"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam excepturi, officiis cum natus cumque sunt deserunt rerum exercitationem debitis accusamus commodi nesciunt doloribus quis accusantium nam obcaecati eos. Libero, doloribus.",
    previewImage: "/add-task.gif",
  },
];

function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  console.log(activeProjectIndex);
  return (
    <div id="projects-section" className="flex flex-col gap-4">
      {/* Project */}
      <div className="relative h-80">
        {projects.map((project, index) => (
          <div
            key={project.projectName}
            className="absolute inset-0 transition-opacity duration-500 ease-in-out"
            style={{
              opacity: activeProjectIndex === index ? 1 : 0,
            }}
          >
            <Project
              name={project.projectName}
              description={project.description}
              image={project.previewImage}
            />
          </div>
        ))}
      </div>

      {/* Thumbnails */}
      <div id="thumbnails" className="w-full flex gap-4 p-4">
        {projects.map((project, index) => (
          <ProjectCard
            index={index}
            key={project.projectName}
            projectName={project.projectName}
            technologies={project.technologies}
            description={project.description}
            setActive={setActiveProjectIndex}
            activeIndex={activeProjectIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
