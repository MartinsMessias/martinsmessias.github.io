import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuIsOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    setMenuOpen(!menuIsOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  const menuLinkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? "menu-link active" : "menu-link";

  return (
    <header>
      <div className="container header-container">
        <h1 className="logo">Messias Martins</h1>
        <button
          id="menu-activator"
          className="menu-button"
          onClick={handleMenuOpen}
          aria-label="Abrir menu de navegação"
          aria-expanded={menuIsOpen}
          type="button"
        >
          {!menuIsOpen ? "☰" : "✕"}
        </button>

        <ul className={`nav-menu ${menuIsOpen ? "open" : ""}`}>
          <li className="nav-menu-item">
            <NavLink to="/" end className={menuLinkClassName} onClick={closeMenu}>
              SOBRE
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink to="/portifolio" className={menuLinkClassName} onClick={closeMenu}>
              PORTFÓLIO
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink to="/contatos" className={menuLinkClassName} onClick={closeMenu}>
              CONTATOS
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
