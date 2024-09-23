import Bio from "./Bio";
import SkillsList from "./SkillsList";

export default function AboutMe() {
  return (
    <div className="h-screen" id="about-me">
      <div className="w-full h-14"></div>
      <div className="w-full flex">
        <SkillsList />
        <Bio />
      </div>
    </div>
  );
}
