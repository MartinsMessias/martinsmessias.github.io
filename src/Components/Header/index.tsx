import React from "react";
import { NavLink, Link } from "react-router-dom";

// Personalização
import "./styles.css";

function Header(){
  return (
    <header>
      <nav>
        <ul className="menu border-left border-right">
          <li className="menu-item border-left">
            <Link to="/portifolio">PORTIFÓLIO</Link>
          </li>
          <li className="menu-item ">
            <Link to="/">SOBRE</Link>
          </li>
          <li className="menu-item border-right">
            <Link to="/contatos">CONTATOS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
