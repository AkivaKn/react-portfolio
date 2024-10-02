import { IoMenu } from "react-icons/io5";
// import SkillsCarousel from "./SkillsCarousel";

export default function MobileHeader({ setShowMobileMenu, showMobileMenu }) {
  return (
    <div className="md:hidden w-screen text-2xl z-10">
      <div className="w-screen h-20 fixed inset-0 bg-gray-900 flex justify-center items-center text-white">
        <p className="absolute left-4 top-5">Akiva Kaufman</p>
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="absolute right-4 top-5 text-3xl"
        >
          <IoMenu />
        </button>
      </div>
    </div>
  );
}
