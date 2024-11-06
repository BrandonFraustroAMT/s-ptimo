
import Image from "next/image"
import Formulario from "../formulario/Formulario"
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
              <div className="contacto-contactanos__form">
                <Formulario />
              </div>
              <div className="contacto-contactanos__socialmedia">
                <div className="contacto-contactanos__icon">
                  <a href="https://www.facebook.com/profile.php?id=61551041490040&mibextid=ZbWKwL" className="contacto-facebook"><Image src={facebook} alt="Logo"/></a>
                </div>
                <div className="contacto-contactanos__icon">
                  <a href="https://www.instagram.com/zeptimodesarrollos?igsh=NTc4MTIwNjQ2YQ==" className="contacto-instagram"><Image src={instagram} alt="Logo"/></a>
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
                <iframe style={{border: "0"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.842032509522!2d-89.58282961240634!3d21.01300359041281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5677006cba953d%3A0xff5c46e12d1478c5!2sZ%C4%93ptimo%20Desarrollos!5e0!3m2!1ses-419!2smx!4v1722371008575!5m2!1ses-419!2smx" width="600" height="350" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}