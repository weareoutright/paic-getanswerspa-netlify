import React from "react";
import menuToggle from "../images/menu-toggle.svg";
import { NAV_LINKS } from "../constants/navLinks";

const NavMobile = () => {
  return (
    <div className="NavMobile">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={menuToggle} alt="" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {NAV_LINKS.map((link) => {
                return (
                  <li className="nav-item" key={`nav-${link.hash}`}>
                    <a
                      className="nav-link"
                      aria-current="page"
                      href={`#${link.hash}`}
                      data-mdb-smooth-scroll="smooth-scroll"
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
