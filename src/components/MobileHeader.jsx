import { IoMenu } from "react-icons/io5";
import SkillsCarousel from "./SkillsCarousel";

export default function MobileHeader({ setShowMobileMenu, showMobileMenu }) {
  return (
    <div className="md:hidden w-screen text-2xl">
      <div className="w-screen h-20 fixed inset-0 bg-gray-400 flex justify-center items-center">
        <p className="absolute left-4 top-5">Akiva Kaufman</p>
        <div className="w-1/2 h-10 absolute left-1/3 ml-7">
          <SkillsCarousel />
        </div>
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="absolute right-4 top-6"
        >
          <IoMenu />
        </button>
      </div>
    </div>
  );
}
