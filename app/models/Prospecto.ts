import { Sector } from "./Sector";
import { Usuario } from "./Usuario";

export class Prospecto {
  id: number = 0;
  nombre: string = "";
  correo: string = "";
  telefono: string = "";
  origen: string = "";
  etapa: string = "";
  tiempoEntrega: string = "";
  formaPago: string = "";
  habitaciones: string = "";
  deleted: boolean = true;
  intencionCompra: string = "";
  desarrolloInteres: string = "";
  empresa: string = "";
  sector: Sector = new Sector();
  puesto: string = "";
  tamano: string = "";
  usuarioAsignado: Usuario = new Usuario();
  createDate: Date = new Date();
  createBy: number = 0;
  canal: string = "";
  notas: string = "";
}