import DesktopIntro from "./DesktopIntro";
import SkillsCarousel from "./SkillsCarousel";

export default function DesktopNavbar() {
  return (
    <div className="hidden md:block w-1/5 landscape-mobile:hidden">
      <div className="fixed inset-y-0 w-1/5 bg-gray-800 h-screen">
        <div className="h-3/6 flex items-center justify-center text-white bg-gray-900 px-4">
          <DesktopIntro />
        </div>
        <nav className="flex flex-col h-2/6 items-center justify-center space-y-6">
          <a
            href="#about"
            className="text-white text-lg font-medium hover:text-yellow-400 transition-all"
          >
            About
          </a>
          <a
            href="#projects"
            className="peer text-white text-lg font-medium hover:text-yellow-400 transition-all"
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

        <div className="h-1/6 py-2 text-white bg-gray-900 flex flex-col justify-center">
          <SkillsCarousel />
        </div>
      </div>
    </div>
  );
}
