import "./Formulario.css"

export default function Formulario() {
  return(
    <>
      <div className="formulario-title"><h3>¡Contáctanos e invierte en nuestros proyectos!</h3></div>
      <form action="#">
        <div className="formulario-form">
          <label htmlFor="name">Nombre</label>
          <input type="text" />
        </div>
        <div className="formulario-form">
          <label htmlFor="email">Correo</label>
          <input type="email" />
        </div>
        <div className="formulario-form">
          <label htmlFor="phone">Celular</label>
          <input type="number" />
        </div>
        <div className="formulario-form">
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" id="message" rows={10} cols={50}></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}