import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegHandPointRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import {
  HeaderContainer,
  LogoImg,
  NavbarContainer,
  ListContainer,
} from "./navbar-styles";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const toggleRef = useRef(null);
  const navRef = useRef(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    navRef.current.classList.toggle("show-menu");
    toggleRef.current.classList.toggle("show-icon");
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index)); // Alternar entre abierto/cerrado
  };

  return (
    <HeaderContainer className="header">
      <NavbarContainer className="nav container">
        {/* Logo */}
        <Link to="/" className="nav__logo">
          <LogoImg
            src="../../assets/imgs/logos/logo-moras.png"
            alt="Logo Moras y compañia"
          />
        </Link>
        {/* Menú móvil */}
        <div
          className="nav__toggle"
          id="nav-toggle"
          ref={toggleRef}
          onClick={toggleMenu}
        >
          <RxHamburgerMenu className="nav__burger" />
          <IoClose className="nav__close" />
        </div>

        {/* Menú principal */}
        <div className="nav__menu" id="nav-menu" ref={navRef}>
          <ListContainer className="nav__list">
            <li>
              <Link to="/" className="nav__link">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/" className="nav__link">
                Nosotros
              </Link>
            </li>
            <li
              className={`dropdown__item ${
                activeDropdown === 0 ? "show-dropdown" : ""
              }`}
            >
              <div
                className="nav__link"
                onClick={() => handleDropdownToggle(0)}
              >
                Rubros <IoIosArrowDown className="dropdown__arrow" />
              </div>

              <ul className="dropdown__menu">
                <li>
                  <Link to="/editorial" className="dropdown__link">
                    <FaRegHandPointRight className="hand__icon" /> Editorial
                  </Link>
                </li>
                <li>
                  <Link to="/packaging" className="dropdown__link">
                    <FaRegHandPointRight className="hand__icon" /> Packaging
                  </Link>
                </li>
                <li>
                  <Link to="/viaPublica" className="dropdown__link">
                    <FaRegHandPointRight className="hand__icon" /> Vía Pública
                  </Link>
                </li>
                <li>
                  <Link to="/sublimacion" className="dropdown__link">
                    <FaRegHandPointRight className="hand__icon" /> Sublimación
                  </Link>
                </li>
                <li>
                  <Link to="/textil" className="dropdown__link">
                    <FaRegHandPointRight className="hand__icon" />
                    Industria Textil
                  </Link>
                </li>
                <li>
                  <Link to="/comunicacionVisual" className="dropdown__link">
                    <FaRegHandPointRight className="hand__icon" /> Comunicación
                    Visual
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/" className="nav__link">
                Contacto
              </Link>
            </li>
          </ListContainer>
        </div>
      </NavbarContainer>
    </HeaderContainer>
  );
};
