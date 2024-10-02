export default function ProjectCard({
  projectType,
  title,
  skills,
  description,
    imageURL,
  projectId,
  projectURL,
  gitHubURL
}) {
  return (
    <li className="flex max-md:flex-col justify-between text-gray-800 mb-10 pb-10 border-b-2 border-gray-500">
      <div className="flex flex-col justify-center">
        <h5 className="md:text-xl text-base font-bold">{projectType}</h5>
        <h4 className="md:text-3xl text-lg font-bold">{title}</h4>
        <div className="flex-wrap flex">
          {skills.map((skill, index) => {
            return <span key={index} className="md:p-2 p-1.5 mr-2 md:mb-4 mb-2 bg-gray-800 text-white text-sm">{skill}</span>;
          })}
        </div>
        <p className="md:text-lg text-sm text-gray-800 leading-relaxed md:mb-4 mb-2">{description}</p>
        <div className="md:mb-4 mb-2">
            {gitHubURL && <a
              href={gitHubURL}
              className="relative inline-block md:px-4 px-2 md:py-2 py-1 font-medium group self-start md:mb-4 mb-2 mr-2"
              target="blank"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-gray-900 group-hover:bg-black"></span>
              <span className="relative text-gray-900 group-hover:text-white">
                Code
              </span>
            </a>}
            {projectURL && <a
              href={projectURL}
              className="relative inline-block md:px-4 px-2 md:py-2 py-1 font-medium group self-start md:mb-4 mb-2"
              target="blank"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-gray-900 group-hover:bg-black"></span>
              <span className="relative text-gray-900 group-hover:text-white">
                Demo
              </span>
            </a>}
          </div>
      </div>
      <img src={imageURL} className="h-72 w-72 self-center" alt="image" />
    </li>
  );
}
