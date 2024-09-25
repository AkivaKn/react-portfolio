import Intro from "./Intro";
import SkillsCarousel from "./SkillsCarousel";

export default function DesktopNavbar() {
  return (
    <div className="max-md:hidden w-1/4">
      <div className="fixed inset-y-0 w-1/4 bg-gray-800 h-screen">
        <div className="h-2/5 flex items-center justify-center text-white bg-gray-900">
          <Intro />
        </div>
        <nav className="flex flex-col h-2/5 items-center justify-center space-y-6">
          <a
            href="#about-me"
            className="text-white text-lg font-medium hover:text-yellow-400 transition-all"
          >
            About me
          </a>
          <a
            href="#projects"
            className="text-white text-lg font-medium hover:text-yellow-400 transition-all"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white text-lg font-medium hover:text-yellow-400 transition-all"
          >
            Contact
          </a>
        </nav>

        <div className="h-1/5 py-2 text-white bg-gray-900 flex flex-col justify-center">
          <SkillsCarousel />
        </div>
      </div>
    </div>
  );
}
