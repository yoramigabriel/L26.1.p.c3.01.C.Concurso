import Cl_mConcurso from "./Cl_mConcurso.js";

export default class Cl_mConcursos {
  private Concurso: Cl_mConcurso[] = [];

  setConcurso(array: any[]) {
    this.Concurso = [];
    array.forEach((item) => {
      this.Concurso.push(
        new Cl_mConcurso({
          cedula: item.cedula,
          nombre: item.nombre,
          tecnico: item.tecnico,
          psicometico: item.psicometico,
          entrevista: item.entrevista,
          evaluaciones: item.evaluaciones,
          porcentaje: item.porcentaje,
          estatus: item.estatus,
        }),
      );
    });
  }

  getConcurso(
    soloDestacados: boolean = false, 
    baremoCargo: Record<string, number> = {}
  ): Cl_mConcurso[] {
    let ConcursoFiltrados: Cl_mConcurso[] = [];

    if (soloDestacados) {
      this.Concurso.forEach((concurso) => {
        if (concurso.cumpleBaremo(baremoCargo)) {
          ConcursoFiltrados.push(concurso);
        }
      });
    } else {
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