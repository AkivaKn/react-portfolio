export default function MobileMenu({ setShowMobileMenu }) {
  const closeMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <nav className="flex flex-col w-full bg-gray-800 text-center space-y-3 justify-center py-3">
      <a
        href="#intro"
        onClick={closeMenu}
        className="text-white text-lg font-medium"
      >
        Home
      </a>
      <a
        href="#about"
        onClick={closeMenu}
        className="text-white text-lg font-medium"
      >
        About
      </a>
      <a
        href="#projects"
        onClick={closeMenu}
        className="text-white text-lg font-medium"
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={closeMenu}
        className="text-white text-lg font-medium"
      >
        Contact
      </a>
    </nav>
  );
}
