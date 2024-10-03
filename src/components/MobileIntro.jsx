import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function MobileIntro() {
  return (
    <div className="md:hidden landscape-mobile:flex w-full min-h-screen flex flex-col justify-center items-center py-10" id="home">
      <div className="w-full min-h-20"></div>
      <img src="/images/profile.jpg" alt="profile picture" className="rounded-3xl h-44 w-36 mb-2 object-cover"/>
      <h1 className="text-2xl my-1">Hi, I&apos;m Akiva</h1>
      <h2 className="text-xl my-1 text-center">Junior Software Developer</h2>
      <div className="flex text-4xl my-1 gap-4">
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
      <p className="text-lg mx-6 text-center">
        I have a passion for quality code, and enjoy constantly expanding my
        skills.
      </p>
    </div>
  );
}
