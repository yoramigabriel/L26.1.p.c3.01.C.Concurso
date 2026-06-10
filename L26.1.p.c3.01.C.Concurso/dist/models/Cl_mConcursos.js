import Cl_mConcurso from "./Cl_mConcurso.js";
export default class Cl_mConcursos {
    Concurso = [];
    setConcurso(array) {
        this.Concurso = [];
        array.forEach((item) => {
            this.Concurso.push(new Cl_mConcurso({
                cedula: item.cedula,
                nombre: item.nombre,
                tecnico: item.tecnico,
                psicometico: item.psicometico,
                entrevista: item.entrevista,
                evaluaciones: item.evaluaciones,
                porcentaje: item.porcentaje,
                estatus: item.estatus,
            }));
        });
    }
    getConcurso(soloDestacados = false, baremoCargo = {}) {
        let ConcursoFiltrados = [];
        if (soloDestacados) {
            this.Concurso.forEach((concurso) => {
                if (concurso.cumpleBaremo(baremoCargo)) {
                    ConcursoFiltrados.push(concurso);
                }
            });
        }
        else {
            ConcursoFiltrados = this.Concurso;
        }
        return ConcursoFiltrados;
    }
    toJSON() {
        return {
            concurso: this.Concurso.map((con) => con.toJSON()),
        };
    }
}
//# sourceMappingURL=Cl_mConcursos.js.map