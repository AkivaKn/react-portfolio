export default function MobileMenu({ setShowMobileMenu }) {
  const closeMenu = () => {
    setShowMobileMenu(false)
  }
    return (
      <nav className="flex flex-col">
          <a href="#intro" onClick={closeMenu}>Home</a>
          <a href="#about-me" onClick={closeMenu}>About me</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
    )
}