import { Link } from "react-router-dom"

export default function MobileMenu({ setShowMobileMenu }) {
  const closeMenu = () => {
    setShowMobileMenu(false)
  }
    return (
      <nav className="flex flex-col">
          <Link to="/#intro" onClick={closeMenu}>Home</Link>
          <Link to="/#about-me" onClick={closeMenu}>About me</Link>
          <Link to="/#projects" onClick={closeMenu}>Projects</Link>
          <Link to="/#contact" onClick={closeMenu}>Contact</Link>
        </nav>
    )
}