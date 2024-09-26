export default function ProjectCard({
  projectType,
  title,
  skills,
  description,
  imageURL,
}) {
  return (
    <li className="flex justify-between text-gray-800">
      <div className="flex flex-col justify-center">
        <h5 className="text-xl font-bold">{projectType}</h5>
        <h4 className="text-3xl font-bold">{title}</h4>
        <div>
          {skills.map((skill, index) => {
            return <span key={index} className="p-2 mr-2 bg-gray-800 text-white text-sm">{skill}</span>;
          })}
        </div>
        <p>{description}</p>
        <a
          href="#_"
          className="relative inline-block px-4 py-2 font-medium group self-start"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-gray-900 group-hover:bg-black"></span>
          <span className="relative text-gray-900 group-hover:text-white">
            View project
          </span>
        </a>
      </div>
      <img src={imageURL} className="h-72 w-72" alt="image" />
    </li>
  );
}
