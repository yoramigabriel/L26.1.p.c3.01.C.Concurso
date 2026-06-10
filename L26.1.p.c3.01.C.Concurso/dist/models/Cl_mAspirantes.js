import Cl_mAspirante from "./Cl_mAspirante.js";
export default class Cl_mAspirantes {
    aspirantes = [];
    setAspirantes(array) {
        this.aspirantes = [];
        array.forEach((aspirante) => {
            this.aspirantes.push(new Cl_mAspirante({
                cedula: aspirante.cedula,
                nombre: aspirante.nombre,
                idCargo: aspirante.idCargo,
                tecnico: aspirante.tecnico,
                psicometico: aspirante.psicometico,
                entrevista: aspirante.entrevista,
                porcentaje: aspirante.porcentaje,
            }));
        });
    }
    getAspirantes() {
        return this.aspirantes;
    }
    obtenerCandidatosDestacados(idCargo, puntajeMinimoBaremo) {
        return this.aspirantes.filter((aspirante) => {
            const aplicaACargo = aspirante.idCargo === idCargo;
            const superaBaremo = aspirante.obtenerPuntajeTotal() >= puntajeMinimoBaremo;
            const porcentaje = aspirante.porcentajeConcursantes();
            return aplicaACargo && superaBaremo && porcentaje;
        });
    }
    obtenerRankingPorCargo(idCargo) {
        return this.aspirantes
            .filter((aspirante) => aspirante.idCargo === idCargo)
            .sort((a, b) => {
            const diferenciaPuntaje = b.obtenerPuntajeTotal() - a.obtenerPuntajeTotal();
            if (diferenciaPuntaje === 0) {
                return b.porcentajeConcursantes() - a.porcentajeConcursantes();
            }
            return diferenciaPuntaje;
        });
    }
}
//# sourceMappingURL=Cl_mAspirantes.js.map