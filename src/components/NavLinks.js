import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
      </nav>
    </>
  );
};

export default NavLinks;
