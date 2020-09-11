import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function Header() {
  const [menuIsOpen, setMenuOpen] = useState(false);

  const closedMenu = {
    transform: "translate(0%, 0%)",
  };

  const openedMenu = {
    transform: "translate(100%, 0%)",
  };

  function handleMenuOpen() {
    menuIsOpen ? setMenuOpen(false) : setMenuOpen(true);
  }

  return (
    <header>
      <h1 className="logo">MSM</h1>
      <span
        id="menu-activator"
        className="menu-button"
        onClick={handleMenuOpen}
      >
        {!menuIsOpen ? "☰" : "<Voltar"}
      </span>
      <ul className="nav-menu" style={menuIsOpen ? closedMenu : openedMenu}>
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
