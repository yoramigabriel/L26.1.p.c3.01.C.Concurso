import Cl_mConcurso from "../models/Cl_mConcurso.js";
import sConcurso from "../services/Cl_sConcurso.js";
export default class Cl_cConcurso {
    vista;
    constructor(vista) {
        this.vista = vista;
        this.vista.onEnviar(() => this.btEnviarOnClick());
    }
    async btEnviarOnClick() {
        const concurso = new Cl_mConcurso({
            cedula: this.vista.cedula,
            nombre: this.vista.nombre,
            evaluaciones: this.vista.evaluaciones,
            porcentaje: this.vista.porcentaje,
            estatus: this.vista.estatus,
        });
        const resultado = await sConcurso.agregar(concurso);
        alert(resultado.mensaje);
    }
}
//# sourceMappingURL=Cl_cConcurso.js.map