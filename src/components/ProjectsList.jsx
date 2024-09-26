import ProjectCard from "./ProjectCard";
import { projects } from "../assets/projects/projects.json";
export default function ProjectsList() {
  return (
    <div className="w-full px-10" id="projects">
      <div className="w-full h-24 md:hidden"></div>
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Projects</h2>
      <ul>
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              projectType={project.projectType}
              title={project.title}
              skills={project.skills}
              description={project.description}
              imageURL={project.imageURL}
            />
          );
        })}
      </ul>
    </div>
  );
}
