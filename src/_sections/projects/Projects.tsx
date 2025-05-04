"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import Project from "./Project";

const projects = [
  {
    projectName: "TASK.IT",
    technologies: ["React", "Node.js"],
    description:
      "Developed a full-stack task management web app inspired by Trello and Jira, featuring Desks, Boards, Columns, and drag-and-drop Tasks. Implemented user authentication, organization management, and shared workspaces for collaboration. Designed a dynamic, responsive UI with efficient state management and database integration.",
    previewImage: "/add-task.gif",
  },
  {
    projectName: "SOCIAL TODO",
    technologies: ["React", "Node.js"],
    description:
      "Developed a full-stack web app for managing and sharing todos, Implemented features for posting, saving, and commenting on todos, as well as a friend system with requests and lists. Designed a dynamic, interactive user experience with efficient data handling.",
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
  return (
    <div
      id="projects-section"
      className="flex flex-col gap-4 h-full justify-between"
    >
      {/* Project */}
      <div className="relative h-80 max-md:h-screen">
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
      <div
        id="Thumbnails"
        className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-20"
      >
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
