import I_vAspirantes from "../interfaces/I_vAspirantes.js";
import Cl_mAspirante from "../models/Cl_mAspirante.js";

export default class Cl_vAspirantes implements I_vAspirantes {
  ui: HTMLElement;
  inCedula: HTMLInputElement;
  inNombre: HTMLInputElement;
  inTecnico: HTMLInputElement;
  inPsicometico: HTMLInputElement;
  inEntrevista: HTMLInputElement;
  inPorcentaje: HTMLInputElement;
  btAgregar: HTMLButtonElement;
  btVolver: HTMLButtonElement;
  btModificar: HTMLButtonElement;
  btEliminar: HTMLButtonElement;
  tblRegistros: HTMLTableSectionElement;

  constructor() {
    this.ui = document.getElementById("aspirantes") as HTMLElement;
    this.inCedula = document.getElementById(
      "aspirantes_inCedula",
    ) as HTMLInputElement;
    this.inNombre = document.getElementById(
      "aspirantes_inNombre",
    ) as HTMLInputElement;
    this.inTecnico = document.getElementById(
      "aspirantes_inTecnico",
    ) as HTMLInputElement;
    this.inPsicometico = document.getElementById(
      "aspirantes_inPsicometico",
    ) as HTMLInputElement;
    this.inEntrevista = document.getElementById(
      "aspirantes_inEntrevista",
    ) as HTMLInputElement;
    this.inPorcentaje = document.getElementById(
      "aspirantes_inPorcentaje",
    ) as HTMLInputElement;
    this.btAgregar = document.getElementById(
      "aspirantes_btAgregar",
    ) as HTMLButtonElement;
    this.btModificar = document.getElementById(
      "aspirantes_btModificar",
    ) as HTMLButtonElement;
    this.btEliminar = document.getElementById(
      "aspirantes_btEliminar",
    ) as HTMLButtonElement;
    this.btVolver = document.getElementById(
      "aspirantes_btVolver",
    ) as HTMLButtonElement;
    this.tblRegistros = document.getElementById(
      "aspirantes_tblRegistros",
    ) as HTMLTableSectionElement;
  }

  get cedula(): number {
    return parseInt(this.inCedula.value.trim()) || 0;
  }

  get nombre(): string {
    return this.inNombre.value.trim();
  }

  get tecnico(): number {
    return parseInt(this.inTecnico.value.trim()) || 0;
  }

  get psicometico(): number {
    return parseInt(this.inPsicometico.value.trim()) || 0;
  }

  get entrevista(): number {
    return parseInt(this.inEntrevista.value.trim()) || 0;
  }

  get porcentaje(): number {
    return parseFloat(this.inPorcentaje.value.trim()) || 0;
  }

  onAgregar(callback: () => void): void {
    this.btAgregar.onclick = callback;
  }

  onModificar(callback: () => void): void {
    this.btModificar.onclick = callback;
  }

  onEliminar(callback: () => void): void {
    this.btEliminar.onclick = callback;
  }

  onVolver(callback: () => void): void {
    this.btVolver.onclick = callback;
  }

  mostrar(): void {
    this.ui.removeAttribute("hidden");
  }

  ocultar(): void {
    this.ui.setAttribute("hidden", "true");
  }

  mostrarAspirantes(aspirantes: Cl_mAspirante[]): void {
    this.tblRegistros.innerHTML = "";
    aspirantes.forEach((aspirante) => {
      this.tblRegistros.innerHTML += `<tr>
        <td>${aspirante.cedula}</td>
        <td>${aspirante.nombre}</td>
        <td>${aspirante.tecnico}</td>
        <td>${aspirante.psicometico}</td>
        <td>${aspirante.entrevista}</td>
        <td>${aspirante.porcentajeConcursantes().toFixed(0)}%</td>
      </tr>`;
    });
  }

  limpiarInputs(): void {
    this.inCedula.value = "";
    this.inNombre.value = "";
    this.inTecnico.value = "";
    this.inPsicometico.value = "";
    this.inEntrevista.value = "";
    this.inPorcentaje.value = "";
  }
}
