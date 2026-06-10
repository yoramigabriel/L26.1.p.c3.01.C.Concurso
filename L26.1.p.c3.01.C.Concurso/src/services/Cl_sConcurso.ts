import Cl_mConcurso from "../models/Cl_mConcurso.js";
import Cl_sProyecto from "./Cl_sProyecto.js";

export default class Cl_sConcurso extends Cl_sProyecto {
  static async existe(
    concursoId: number,
  ): Promise<{ ok: boolean; existe: boolean }> {
    return super.existeId({
      tabla: "concurso",
      tablaId: concursoId,
      tablaIdName: "cedula",
    });
  }

  static async agregar(
    nuevoConcurso: Cl_mConcurso,
  ): Promise<{ ok: boolean; mensaje: string }> {
    if (nuevoConcurso.cedula <= 0) {
      return {
        ok: false,
        mensaje: "La cédula debe ser un número positivo",
      };
    }

    if (!nuevoConcurso.nombre || nuevoConcurso.nombre.trim() === "") {
      return {
        ok: false,
        mensaje: "El nombre es obligatorio",
      };
    }

    const chkExiste = await super.existeId({
      tabla: "concurso",
      tablaId: nuevoConcurso.cedula,
      tablaIdName: "cedula",
    });

    if (!chkExiste.ok) {
      return {
        ok: false,
        mensaje: "Error: No se pudo conectar con el servidor",
      };
    }

    if (chkExiste.existe) {
      return {
        ok: false,
        mensaje: "Ya existe un concurso registrado con esa cédula",
      };
    }

    return super.agregar(nuevoConcurso.toJSON());
  }
}
