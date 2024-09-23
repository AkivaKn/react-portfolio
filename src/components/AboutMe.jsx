import Bio from "./Bio";
import SkillsList from "./SkillsList";

export default function AboutMe() {
    return (
        <div className="w-screen h-screen flex">
        <SkillsList />
        <Bio />
      </div>
    )
}