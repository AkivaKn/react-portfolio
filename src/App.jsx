import "./App.css";
import AboutMe from "./components/AboutMe";
import Intro from "./components/Intro";
import ProjectsList from "./components/ProjectsList";

function App() {
  return (
    <div>
      <Intro />
      <AboutMe />
      <ProjectsList/>
    </div>
  );
}

export default App;
