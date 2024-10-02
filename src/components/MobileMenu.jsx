export default function MobileMenu({ setShowMobileMenu }) {
  const closeMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div className="w-full flex justify-end text-center">
      <nav className="flex flex-col w-1/2 bg-gray-300 relative">
        <a href="#intro" onClick={closeMenu}>
          Home
        </a>
        <a href="#about-me" onClick={closeMenu}>
          About me
        </a>
        <a href="#portfolio" onClick={closeMenu}>
          Portfolio
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>
    </div>
  );
}
