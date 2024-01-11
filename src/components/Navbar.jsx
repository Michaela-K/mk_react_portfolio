import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="navbar__img"> Mk
        {/* <img src="./assets/images/logo.png" alt="Logo" /> */}
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar__items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar__active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar__content"
            >
              Home
            </Link>
          </li>
          <li>
          <Link
              onClick={closeMenu}
              activeClass="navbar__active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="About"
              className="navbar__content"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar__active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Skills"
              className="navbar__content"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar__active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Portfolio"
              className="navbar__content"
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;