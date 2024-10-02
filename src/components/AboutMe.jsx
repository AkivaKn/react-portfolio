import SkillsCard from "./SkillsCard";
import { useEffect, useState } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiCsharp,
  SiDart,
  SiDotnet,
  SiExpress,
  SiFlutter,
  SiMicrosoftazure,
  SiNetlify,
  SiRender,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export default function AboutMe() {
  const skillsData = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <IoLogoJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "C#", icon: <SiCsharp /> },
        { name: "Dart", icon: <SiDart /> },
      ],
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "React Native", icon: <FaReact /> },
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Next.js", icon: <RiNextjsFill /> },
        { name: "ASP.NET", icon: <SiDotnet /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "Express.js", icon: <SiExpress /> },
      ],
    },
    {
      title: "Hosting",
      skills: [
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Netlify", icon: <SiNetlify /> },
        { name: "Render", icon: <SiRender /> },
        { name: "Azure", icon: <SiMicrosoftazure /> },
      ],
    },
  ];

  const [currentSkillSet, setCurrentSkillSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillSet(
        (prevSkillSet) => (prevSkillSet + 1) % skillsData.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [skillsData.length]);

  const onDownloadClick = () => {
    const pdfUrl = "akiva_kaufman_cv.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "akiva_kaufman_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col max-md:-mt-20" id="about-me">
      <div className="w-full min-h-20 md:hidden"></div>
      <div className="flex flex-col min-h-[calc(100vh-96px)] justify-between w-full md:p-10 p-5">
        <h2 className="md:text-4xl text-xl font-extrabold text-gray-800 md:mb-5 mb-2">
          About Me
        </h2>

        <p className="md:text-lg text-sm text-gray-800 leading-relaxed mb-2">
          I&apos;ve always loved creating things and have a natural draw to
          problem solving, especially when it involves technology. After
          discovering a passion for coding, I took the leap and enrolled in a
          Software Development bootcamp, an experience I thoroughly enjoyed.
          Since graduating, I&apos;ve been committed to growing my skills,
          constantly learning new technologies while deepening my understanding
          of the ones I&apos;ve already mastered. Whether it&apos;s a new
          project, troubleshooting a bug, or building an API, I&apos;m always
          ready for a new challenge.
        </p>

        <div className="justify-center items-center mb-2">
          <SkillsCard skillSet={skillsData[currentSkillSet]} />
        </div>

        <div className="text-center">
          <button
            onClick={onDownloadClick}
            className="relative inline-block px-4 py-2 font-medium group self-start text-xl"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-2 translate-y-2 bg-gray-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-gray-900 group-hover:bg-black"></span>
            <span className="relative text-gray-900 group-hover:text-white">
              Download my CV
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
