import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
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
import Skill from "./Skill";

export default function SkillsList() {
  return (
    <div className="w-1/3">
      <h3>My Skills</h3>
      <div className="grid grid-cols-3 place-items-center">
        <Skill icon={<IoLogoJavascript />} name="JavaScript" />
        <Skill icon={<SiTypescript />} name={"TypeScript"} />
        <Skill icon={<FaHtml5 />} name="HTML" />
        <Skill icon={<FaCss3Alt />} name="CSS" />
        <Skill icon={<SiCsharp />} name="C#" />
        <Skill icon={<SiDart />} name="Dart" />
        <Skill icon={<FaReact />} name="React" />
        <Skill icon={<FaReact />} name="React Native" />
        <Skill icon={<SiFlutter />} name="Flutter" />
        <Skill icon={<RiNextjsFill />} name="Next.js" />
        <Skill icon={<SiDotnet />} name="ASP.NET" />
        <Skill icon={<SiTailwindcss />} name="Tailwind CSS" />
        <Skill icon={<FaBootstrap />} name="Bootstrap" />
        <Skill icon={<FaNodeJs />} name="Node.js" />
        <Skill icon={<BiLogoPostgresql />} name="PSQL" />
        <Skill icon={<FaDatabase />} name="SQL" />
        <Skill icon={<SiExpress />} name="Express.js" />
        <Skill icon={<SiVercel />} name="Vercel" />
        <Skill icon={<SiNetlify />} name="Netlify" />
        <Skill icon={<SiRender />} name="Render" />
        <Skill icon={<SiMicrosoftazure />} name="Azure" />
      </div>
    </div>
  );
}
