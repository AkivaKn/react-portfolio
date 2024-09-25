import "./App.css";
import Home from "./components/Home";
import DesktopNavbar from "./components/DesktopNavbar.jsx";
import MobileHeader from "./components/MobileHeader";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";

function App() {
  const [showMobileMenu,setShowMobileMenu] = useState(false)
  return (
    <div className="flex flex-col md:flex-row w-screen">
      <DesktopNavbar />
      <MobileHeader setShowMobileMenu={setShowMobileMenu} showMobileMenu={showMobileMenu}/>
      {showMobileMenu &&
        <div className="fixed bg-gray-300 w-full inset-x-0 top-14">
          <MobileMenu setShowMobileMenu={setShowMobileMenu}/>
        </div>
      }
      <div className="w-full md:w-3/4 font-poppins">
        <Home />
      </div>
    </div>
  );
}

export default App;
