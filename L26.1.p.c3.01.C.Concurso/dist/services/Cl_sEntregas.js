import Cl_sProyecto from "./Cl_sProyecto.js";
export default class Cl_sEntregas extends Cl_sProyecto {
    static async getEntregas() {
        return super.getTabla({ tabla: "concurso" });
    }
}
//# sourceMappingURL=Cl_sEntregas.js.map