import Cl_mAspirante from "../models/Cl_mAspirante.js";

export default interface I_vAspirantes {
  cedula: number;
  nombre: string;
  tecnico: number;
  psicometico: number;
  entrevista: number;
  porcentaje: number;
  onAgregar(callback: () => void): void;
  onModificar(callback: () => void): void;
  onEliminar(callback: () => void): void;
  onVolver(callback: () => void): void;
  mostrar(): void;
  ocultar(): void;
  mostrarAspirantes(aspirantes: Cl_mAspirante[]): void;
  limpiarInputs(): void;
}
