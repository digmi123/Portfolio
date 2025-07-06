"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import Project from "./Project";
import Carousel from "@/components/Carousel";

const projects = [
  {
    projectName: "TASK.IT",
    technologies: ["React", "Node.js"],
    description:
      "Developed a full-stack task management web app inspired by Trello and Jira, featuring Desks, Boards, Columns, and drag-and-drop Tasks. Implemented user authentication, organization management, and shared workspaces for collaboration. Designed a dynamic, responsive UI with efficient state management and database integration.",
    cardDescription:
      "A full-stack task management app with Desks, Boards, Columns, and drag-and-drop Tasks. Includes user auth, team workspaces, and a responsive UI with real-time state sync.",
    previewImage: "/add-task.gif",
    repoLink: "https://github.com/digmi123/TASK.IT",
  },
  {
    projectName: "SOCIAL TODO",
    technologies: ["React", "Node.js"],
    description:
      "Developed a full-stack web app for managing and sharing todos, Implemented features for posting, saving, and commenting on todos, as well as a friend system with requests and lists. Designed a dynamic, interactive user experience with efficient data handling.",
    cardDescription:
      "A full-stack app for managing and sharing todos with friends. Features posting, saving, commenting, and friend requests—all in a responsive, interactive UI.",
    previewImage: "/add-task.gif",
    repoLink: "https://github.com/digmi123/Social-Todo-App",
  },
  {
    projectName: "MAKEUP STORE",
    technologies: ["React", "Node.js"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam excepturi, officiis cum natus cumque sunt deserunt rerum exercitationem debitis accusamus commodi nesciunt doloribus quis accusantium nam obcaecati eos. Libero, doloribus.",
    cardDescription:
      "A full-stack task management app with Desks, Boards, Columns, and drag-and-drop Tasks. Includes user auth, team workspaces, and a responsive UI with real-time state sync.",
    previewImage: "/add-task.gif",
    repoLink: "https://github.com/digmi123/Makeup-store",
  },
  {
    projectName: "PLACEHOLDER",
    technologies: ["React", "Node.js"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam excepturi, officiis cum natus cumque sunt deserunt rerum exercitationem debitis accusamus commodi nesciunt doloribus quis accusantium nam obcaecati eos. Libero, doloribus.",
    cardDescription:
      "A full-stack task management app with Desks, Boards, Columns, and drag-and-drop Tasks. Includes user auth, team workspaces, and a responsive UI with real-time state sync.",
    previewImage: "/add-task.gif",
    repoLink: "",
  },
];

function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  return (
    <div
      id="projects-section"
      className="flex flex-col gap-8 flex-1 justify-between"
    >
      <Carousel
        activeIndex={activeProjectIndex}
        setActiveIndex={setActiveProjectIndex}
      >
        {projects.map((project) => (
          <Project
            key={project.projectName}
            name={project.projectName}
            description={project.description}
            image={project.previewImage}
            link={project.repoLink}
          />
        ))}
      </Carousel>

      {/* Thumbnails */}
      <div
        id="Thumbnails"
        className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-20 max-lg:hidden"
      >
        {projects.map((project, index) => (
          <ProjectCard
            index={index}
            key={project.projectName}
            projectName={project.projectName}
            technologies={project.technologies}
            description={project.cardDescription}
            setActive={setActiveProjectIndex}
            activeIndex={activeProjectIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
