import ProjectCard from "./ProjectCard";
import { projects } from "../assets/projects/projects.json";
export default function ProjectsList() {
  return (
    <div className="w-full md:px-10 p-5 max-md:-mt-20" id="projects">
      <div className="w-full h-20 md:hidden"></div>
      <h2 className="md:text-4xl text-xl font-extrabold text-gray-800 mb-10">Projects</h2>
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
