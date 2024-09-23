import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Intro() {
  return (
    <div className="w-full flex flex-col justify-center items-center" id="intro">
      <div className="w-full h-14"></div>
      <h1>Hi, I&apos;m Akiva</h1>
      <h2>Junior Software Developer</h2>
      <div className="flex">
        <a href="https://github.com/AkivaKn" target="blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/akivakaufman/" target="blank">
          <FaLinkedin />
        </a>
        <a href="mailto: akivakaufman@gmail.com" target="blank">
          <MdEmail />
        </a>
      </div>
      <p>
        I have a passion for quality code, and enjoy constantly expanding my
        skills.
      </p>
    </div>
  );
}
