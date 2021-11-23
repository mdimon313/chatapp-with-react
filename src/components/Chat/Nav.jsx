import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const hideMenu = () => setIsMobile(false);
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav_logo">
            <Link to="/" className="logo">
              Chat World
            </Link>
          </div>
          <ul className={!isMobile ? "hide" : "block"}>
            <li className="nav_item">
              <Link to="enroll" className="nav_link" onClick={hideMenu}>
                Register
              </Link>
            </li>
            <li className="nav_item">
              <Link to="/" className="nav_link" onClick={hideMenu}>
                Login
              </Link>
            </li>
          </ul>
          <div className="mobile_btn_toggle">
            <span
              className="responsive_mobile_icon"
              onClick={() => setIsMobile(!isMobile)}
            >
              {!isMobile ? <FiMenu /> : <FiX />}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
