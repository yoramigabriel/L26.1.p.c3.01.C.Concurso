import I_vCurso from "../interfaces/I_vCurso.js";

export default class Cl_vCurso implements I_vCurso {
  btVerEntregas: HTMLButtonElement;
  btAspirantes: HTMLButtonElement;
  constructor() {
    this.btVerEntregas = document.getElementById(
      "curso_btVerEntregas",
    ) as HTMLButtonElement;
    this.btAspirantes = document.getElementById(
      "curso_btAspirantes",
    ) as HTMLButtonElement;
  }
  onBtVerEntregas(callback: () => void): void {
    this.btVerEntregas.onclick = callback;
  }
  onBtAspirantes(callback: () => void): void {
    this.btAspirantes.onclick = callback;
  }
  deshabilitarBotones() {
    this.btVerEntregas.disabled = true;
    this.btAspirantes.disabled = true;
  }
  habilitarBotones() {
    this.btVerEntregas.disabled = false;
    this.btAspirantes.disabled = false;
  }
}
