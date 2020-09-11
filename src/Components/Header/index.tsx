import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="logo">MSM</h1>
      <span id="menu-activator" className="menu-button">
        ☰
      </span>
      <ul className="nav-menu" data-isMobile="false">
        <li className="nav-menu-item">
          <NavLink to="/" className="menu-link">
            SOBRE
          </NavLink>
        </li>
        <li className="nav-menu-item">
          <NavLink to="/portifolio" className="menu-link">
            PORTFÓLIO
          </NavLink>
        </li>
        <li className="nav-menu-item">
          <NavLink to="/contatos" className="menu-link">
            CONTATOS
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
