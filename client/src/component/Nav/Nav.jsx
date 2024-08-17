import "./nav.css";
import { useLocation, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

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
        <Navbar expand="xl">
          <Container className="pt-3 position-relative">
            <Navbar.Brand>
              <NavLink className="me-3" to="">
                <img
                  src={import.meta.env.VITE_BASE_URL + "images/s2s-logo/syn2sign_logo.svg"}
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
                    srcSet={import.meta.env.VITE_BASE_URL+"images/s2s-logo/su_logo_sm.svg"}
                    type="image/svg+xml"
                  />
                  <source
                    media="(min-width:767.98px)"
                    srcSet= {import.meta.env.VITE_BASE_URL+"images/s2s-logo/su_logo.svg"}
                    type="image/svg+xml"
                  />
                  <img
                    src={import.meta.env.VITE_BASE_URL + "images/s2s-logo/su_logo.svg"}
                    alt="ict_silpakorn_logo"
                  />
                </picture>
              </a>
            </Navbar.Brand>
            <div className="btn-menu" onClick={menuClick}>
              <div className="groupMenu">
                <span className="pan1"></span> <span className="pan2"></span>
                <span className="pan3"></span>
              </div>
            </div>

            <Navbar.Collapse
              className={`navbar-collapse ${menuOpen ? "show" : ""}`}
              id="navbarText"
            >
              <Nav className="nav-r  ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={`link-nav txt-cap ${
                      activeLink === "/" ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveLink("/");
                      menuClick();
                    }}
                  >
                    Syn2sign
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
                    Exhibition
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
                    Credit
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
                    Stay tune
                  </NavLink>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

