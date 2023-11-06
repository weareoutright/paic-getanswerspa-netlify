import React from "react";
import menuToggle from "../images/menu-toggle.svg";
import { NAV_LINKS } from "../constants/navLinks";

const NavMobile = () => {
  return (
    <div className="NavMobile">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            autoFocus="false"
          >
            <img src={menuToggle} />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            {/* <a className="navbar-brand" href="#">
              PAIC
            </a> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {NAV_LINKS.map((link) => {
                return (
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href={`#${link.hash}`}
                    >
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavMobile;