
import Image from "next/image"
import "./BodyContacto.css"

import logotipo from "../../assets/images/logotipo.png"
import facebook from "../../assets/images/icon-facebook.svg"
import instagram from "../../assets/images/icon-instagram.svg"

export default function BodyContacto() {
  return (
    <div className="contacto-container">
      <div className="contacto-header">
        <div className="contacto-header__list">
          <div className="contacto-header__title"><h3>¡Contáctanos!</h3></div>
          <div className="contacto-header__image">
            <Image src={logotipo} alt="logotipo"/>
          </div>
        </div>
      </div>
      <div className="contacto-contactanos">
        <div className="contacto-contactanos__container">
          <div className="contacto-contactanos__columns">
            <div className="contacto-contactanos__col1">
              <div className="contacto-contactanos__col1-title"><h3>¡Contáctanos e invierte en nuestros proyectos!</h3></div>
              <div className="contacto-contactanos__form">
                <form action="#">
                  <div className="contacto-form">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" />
                  </div>
                  <div className="contacto-form">
                    <label htmlFor="email">Correo</label>
                    <input type="email" />
                  </div>
                  <div className="contacto-form">
                    <label htmlFor="phone">Celular</label>
                    <input type="number" />
                  </div>
                  <div className="contacto-form">
                    <label htmlFor="message">Mensaje</label>
                    <textarea name="message" id="message" rows={10} cols={50}></textarea>
                  </div>
                  <button type="submit">Enviar</button>
                </form>
              </div>
              <div className="contacto-contactanos__socialmedia">
                <div className="contacto-contactanos__icon">
                  <a href="" className="contacto-facebook"><Image src={facebook} alt="Logo"/></a>
                </div>
                <div className="contacto-contactanos__icon">
                  <a href="" className="contacto-instagram"><Image src={instagram} alt="Logo"/></a>
                </div>
              </div>
            </div>
            <div className="contacto-contactanos__col2">
              <div className="contacto-contactanos__col2-title"><h3>Visítanos o contáctanos por los medios siguientes:</h3></div>
              <div className="contacto-contactanos__text">
                <p><span>Celular:</span> 9991094159</p>
                <p><span>Dirección:</span> Calle 32B 522 x 9A y 11 Col. Maya Mérida</p>
              </div>
              <div className="contacto-contactanos__map">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}