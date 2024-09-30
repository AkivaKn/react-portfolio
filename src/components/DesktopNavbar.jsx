import { Link } from "react-router-dom";
import Intro from "./Intro";
import SkillsCarousel from "./SkillsCarousel";
import { useState } from "react";
import { projects } from "../assets/projects/projects.json";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function DesktopNavbar() {
  const [showProjectsMenu, setShowProjectsMenu] = useState(false);
  return (
    <div className="max-md:hidden w-1/5">
      <div className="fixed inset-y-0 w-1/5 bg-gray-800 h-screen">
        <div className="h-2/5 flex items-center justify-center text-white bg-gray-900">
          <Intro />
        </div>
        <nav className="flex flex-col h-2/5 items-center justify-center space-y-6 relative">
          <Link
            to="/#about-me"
            className="text-white text-lg font-medium hover:text-yellow-400 transition-all"
          >
            About me
          </Link>
          <Link
            to="/#portfolio"
            className="peer text-white text-lg font-medium hover:text-yellow-400 transition-all"
          >
            Portfolio
          </Link>
          <div className="flex">
            <div>
              <button
                className="text-white text-lg font-medium hover:text-yellow-400 transition-all flex items-center"
                onClick={() => setShowProjectsMenu(!showProjectsMenu)}
              >
                <p>Projects</p>
                {showProjectsMenu ? (
                  <MdKeyboardArrowLeft className="text-3xl ml-1" />
                ) : (
                  <MdKeyboardArrowRight className="text-3xl ml-1" />
                )}
              </button>
            </div>
            {showProjectsMenu && (
              <ul className="flex flex-col bg-gray-800 p-5 absolute left-full w-[300px]">
                {projects.map((project, index) => {
                  return (
                    <Link
                      to={`/projects/${project.projectId}`}
                      className="text-white text-lg font-medium hover:text-yellow-400 transition-all"
                      onClick={() => setShowProjectsMenu(!showProjectsMenu)}
                      key={index}
                    >
                      {project.title}
                    </Link>
                  );
                })}
              </ul>
            )}
          </div>
          <Link
            to="/#contact"
            className="text-white text-lg font-medium hover:text-yellow-400 transition-all"
          >
            Contact
          </Link>
        </nav>

        <div className="h-1/5 py-2 text-white bg-gray-900 flex flex-col justify-center">
          <SkillsCarousel />
        </div>
      </div>
    </div>
  );
}
