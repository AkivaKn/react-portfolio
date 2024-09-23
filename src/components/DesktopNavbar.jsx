import Intro from "./Intro";

export default function DesktopNavbar() {
  return (
    <div className="max-lg:hidden w-1/4">
      <div className="fixed inset-y-0 w-1/4 bg-gray-400">
        <Intro />
        <nav className="flex flex-col">
          <a href="#about-me">About me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  );
}
