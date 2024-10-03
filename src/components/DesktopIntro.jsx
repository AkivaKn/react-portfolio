import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function DesktopIntro() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <img src="/images/profile.jpg" alt="profile picture" className="rounded-3xl h-28 w-20 my-2 object-cover"/>
      <h1 className="text-lg text-center">Hi, I&apos;m Akiva</h1>
      <h2 className="text-base my-1 text-center">Junior Software Developer</h2>
      <div className="flex text-2xl my-1 gap-4">
        <a href="https://github.com/AkivaKn" target="blank" className="hover:text-yellow-400">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/akivakaufman/" target="blank" className="hover:text-yellow-400">
          <FaLinkedin />
        </a>
        <a href="mailto: akivakaufman@gmail.com" target="blank" className="hover:text-yellow-400">
          <MdEmail />
        </a>
      </div>
    </div>
  );
}
