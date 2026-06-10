export default class Cl_vConcurso {
    vista;
    inCedula;
    inNombre;
    inEvaluaciones;
    inPorcentaje;
    inEstatus;
    btCancelar;
    btEnviar;
    constructor() {
        this.vista = document.getElementById("concurso");
        this.inCedula = document.getElementById("concurso_inCedula");
        this.inNombre = document.getElementById("concurso_inNombre");
        this.inEvaluaciones = document.getElementById("concurso_inEvaluaciones");
        this.inPorcentaje = document.getElementById("concurso_inPorcentaje");
        this.inEstatus = document.getElementById("concurso_inEstatus");
        this.btCancelar = document.getElementById("concurso_btCancelar");
        this.btEnviar = document.getElementById("concurso_btEnviar");
    }
    onEnviar(callback) {
        this.btEnviar.onclick = callback;
    }
    get cedula() {
        return parseInt(this.inCedula.value.trim()) || 0;
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get evaluaciones() {
        const evaluaciones = {};
        const evaluacionValues = this.inEvaluaciones.value.trim().split(",");
        evaluacionValues.forEach((value) => {
            const [atributo, puntaje] = value.split(":").map((v) => v.trim());
            if (atributo && puntaje) {
                evaluaciones[atributo] = parseInt(puntaje) || 0;
            }
        });
        return evaluaciones;
    }
    get porcentaje() {
        return parseFloat(this.inPorcentaje.value.trim()) || 0;
    }
    get estatus() {
        if (this.porcentaje >= 30) {
            return "Seleccionado";
        }
        else {
            return "No Seleccionado";
        }
    }
}
//# sourceMappingURL=Cl_vConcurso.js.map