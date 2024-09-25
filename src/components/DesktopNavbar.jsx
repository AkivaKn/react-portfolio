import Intro from "./Intro";
import SkillsCarousel from "./SkillsCarousel";

export default function DesktopNavbar() {
  return (
    <div className="max-md:hidden w-1/4">
      <div className="fixed inset-y-0 w-1/4 bg-gray-400 h-screen">
        <div className="h-2/5 flex items-center justify-center">
          <Intro />
        </div>
        <nav className="flex flex-col h-2/5 items-center justify-center">
          <a href="#about-me">About me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="h-1/5 flex py-2">
          <SkillsCarousel />
        </div>
      </div>
    </div>
  );
}
