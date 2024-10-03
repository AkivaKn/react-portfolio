import AboutMe from "./AboutMe";
import Contact from "./Contact";
import MobileIntro from "./MobileIntro";
import ProjectsList from "./ProjectsList";

export default function Home() {
  return (
    <>
      <MobileIntro />
      <AboutMe />
      <ProjectsList />
      <Contact />
    </>
  );
}
