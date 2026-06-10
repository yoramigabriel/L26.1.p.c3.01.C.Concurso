export default class Cl_vCurso {
    btVerEntregas;
    btAspirantes;
    constructor() {
        this.btVerEntregas = document.getElementById("curso_btVerEntregas");
        this.btAspirantes = document.getElementById("curso_btAspirantes");
    }
    onBtVerEntregas(callback) {
        this.btVerEntregas.onclick = callback;
    }
    onBtAspirantes(callback) {
        this.btAspirantes.onclick = callback;
    }
    deshabilitarBotones() {
        this.btVerEntregas.disabled = true;
        this.btAspirantes.disabled = true;
    }
    habilitarBotones() {
        this.btVerEntregas.disabled = false;
        this.btAspirantes.disabled = false;
    }
}
//# sourceMappingURL=Cl_vCurso.js.map