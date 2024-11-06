import Image from "next/image"
import Formulario from "../formulario/Formulario"

import "./BodyVillasGaleira.css"

import mapa from "../../assets/images/ubicacion.png"
import vista1 from "../../assets/images/vista1.jpg"
import vista2 from "../../assets/images/vista2.jpg"
import vista3 from "../../assets/images/vista3.jpg"
import vista4 from "../../assets/images/vista4.jpg"
import vista5 from "../../assets/images/vista5.jpg"
import vista6 from "../../assets/images/vista6.jpg"
import vista7 from "../../assets/images/vista7.jpg"
import vista8 from "../../assets/images/vista8.jpg"
import vista9 from "../../assets/images/vista9.jpg"
import facebook from "../../assets/images/icon-facebook.svg"
import instagram from "../../assets/images/icon-instagram.svg"

export default function BodyVillasGaleira() {
  return (
    <div className="villasg-container">
      <div className="villasg-header">
        <div className="villasg-header__list"></div>
        <div className="villasg-header__list"></div>
        <div className="villasg-header__list">
          <div className="villasg-header__text">
            <p>Descubre nuestras exclusivas villas de lujo en Cholul, al norte de Mérida, Yucatán, con precios a partir de 3.35 MDP. Elige entre opciones desde 2 recámaras y 2.5 baños. Vive la elegancia y comodidad en un entorno privilegiado.</p>
          </div>
          <div className="villasg-header__button">
              <a id="btnWP" href="https://wa.me/message/CYPWGR6YF4EKP1">Contáctanos</a>
          </div>
        </div>
      </div>
      <div className="villasg-header__divider">
        <div className="villasg-header__divider-text">
          <h3>Conoce Villas Galeira Cholul</h3>
        </div>
      </div>
      <div className="villasg-divider">
      </div>
      <div className="villasg-ubicacion">
        <div className="villasg-ubicacion__columns">
          <div className="villasg-ubicacion__col1">
              <div className="villasg-ubicacion__title">
                <h3>Increíble ubicación</h3>
              </div>
              <div className="villasg-ubicacion__text">
                <p>Villas Galeira goza de una ubicación privilegiada, a tan solo una cuadra del Segundo Periférico de Mérida, Yucatán.
                Situada en Cholul, una de las áreas premium del norte de Mérida, ofrece un entorno inigualable para sus residentes.</p>
              </div>
          </div>
          <div className="villasg-ubicacion__col1">
              <div className="villasg-ubicacion__image">
                <Image src={mapa} alt="Mapa"/>
              </div>
          </div>
        </div>
      </div>
      <div className="villasg-disfruta">
        <div className="villasg-disfruta__list">
          <div className="villasg-disfruta__title"><h3>Disfruta a la orilla del mar</h3></div>
          <div className="villasg-disfruta__text">
            <p>Villas Galeira ofrece dos sofisticados modelos: el Modelo Momma de 160 m 2 y el Modelo Ufizzi de 180 m2.</p>
          </div>
          <div className="villasg-disfruta__text">
            <p>Cada villa está diseñada para proporcionar una vida cómoda y placentera, contando con estacionamiento techado, terraza con jardín, acabados de lujo y mucho más. Disfruta de una experiencia residencial incomparable.</p>
          </div>
          <div className="villasg-disfruta__gallery">
            <div className="villasg-disfruta__image">
              <Image src={vista1} alt="Vista 1"/>
            </div>
            <div className="villasg-disfruta__image">
              <Image src={vista2} alt="Vista 2"/>
            </div>
            <div className="villasg-disfruta__image">
              <Image src={vista3} alt="Vista 3"/>
            </div>
            <div className="villasg-disfruta__image">
              <Image src={vista4} alt="Vista 4"/>
            </div>
            <div className="villasg-disfruta__image">
              <Image src={vista5} alt="Vista 5"/>
            </div>
            <div className="villasg-disfruta__image">
              <Image src={vista6} alt="Vista 6"/>
            </div>
            <div className="villasg-disfruta__image">
              <Image src={vista7} alt="Vista 7"/>
            </div>
            <div className="villasg-disfruta__image">
              <Image src={vista8} alt="Vista 8"/>
            </div>
            <div className="villasg-disfruta__image">
              <Image src={vista9} alt="Vista 9"/>
            </div>
          </div>
        </div>
      </div>
      <div className="villasg-adquiere">
        <div className="villasg-adquiere__list">
          <div className="villasg-adquiere__title"><h3>Adquiere una de nuestras villas de lujo</h3></div>
          <div className="villasg-adquiere__text">
            <p>Déjanos tus datos y en seguida uno de nuestros asesores se contactará contigo</p>
          </div>
          <div>
            <Formulario />
          </div>
          <div className="villasg-adquiere__socialmedia">
            <div className="villasg-adquiere__text">
              <p>Síguenos en redes sociales: @villasgaleira</p>
            </div>
            <div className="villasg-adquiere__socialmedia-images">
              <div className="villasg-adquiere__icon">
                <a href="https://www.facebook.com/profile.php?id=61559966850215&mibextid=ZbWKwL"><Image src={facebook} alt="Logo"/></a>
              </div>
              <div className="villasg-adquiere__icon">
                <a href="https://www.instagram.com/villasgaleira?igsh=NTc4MTIwNjQ2YQ=="><Image src={instagram} alt="Logo"/></a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}