import { Link } from "react-router-dom";
import { useState } from "react";
import { projects } from "../assets/projects/projects.json";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function MobileMenu({ setShowMobileMenu }) {
  const closeMenu = () => {
    setShowMobileMenu(false);
  };
  const [showProjectsMenu, setShowProjectsMenu] = useState(false);

  return (
    <div className="w-full flex justify-end text-center">
      <nav className="flex flex-col w-1/2 bg-gray-300 relative">
        <Link to="/#intro" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/#about-me" onClick={closeMenu}>
          About me
        </Link>
        <Link to="/#portfolio" onClick={closeMenu}>
          Portfolio
        </Link>
        <div className="flex justify-center">
          <div>
            <button
              className="flex items-center"
              onClick={() => setShowProjectsMenu(!showProjectsMenu)}
            >
              {showProjectsMenu ? (
                <MdKeyboardArrowRight className="text-3xl ml-1" />
              ) : (
                <MdKeyboardArrowLeft className="text-3xl ml-1" />
              )}
              <p>Projects</p>
            </button>
          </div>
          {showProjectsMenu && (
            <ul className="flex flex-col bg-gray-300 p-5 absolute right-full w-full">
              {projects.map((project, index) => {
                return (
                  <Link
                    to={`/projects/${project.projectId}`}
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
        <Link to="/#contact" onClick={closeMenu}>
          Contact
        </Link>
      </nav>
    </div>
  );
}
