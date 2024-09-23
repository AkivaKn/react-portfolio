import ProjectCard from "./ProjectCard";
import { projects } from "../assets/projects/projects.json";
export default function ProjectsList() {
  return (
    <div className="w-full" id="projects">
      <div className="w-full h-14"></div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              gitHubURL={project.gitHubURL}
              projectURL={project.projectURL}
              imageURL={project.imageURL}
            />
          );
        })}
      </ul>
    </div>
  );
}
