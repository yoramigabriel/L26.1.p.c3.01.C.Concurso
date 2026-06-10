import sAspirantes from "../services/Cl_sAspirantes.js";
import I_vAspirantes from "../interfaces/I_vAspirantes.js";
import Cl_mAspirante from "../models/Cl_mAspirante.js";
import Cl_mAspirantes from "../models/Cl_mAspirantes.js";

export default class Cl_cAspirantes {
  private modelo: Cl_mAspirantes;
  private vista: I_vAspirantes;
  private volverCallback: () => void;

  constructor({
    modelo,
    vista,
    volverCallback,
  }: {
    modelo: Cl_mAspirantes;
    vista: I_vAspirantes;
    volverCallback: () => void;
  }) {
    this.modelo = modelo;
    this.vista = vista;
    this.volverCallback = volverCallback;

    // ✅ Solo configura eventos
    this.vista.onAgregar(() => this.onAgregar());
    this.vista.onModificar(() => this.onModificar());
    this.vista.onEliminar(() => this.onEliminar());
    this.vista.onVolver(() => this.onVolver());

    this.vista.mostrar();
    this.cargarAspirantes();
  }

  // ✅ MÉTODO DELGADO: Solo coordina
  private async onAgregar() {
    const aspirante = new Cl_mAspirante({
      cedula: this.vista.cedula,
      nombre: this.vista.nombre,
      idCargo: 0,
      tecnico: this.vista.tecnico,
      psicometico: this.vista.psicometico,
      entrevista: this.vista.entrevista,
      porcentaje: this.vista.porcentaje,
    });

    const resultado = await sAspirantes.agregar(aspirante);
    alert(resultado.mensaje);
    if (resultado.ok) this.cargarAspirantes();
  }

  // ✅ MÉTODO DELGADO: Solo coordina + confirmación UI
  private async onModificar() {
    const cedula = this.vista.cedula;

    // ✅ Validación de UI (pertenece aquí)
    if (!cedula) {
      alert("Ingrese una cédula válida");
      return;
    }

    // ✅ Confirmación al usuario (pertenece aquí)
    if (!confirm(`¿Modificar estudiante con cédula ${cedula}?`)) {
      return;
    }

    const aspirante = new Cl_mAspirante({
      cedula,
      nombre: this.vista.nombre,
      idCargo: 0,
      tecnico: this.vista.tecnico,
      psicometico: this.vista.psicometico,
      entrevista: this.vista.entrevista,
      porcentaje: this.vista.porcentaje,
    });

    const resultado = await sAspirantes.modificar(cedula, aspirante.toJSON());
    alert(resultado.mensaje);
    if (resultado.ok) this.cargarAspirantes();
  }

  // ✅ MÉTODO DELGADO: Solo coordina + confirmación UI
  private async onEliminar() {
    const cedula = this.vista.cedula;

    // ✅ Validación de UI
    if (!cedula) {
      alert("Ingrese una cédula válida");
      return;
    }

    // ✅ Confirmación al usuario
    if (!confirm(`¿Eliminar estudiante con cédula ${cedula}?`)) {
      return;
    }

    const resultado = await sAspirantes.eliminar(cedula);
    alert(resultado.mensaje);
    if (resultado.ok) this.cargarAspirantes();
  }

  private onVolver() {
    this.vista.ocultar();
    this.volverCallback();
  }

  async cargarAspirantes() {
    const resultado = await sAspirantes.getAspirantes();
    if (!resultado.ok) {
      alert("Error: No se pudo conectar con el servidor");
      return;
    }
    this.modelo.setAspirantes(resultado.tabla);
    this.vista.mostrarAspirantes(this.modelo.getAspirantes());
  }
}
