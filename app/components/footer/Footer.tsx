'use client'
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import logo from "../../assets/images/logo.png"
import facebook from "../../assets/images/icon-facebook.svg"
import instagram from "../../assets/images/icon-instagram.svg"

import "./Footer.css"

export default function Footer() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  } 

  return(
    <div className="footer-container">
      <div className="footer-list">
        <div className="footer-list2">
          <div className="footer-col1">
            <div className="footer-nav">
              <div className="footer-nav__list">
                <Link href="/">Inicio</Link>
              </div>
              <div className="footer-nav__list">
                <Link href="/nosotros">Nosotros</Link>
              </div>
              <div className="footer-nav__list">
                <div className="dropdown-container">
                  <div className="dropdown-button" onClick={toggleDropdown}>
                    Desarrollos
                    <span className={dropdownOpen ? 'rotate-up' : 'rotate-down'}>&#9662;</span> 
                  </div>
                  {
                    dropdownOpen && (
                      <div className="dropdown-footer">
                        <div className="dropdown-footer__list">
                          <div className="dropdown-footer__link">
                            <Link href="/sevenna">Sevena</Link>
                          </div>
                          <div className="dropdown-footer__link">
                            <Link href="/selah">Selah</Link>
                          </div>
                          <div className="dropdown-footer__link">
                            <Link href="/villasgaleira">Villas Galeira</Link>
                          </div>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
              <div className="footer-nav__list">
                <Link href="/contacto">Contacto</Link>
              </div>
            </div>
            <div className="footer-nav">
              <div className="footer-nav2__list">
                <Link href="/politicaprivacidad">Política de Privacidad</Link>
              </div>
              <span>|</span>
              <div className="footer-nav2__list">
                <Link href="/acuerdolegal">Acuerdo Legal</Link>
              </div>
            </div>
            <div className="footer-nav">
              <div className="footer-nav3__list">
                <a href="https://www.facebook.com/profile.php?id=61551041490040&mibextid=ZbWKwL"><Image src={facebook} alt="Logo"/></a>
              </div>
              <div className="footer-nav3__list">
                <a href="https://www.instagram.com/zeptimodesarrollos?igsh=NTc4MTIwNjQ2YQ=="><Image src={instagram} alt="Logo"/></a>
              </div>
            </div>
          </div>
          <div className="footer-col2">
            <div className="footer-logo">
              <Image src={logo} alt="Logo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}