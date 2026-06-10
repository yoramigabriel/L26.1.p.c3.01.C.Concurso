import I_vEntregas from "../interfaces/I_vEntregas.js";
import entregas from "../services/Cl_sEntregas.js";
import Cl_mConcursos from "../models/Cl_mConcursos.js";

export default class Cl_cEntregas {
  private modelo: Cl_mConcursos;
  private vista: I_vEntregas;
  private volverCallback: () => void;
  constructor({
    modelo,
    vista,
    volverCallback,
  }: {
    modelo: Cl_mConcursos;
    vista: I_vEntregas;
    volverCallback: () => void;
  }) {
    this.modelo = modelo;
    this.vista = vista;
    this.volverCallback = volverCallback;
    this.vista.onRecargar(() => this.btRecargarOnClick());
    this.vista.onChangeSoloCorrectos(() => this.onChangeSoloCorrectos());
    this.vista.onVolver(() => this.onVolver());
    this.vista.mostrar();
    this.btRecargarOnClick();
  }
  onChangeSoloCorrectos() {
    this.btRecargarOnClick();
  }
  onVolver() {
    this.vista.ocultar();
    this.volverCallback();
  }
  async btRecargarOnClick() {
    let resultado = await entregas.getEntregas();
    if (resultado.ok === false) {
      alert("Error: No se pudo conectar con el servidor");
      return;
    }
    this.modelo.setConcurso(resultado.tabla);
    this.vista.mostrarConcurso(this.modelo.getConcurso(this.vista.soloCorrectos));
  }
}
