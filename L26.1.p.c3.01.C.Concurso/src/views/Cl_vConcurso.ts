import { I_vConcurso } from "../interfaces/I_vConcurso.js";

export default class Cl_vConcurso implements I_vConcurso {
  vista: HTMLElement | null;
  inCedula: HTMLInputElement;
  inNombre: HTMLInputElement;
  inEvaluaciones: HTMLInputElement;
  inPorcentaje: HTMLInputElement;
  inEstatus: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btEnviar: HTMLButtonElement;
  constructor() {
    this.vista = document.getElementById("concurso") as HTMLElement;
    this.inCedula = document.getElementById(
      "concurso_inCedula",
    ) as HTMLInputElement;
    this.inNombre = document.getElementById(
      "concurso_inNombre",
    ) as HTMLInputElement;
    this.inEvaluaciones = document.getElementById(
      "concurso_inEvaluaciones",
    ) as HTMLInputElement;
    this.inPorcentaje = document.getElementById(
      "concurso_inPorcentaje",
    ) as HTMLInputElement;
    this.inEstatus = document.getElementById(
      "concurso_inEstatus",
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "concurso_btCancelar",
    ) as HTMLButtonElement;
    this.btEnviar = document.getElementById(
      "concurso_btEnviar",
    ) as HTMLButtonElement;
  }
  onEnviar(callback: () => void): void {
    this.btEnviar.onclick = callback;
  }
  get cedula(): number {
    return parseInt(this.inCedula.value.trim()) || 0;
  }
  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get evaluaciones(): Record<string, number> {
    const evaluaciones: Record<string, number> = {};
    const evaluacionValues = this.inEvaluaciones.value.trim().split(",");
    evaluacionValues.forEach((value) => {
      const [atributo, puntaje] = value.split(":").map((v) => v.trim());
      if (atributo && puntaje) {
        evaluaciones[atributo] = parseInt(puntaje) || 0;
      }
    });
    return evaluaciones;
  }
  get porcentaje(): number {
    return parseFloat(this.inPorcentaje.value.trim()) || 0;
  }
  get estatus(): string {
    if (this.porcentaje >= 30) {
      return "Seleccionado";
    } else {
      return "No Seleccionado";
    }
  }
}
