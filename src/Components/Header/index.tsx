import React from "react";
import { NavLink, Link } from "react-router-dom";

// Personalização
import "./styles.css";

function Header() {
  return (
    <header>
      <nav>
        <ul className="menu border-left border-right">
          <li className="menu-item border-left">
            <NavLink to="/portifolio" className="menu-link">
              PORTIFÓLIO
            </NavLink>
          </li>
          <li className="menu-item ">
            <NavLink to="/" className="menu-link">
              SOBRE
            </NavLink>
          </li>
          <li className="menu-item border-right">
            <NavLink to="/contatos" className="menu-link">
              CONTATOS
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
