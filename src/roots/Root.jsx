import { useState } from "react";
import { Outlet } from "react-router-dom";
import DesktopNavbar from "../components/DesktopNavbar.jsx";
import MobileHeader from "../components/MobileHeader.jsx";
import MobileMenu from "../components/MobileMenu.jsx";
import ScrollToHashElement from "../components/ScrollToHashElement.jsx";

export default function Route() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
      <div className="flex flex-col md:flex-row w-screen">
      <ScrollToHashElement />
      <DesktopNavbar />
      <MobileHeader
        setShowMobileMenu={setShowMobileMenu}
        showMobileMenu={showMobileMenu}
      />
      {showMobileMenu && (
        <div className="fixed w-full inset-x-0 top-20">
          <MobileMenu setShowMobileMenu={setShowMobileMenu} />
        </div>
      )}
      <div className="w-full md:w-4/5 font-poppins">
        <Outlet />
      </div>
    </div>
  );
}
