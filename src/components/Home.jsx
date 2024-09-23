import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Intro from "./Intro";
import ProjectsList from "./ProjectsList";

export default function Home() {
  return (
    <>
      <div className="md:hidden">
        <Intro />
      </div>
      <AboutMe />
      <ProjectsList />
      <Contact />
    </>
  );
}
