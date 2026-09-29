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
  FaServer,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiCsharp,
  SiDart,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFlutter,
  SiGo,
  SiMicrosoftazure,
  SiNetlify,
  SiPython,
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
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <IoLogoJavascript /> },
        { name: "Go", icon: <SiGo /> },
        { name: "Python", icon: <SiPython /> },
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
        { name: "Next.js", icon: <RiNextjsFill /> },
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "ASP.NET", icon: <SiDotnet /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "REST APIs", icon: <FaServer /> },
      ],
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "Docker", icon: <SiDocker /> },
        { name: "Azure", icon: <SiMicrosoftazure /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Netlify", icon: <SiNetlify /> },
        { name: "Render", icon: <SiRender /> },
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
    <div className="min-h-screen flex flex-col -mt-20 md:mt-0 landscape-mobile:-mt-20" id="about">
      <div className="w-full min-h-20 md:hidden landscape-mobile:block"></div>
      <div className="flex flex-col min-h-[calc(100vh-96px)] justify-center w-full md:p-10 p-5">
        <h2 className="md:text-4xl text-2xl font-extrabold text-gray-800 md:mb-8 mb-4">
          About
        </h2>

        <p className="md:text-lg text-base text-gray-800 leading-relaxed md:mb-8 mb-4">
          I&apos;m a Software Engineer at BearTech, where I build fullstack web
          and mobile products with TypeScript, React, Go and Python. I got into
          coding through a freeCodeCamp course, and that interest grew into a
          career change via the Northcoders bootcamp. Day to day I work on new
          features and existing systems, and I&apos;m involved in architecture
          decisions for services, APIs and data models. Away from work I&apos;m
          happiest learning something new, whether that&apos;s Spanish or a
          side project like the ones on this site.
        </p>
        <div className="justify-center items-center mb-4 md:mb-8">
          <SkillsCard skillSet={skillsData[currentSkillSet]} />
        </div>
        <div className="text-center">
          <button
            onClick={onDownloadClick}
            className="relative inline-block md:px-4 px-2 md:py-2 py-1 font-medium group self-start md:text-xl text-lg"
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
