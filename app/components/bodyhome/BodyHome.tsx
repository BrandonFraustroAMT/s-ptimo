import Image from "next/image"
import logotipo from "../../assets/images/logotipo.png"
import render from "../../assets/images/Render2.jpg"
import sevenna from "../../assets/images/sevenna.jpg"
import galeira from "../../assets/images/villasgaleira.jpg"
import selah from "../../assets/images/selah.jpg"
import whatsapp from "../../assets/images/icon-whatsapp.svg"

import './BodyHome.css'

export default function BodyHome() {
  return (
    <div className="home-container">
      <div className="home-header">
        <div className="home-image">
          <Image 
          src={logotipo}
          alt="Logotipo"/>
        </div>
        <div className="home-text">
          <h2>Desarrollos con esencia propia</h2>
        </div>
        <div className="home-button">
          <a href="/contacto">Contactar</a>
        </div>
      </div>
      <div className="home-nosotros">
        <div className="home-nosotros__columns">
          <div className="home-nosotros__col1">
            <div className="home-nosotros__title">
              <h3>Nosotros</h3>
            </div>
            <div className="home-nosotros__text">
              <p>Somos una desarrolladora inmobiliaria ubicada en Mérida, Yucatán, especializada en el desarrollo de proyectos a la carta. Nuestro enfoque se distingue por integrar siempre un toque creativo y conceptual, asegurando así la diferenciación de nuestros productos en el mercado.</p>
            </div>
            <div className="home-nosotros__button">
              <a href="/nosotros">Conoce más</a>
            </div>
          </div>
          <div className="home-nosotros__col2">
            <div className="home-nosotros__image">
              <Image src={render} alt="Render"/>
            </div>
            <div className="home-nosotros__text-image">
              <p>Imagen de caracter ilustrativo</p>
            </div>
          </div>

        </div>
      </div>
      <div className="home-desarrollos">
        <div className="home-desarrollos__title"><h3>Nuestros desarrollos</h3></div>
        <div className="home-desarrollos__list">
          <div className="home-desarrollos__card">
            <div className="home-desarrollos__card-image">
              <Image src={sevenna} alt="Sevenna"/>
            </div>
            <div className="home-desarrollos__card-title">
              <h3>Sevenna Telchac</h3>
            </div>
            <div className="home-desarrollos__card-text">
              <p>Complejo de 7 departamentos de lujo ubicados a la orilla del mar en Telchac Puerto</p>
            </div>
            <div className="home-desarrollos__card-button">
              <a href="/sevenna">Conoce más</a>
            </div>
          </div>
          <div className="home-desarrollos__card">
            <div className="home-desarrollos__card-image">
              <Image src={galeira} alt="Villas Galeira"/>
            </div>
            <div className="home-desarrollos__card-title">
              <h3>Villas Galeira Cholul</h3>
            </div>
            <div className="home-desarrollos__card-text">
              <p>Villas ubicadas en la zona norte de Mérida Yucatán de 2 y 3 recámaras</p>
            </div>
            <div className="home-desarrollos__card-button">
              <a href="/villasgaleira">Conoce más</a>
            </div>
          </div>
          <div className="home-desarrollos__card">
            <div className="home-desarrollos__card-image">
              <Image src={selah} alt="Selah"/>
            </div>
            <div className="home-desarrollos__card-title">
              <h3>Selah Apartments</h3>
            </div>
            <div className="home-desarrollos__card-text">
              <p>Complejo de más de 25 departamentos con amenidades en zona norte de Mérida</p>
            </div>
            <div className="home-desarrollos__card-button">
              <a href="/selah">Conoce más</a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-contactanos">
        <div className="home-contactanos__title"><h3>Contáctanos por WhatsApp</h3></div>
        <div className="home-desarrollos__card-button">
          <a href="https://wa.link/1ztv2b" className="home-contactanos__link">WhatsApp <Image src={whatsapp} alt="whatsapp"/></a>
        </div>
      </div>
      <div className="home-footer-list1">
        <div className="home-footer-list1__title">
          <h3>¡Contáctanos!</h3>
        </div>
        <div className="home-footer-list1__text">
          <p>Invierte en desarrollos «gourmet» en Yucatán.</p>
        </div>
        <div className="home-footer-list1__text">
          <p>Cel: 9991094159</p>
        </div>
        <div className="home-footer-list1__text">
          <p>Calle 32 B # 522 x 9A y 11 colonia Maya Mérida Yucatán</p>
        </div>
      </div>
    </div>
  )
}