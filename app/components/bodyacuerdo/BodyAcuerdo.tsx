import Image from "next/image"

import "./BodyAcuerdo.css"
import logotipo from "../../assets/images/logotipo_ref_white_ZEPTIMO.png"

export default function BodyAcuerdo() {
  return (
    <div className="acuerdo-container">
      <div className="acuerdo-body">
        <div className="acuerdo-body__image">
          <Image src={logotipo} alt="Logotipo"/>
        </div>
        <div className="acuerdo-body__title"><h2>Aviso legal</h2></div>
        <div className="acuerdo-body__text">
          <h3>Identificación del Responsable</h3>
          <ul>
            <li><span>Nombre de la Empresa:</span> SAMACICERO S. de R.L. de C.V.</li>
            <li><span>Domicilio Social:</span> Calle 47 número 370 entre calle 56 y 58 colonia Francisco de Montejo</li>
            <li><span>Correo Electrónico:</span> admin@cicerorealestate.com.mx</li>
            <li><span>Teléfono:</span>999 109 4159</li>
            <li><span>Registro Fiscal: SAM200805EU4</span></li>
          </ul>
        </div>
        <div className="acuerdo-body__text">
          <h3>Objeto del Sitio Web</h3>
          <ul>
            <li>Los servicios que ofrece Zēptimo Desarrollos es el desarrollo de proyectos inmobiliarios en Yucatán.</li>
            <li>El objetivo de este sitio web es proporcionar información general sobre los proyectos inmobiliarios desarrollados por Zēptimo Desarrollos para lograr la comercialización de alguno de nuestros productos por los medios correspondientes.</li>
          </ul>
        </div>
        <div className="acuerdo-body__text">
          <h3>Propiedad Intelectual</h3>
          <ul>
            <li>Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos, y otros materiales, son propiedad de Zēptimo Desarrollos para lograr la comercialización de alguno de nuestros productos por los medios correspondientes.</li>
          </ul>
        </div>
        <div className="acuerdo-body__text">
          <h3>Protección de Datos Personales</h3>
          <ul>
            <li>Zēptimo Desarrollos se compromete a proteger los datos personales de los usuarios. Los datos recopilados serán tratados conforme a la legislación vigente en materia de protección de datos personales. Los usuarios pueden ejercer sus derechos de acceso, rectificación, cancelación y oposición mediante solicitud a admin@cicerorealestate.com.mx.</li>
          </ul>
        </div>
        <div className="acuerdo-body__text">
          <h3>Limitación de Responsabilidad</h3>
          <ul>
            <li>Zēptimo Desarrollos no se responsabiliza por los errores u omisiones en los contenidos del sitio web, ni por el uso que de ellos pueda hacer el usuario. Asimismo, no se responsabiliza de los contenidos de los enlaces a sitios externos.</li>
          </ul>
        </div>
        <div className="acuerdo-body__text">
          <h3>Modificaciones del Aviso Legal</h3>
          <ul>
            <li>Zēptimo Desarrollos se reserva el derecho de modificar el presente aviso legal en cualquier momento y sin previo aviso. Las modificaciones serán publicadas en esta página.</li>
          </ul>
        </div>
        <div className="acuerdo-body__text">
          <h3>Contacto</h3>
          <ul>
            <li>Para cualquier consulta o reclamación relacionada con el uso del sitio web, por favor, póngase en contacto con nosotros a través del correo electrónico admin@cicerorealestate.com.mx o llamando al 9994138055.</li>
          </ul>
        </div>

      </div>
    </div>
  )
}