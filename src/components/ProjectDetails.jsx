import { useParams } from "react-router-dom";
import { projects } from "../assets/projects/projects.json";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const currentProject = projects.filter(
    (project) => project.projectId == projectId
  )[0];
  return (
    <>
      <h5 className="md:text-xl text-base font-bold">
        {currentProject?.projectType}
      </h5>
      <h4 className="md:text-3xl text-lg font-bold">{currentProject?.title}</h4>
      <div className="flex-wrap flex">
        {currentProject?.skills.map((skill, index) => {
          return (
            <span
              key={index}
              className="md:p-2 p-1.5 mr-2 md:mb-4 mb-2 bg-gray-800 text-white text-sm"
            >
              {skill}
            </span>
          );
        })}
      </div>
      <p className="md:text-lg text-sm text-gray-800 leading-relaxed md:mb-4 mb-2">
        {currentProject?.extendedDescription}
      </p>
      <a
        href={currentProject?.gitHubURL}
        className="relative inline-block px-4 py-2 font-medium group self-start md:mb-4 mb-2"
        target="blank"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-gray-900 group-hover:bg-black"></span>
        <span className="relative text-gray-900 group-hover:text-white">
          Code
        </span>
      </a>
      <a
        href={currentProject?.projectURL}
        className="relative inline-block px-4 py-2 font-medium group self-start md:mb-4 mb-2"
        target="blank"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-gray-900 group-hover:bg-black"></span>
        <span className="relative text-gray-900 group-hover:text-white">
          Demo
        </span>
      </a>
      <img src={currentProject?.imageURL} className="h-72 w-72" alt="image" />
    </>
  );
}
