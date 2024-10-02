// import { useParams } from "react-router-dom";
// import { projects } from "../assets/projects/projects.json";

// export default function ProjectDetails() {
//   const { projectId } = useParams();
//   const currentProject = projects.filter(
//     (project) => project.projectId == projectId
//   )[0];
//   return (
//     <div id="about-me">
//       <div className="w-full min-h-20 md:hidden"></div>
//       <div className="flex max-md:flex-col min-h-[calc(100vh-96px)] md:min-h-screen">
//         <div className="flex flex-col justify-center w-full md:p-10 p-5">
//           <h5 className="md:text-xl text-base font-bold md:mb-2 mb-1">
//             {currentProject?.projectType}
//           </h5>
//           <h4 className="md:text-3xl text-lg font-bold md:mb-2 mb-1">
//             {currentProject?.title}
//           </h4>
//           <div className="flex-wrap flex">
//             {currentProject?.skills.map((skill, index) => {
//               return (
//                 <span
//                   key={index}
//                   className="md:p-2 p-1 md:mr-2 mr-1.5 md:mb-3 mb-1.5 bg-gray-800 text-white md:text-sm text-xs"
//                 >
//                   {skill}
//                 </span>
//               );
//             })}
//           </div>
//           {currentProject.extendedDescription.map((paragraph,index) => {
//             return  (<p key={index} className="md:text-lg text-xs text-gray-800 leading-relaxed md:mb-4 mb-2">
//             {paragraph}
//           </p>)
//           })}
//           <div>
//             <a
//               href={currentProject?.gitHubURL}
//               className="relative inline-block md:px-4 px-2 md:py-2 py-1 font-medium group self-start md:mb-4 mb-2 mr-2"
//               target="blank"
//             >
//               <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
//               <span className="absolute inset-0 w-full h-full bg-white border-2 border-gray-900 group-hover:bg-black"></span>
//               <span className="relative text-gray-900 group-hover:text-white">
//                 Code
//               </span>
//             </a>
//             <a
//               href={currentProject?.projectURL}
//               className="relative inline-block md:px-4 px-2 md:py-2 py-1 font-medium group self-start md:mb-4 mb-2"
//               target="blank"
//             >
//               <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
//               <span className="absolute inset-0 w-full h-full bg-white border-2 border-gray-900 group-hover:bg-black"></span>
//               <span className="relative text-gray-900 group-hover:text-white">
//                 Demo
//               </span>
//             </a>
//           </div>
//         </div>
//         <img
//           src={currentProject?.imageURL}
//           className="md:h-72 md:w-72 h-[80vw] w-[80vw] self-center md:m-10 m-5"
//           alt="image"
//         />
//       </div>
//     </div>
//   );
// }
