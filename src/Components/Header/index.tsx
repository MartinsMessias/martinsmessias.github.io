import React from "react";
import { NavLink } from "react-router-dom";

// Personalização
import "./styles.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="menu border-left border-right">
          <li className="menu-item border-left">
            <NavLink to="/portifolio">PORTIFÓLIO</NavLink>
          </li>
          <li className="menu-item ">
            <NavLink to="/">SOBRE</NavLink>
          </li>
          <li className="menu-item border-right">
            <NavLink to="/contatos">CONTATOS</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
