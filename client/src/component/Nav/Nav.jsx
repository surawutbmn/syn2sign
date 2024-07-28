import "./nav.css";
import { useLocation, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export const Nav2 = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const pathname = location.pathname;
    setActiveLink(pathname);
  }, [location]);

  const menuClick = () => {
      setMenuOpen(!menuOpen);
      document.body.classList.toggle("menuClick");
  };

  return (
    <>
      <header className="header-section">
        {/* <div className="bg-gd-head"></div> */}
        <nav className="navbar navbar-expand-xl ">
          <div className="pt-3 container container-1360 position-relative">
            <div className="navbar-brand">
              <NavLink className="me-3" to="/">
                <img
                  src="/s2s-logo/syn2sign_logo.svg"
                  alt="syn2sign_logo"
                />
              </NavLink>
              <a
                href="http://ict.su.ac.th/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <picture>
                  <source
                    media="(max-width:767.98px)"
                    srcSet="/s2s-logo/su_logo_sm.svg"
                    type="image/svg+xml"
                  />
                  <source
                    media="(min-width:767.98px)"
                    srcSet="/s2s-logo/su_logo.svg"
                    type="image/svg+xml"
                  />
                  <img
                    src="/s2s-logo/su_logo.svg"
                    alt="ict_silpakorn_logo"
                  />
                </picture>
              </a>
            </div>
            <div className="btn-menu" onClick={menuClick}>
              <div className="groupMenu">
                <span className="pan1"></span> <span className="pan2"></span>
                <span className="pan3"></span>
              </div>
            </div>

            <div
              className={`navbar-collapse ${menuOpen ? "show" : ""}`}
              id="navbarText"
            >
              <ul className="navbar-nav nav-r txt-upper ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={`link-nav ${activeLink === "/" ? "active" : ""}`}
                    onClick={() => {
                      setActiveLink("/");
                      menuClick();
                    }}
                  >
                    SYN2SIGN
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/showcase"
                    className={`link-nav ${
                      location.pathname.startsWith("/showcase") ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveLink("/showcase");
                      menuClick();
                    }}
                  >
                    Showcase
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/exhibition"
                    className={`link-nav ${
                      activeLink === "/exhibition" ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveLink("/exhibition");
                      menuClick();
                    }}
                  >
                    exhibition
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/credit"
                    className={`link-nav ${
                      activeLink === "/credit" ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveLink("/credit");
                      menuClick();
                    }}
                  >
                    CREDIT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/stay-tune"
                    className={`link-nav ${
                      activeLink === "/stay-tune" ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveLink("/stay-tune");
                      menuClick();
                    }}
                  >
                    STAY TUNE
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

