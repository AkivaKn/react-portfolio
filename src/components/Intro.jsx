import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Intro() {
  return (
    <div className="w-full max-md:h-screen flex flex-col justify-center items-center" id="intro">
      <div className="w-full h-24 md:hidden"></div>
      <img src="/images/profile.jpg" alt="profile picture" className="rounded-full h-48 md:h-24 w-48 md:w-24 my-4 md:my-2 object-cover"/>
      <h1 className="text-2xl md:text-lg my-2 md:my-0">Hi, I&apos;m Akiva</h1>
      <h2 className="text-xl md:text-base my-4 md:my-1 text-center">Junior Software Developer</h2>
      <div className="flex text-4xl md:text-2xl my-4 md:my-1 gap-4">
        <a href="https://github.com/AkivaKn" target="blank" className="md:hover:text-yellow-400">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/akivakaufman/" target="blank" className="md:hover:text-yellow-400">
          <FaLinkedin />
        </a>
        <a href="mailto: akivakaufman@gmail.com" target="blank" className="md:hover:text-yellow-400">
          <MdEmail />
        </a>
      </div>
      <p className="text-lg mx-10 text-center md:hidden">
        I have a passion for quality code, and enjoy constantly expanding my
        skills.
      </p>
    </div>
  );
}
