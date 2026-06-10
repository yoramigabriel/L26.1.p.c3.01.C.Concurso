export default class Cl_vEntregas {
    ui;
    btRecargar;
    btVolver;
    chkSoloCorrectos;
    tblRegistros;
    constructor() {
        this.ui = document.getElementById("entregas");
        this.tblRegistros = document.getElementById("entregas_tblRegistros");
        this.btRecargar = document.getElementById("entregas_btRecargar");
        this.btVolver = document.getElementById("entregas_btVolver");
        this.chkSoloCorrectos = document.getElementById("entregas_chkSoloCorrectos");
        this.chkSoloCorrectos.onchange = () => this.onChangeSoloCorrectos(() => { });
    }
    get soloCorrectos() {
        return this.chkSoloCorrectos.checked;
    }
    onChangeSoloCorrectos(callback) {
        this.chkSoloCorrectos.onchange = callback;
    }
    onRecargar(callback) {
        this.btRecargar.onclick = callback;
    }
    onVolver(callback) {
        this.btVolver.onclick = callback;
    }
    mostrarConcurso(concurso) {
        this.tblRegistros.innerHTML = "";
        concurso.forEach((concurso) => {
            this.tblRegistros.innerHTML += `<tr>
        <td>${concurso.cedula}</td>
        <td>${concurso.nombre}</td>
        <td>${concurso.evaluaciones}</td>
        <td>${concurso.estatus}</td>
      </tr>`;
        });
    }
    mostrar() {
        this.ui.removeAttribute("hidden");
    }
    ocultar() {
        this.ui.setAttribute("hidden", "true");
    }
}
//# sourceMappingURL=Cl_vEntregas.js.map