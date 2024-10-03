import "./App.css";
import Home from "./components/Home";
import DesktopNavbar from "./components/DesktopNavbar.jsx";
import MobileHeader from "./components/MobileHeader";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";

export default function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
      <div className="flex flex-col md:flex-row landscape-mobile:flex-col w-[99vw]">
      <DesktopNavbar />
      <MobileHeader
        setShowMobileMenu={setShowMobileMenu}
        showMobileMenu={showMobileMenu}
      />
      {showMobileMenu && (
        <div className="fixed w-full inset-x-0 top-20 z-10">
          <MobileMenu setShowMobileMenu={setShowMobileMenu} />
        </div>
      )}
      <div className="w-full md:w-4/5 landscape-mobile:w-full font-poppins">
      <Home />
      </div>
    </div>
  );
}