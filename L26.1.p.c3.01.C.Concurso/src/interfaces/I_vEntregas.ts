import Cl_mConcurso from "../models/Cl_mConcurso";

export default interface I_vEntregas {
  soloCorrectos: boolean;
  mostrarConcurso(concurso: Cl_mConcurso[]): void;
  onRecargar(callback: () => void): void;
  onChangeSoloCorrectos(callback: () => void): void;
  onVolver(callback: () => void): void;
  mostrar(): void;
  ocultar(): void;
}
