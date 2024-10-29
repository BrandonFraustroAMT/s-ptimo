'use client'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./Menu.css"

import logo from "../../assets/images/logo.png"
import menuIcon from "../../assets/images/icon-menu.svg"

export default function Menu() {
  const [isClient, setIsClient] = useState(false); 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);  

  useEffect(() => {
    setIsClient(true);
  }, []);  

  if(!isClient) return null;  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };  

  const closeMenu = () => {
    setIsMenuOpen(false);
  };  

  return(
    <div className="menu-container">
      <div className="menu-logo">
        <Image 
          src={logo}
          alt="Logo"/>
      </div>
      <div className={`menu-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-nav__list">
          <Link href="/">Inicio</Link>
        </div>
        <div className="menu-nav__list">
          <Link href="/nosotros">Nosotros</Link>
        </div>
        <div className="menu-nav__list">
          <div className="dropdown-container">
            <div className="dropdown-button" onClick={toggleDropdown}>
              Desarrollos
              <span className={dropdownOpen ? 'rotate-up' : 'rotate-down'}>&#9662;</span> 
            </div>
            {
              dropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-menu__list">
                    <div className="dropdown-menu__link">
                      <Link href="/sevena">Sevena</Link>
                    </div>
                    <div className="dropdown-menu__link">
                      <Link href="/selah">Selah</Link>
                    </div>
                    <div className="dropdown-menu__link">
                      <Link href="/villasgaleira">Villas Galeira</Link>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className="menu-nav__list">
          <Link href="/contacto">Contacto</Link>
        </div>
      </div>

      <div className="menu-slice__icon" onClick={toggleMenu}>
        <Image src={menuIcon} alt={"icon"} width={30} height={30} />
      </div>
    </div>
  )
}