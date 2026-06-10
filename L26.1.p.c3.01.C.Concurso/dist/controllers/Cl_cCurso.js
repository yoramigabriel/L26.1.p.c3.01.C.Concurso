import Cl_mAspirantes from "../models/Cl_mAspirantes.js";
import Cl_mConcursos from "../models/Cl_mConcursos.js";
import Cl_vEntregas from "../views/Cl_vEntregas.js";
import Cl_vAspirantes from "../views/Cl_vAspirantes.js";
import cEntregas from "./Cl_cEntregas.js";
import cAspirantes from "./Cl_cAspirantes.js";
export default class Cl_cCurso {
    vista;
    constructor({ vista }) {
        this.vista = vista;
        this.vista.onBtVerEntregas(() => this.onBtVerEntregas());
        this.vista.onBtAspirantes(() => this.onBtAspirantes());
    }
    onBtVerEntregas() {
        this.vista.deshabilitarBotones();
        const vEntregas = new Cl_vEntregas();
        const mConcursos = new Cl_mConcursos();
        new cEntregas({
            modelo: mConcursos,
            vista: vEntregas,
            volverCallback: () => this.vista.habilitarBotones(),
        });
    }
    onBtAspirantes() {
        this.vista.deshabilitarBotones();
        const vAspirante = new Cl_vAspirantes();
        const mAspirantes = new Cl_mAspirantes();
        new cAspirantes({
            modelo: mAspirantes,
            vista: vAspirante,
            volverCallback: () => this.vista.habilitarBotones(),
        });
    }
}
//# sourceMappingURL=Cl_cCurso.js.map