'use client'
import axios from "axios"
import { useState, useEffect } from "react"
import { ProspectoService } from "@/services/prospecto.service"

import "./Formulario.css"

interface Sector {
  id: number;
}
interface Usuario {
  id: number;
}

interface Prospecto {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
  origen: string;
  etapa: string;
  tiempoEntrega: string;
  formaPago: string;
  habitaciones: string;
  deleted: boolean;
  intencionCompra: string;
  desarrolloInteres: string;
  empresa: string;
  sector: Sector;
  puesto: string;
  tamano: string;
  usuarioAsignado: Usuario;
  createDate: Date;
  createBy: number;
  canal: string;
  notas: string;
}

export default function Formulario() {
  const [referrer, setReferrer] = useState("");
  const [formData, setFormData] = useState<Partial<Prospecto>>({
    nombre: "",
    correo: "",
    telefono: "",
    origen: "Inbound",
    etapa: "New",
    tiempoEntrega: "",
    formaPago: "",
    habitaciones: "",
    intencionCompra: "",
    desarrolloInteres: "",
    empresa: "",
    sector: { id: 1 },
    puesto: "",
    tamano: "",
    usuarioAsignado: { id: 42 },
    canal: "",
    notas: "",
  });

  useEffect(() => {
    const referrerUrl = document.referrer || window.location.href;
    setReferrer(referrerUrl); // Guardamos el referrer en el estado
    setFormData((prevFormData) => ({
      ...prevFormData,
      canal: referrerUrl,
    }));
  }, [])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Si es el campo sector, asegurarse de que sea un objeto con el id
    if (name === "sector") {
      setFormData({
        ...formData,
        sector: { id: Number(value) }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const prospectoService = new ProspectoService();
    try {
      await prospectoService.save({
        ...formData,
        canal: referrer, // Usamos el valor de referrer almacenado en el estado
      } as Prospecto);
      //console.log("Prospecto guardado:", response.data);
      alert("Prospecto guardado con éxito");
      setFormData({
        nombre: "",
        correo: "",
        telefono: "",
        origen: "",
        etapa: "",
        tiempoEntrega: "",
        formaPago: "",
        habitaciones: "",
        intencionCompra: "",
        desarrolloInteres: "",
        empresa: "",
        sector: {id: 1},
        puesto: "",
        tamano: "",
        canal: referrer,
        notas: "",
      });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        alert("Hubo un error al guardar el prospecto: " + error.response?.data);
      } else {
        alert("Hubo un error inesperado");
      }
    }
  };
  
  return(
    <>
      <div className="formulario-title"><h3>¡Contáctanos e invierte en nuestros proyectos!</h3></div>
      <form onSubmit={handleSubmit}>
        <div className="formulario-form">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="nombre" onChange={handleChange}/>
        </div>
        <div className="formulario-form">
          <label htmlFor="email">Correo</label>
          <input type="email" name="correo" onChange={handleChange}/>
        </div>
        <div className="formulario-form">
          <label htmlFor="phone">Celular</label>
          <input type="number" name="telefono" onChange={handleChange}/>
        </div>
        <div className="formulario-form">
          <label htmlFor="message">Mensaje</label>
          <textarea name="notas" id="message" rows={10} cols={50}></textarea>
        </div>
        <input type="hidden" name="canal"/>
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}