import Cl_sProyecto from "./Cl_sProyecto.js";
import Cl_mConcurso from "../models/Cl_mConcurso.js";

export default class Cl_sEntregas extends Cl_sProyecto {
  static async getEntregas(): Promise<{
    ok: boolean;
    tabla: Cl_mConcurso[];
  }> {
    return super.getTabla({ tabla: "concurso" });
  }
}
