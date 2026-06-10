export default class Cl_vAspirantes {
    ui;
    inCedula;
    inNombre;
    inTecnico;
    inPsicometico;
    inEntrevista;
    inPorcentaje;
    btAgregar;
    btVolver;
    btModificar;
    btEliminar;
    tblRegistros;
    constructor() {
        this.ui = document.getElementById("aspirantes");
        this.inCedula = document.getElementById("aspirantes_inCedula");
        this.inNombre = document.getElementById("aspirantes_inNombre");
        this.inTecnico = document.getElementById("aspirantes_inTecnico");
        this.inPsicometico = document.getElementById("aspirantes_inPsicometico");
        this.inEntrevista = document.getElementById("aspirantes_inEntrevista");
        this.inPorcentaje = document.getElementById("aspirantes_inPorcentaje");
        this.btAgregar = document.getElementById("aspirantes_btAgregar");
        this.btModificar = document.getElementById("aspirantes_btModificar");
        this.btEliminar = document.getElementById("aspirantes_btEliminar");
        this.btVolver = document.getElementById("aspirantes_btVolver");
        this.tblRegistros = document.getElementById("aspirantes_tblRegistros");
    }
    get cedula() {
        return parseInt(this.inCedula.value.trim()) || 0;
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get tecnico() {
        return parseInt(this.inTecnico.value.trim()) || 0;
    }
    get psicometico() {
        return parseInt(this.inPsicometico.value.trim()) || 0;
    }
    get entrevista() {
        return parseInt(this.inEntrevista.value.trim()) || 0;
    }
    get porcentaje() {
        return parseFloat(this.inPorcentaje.value.trim()) || 0;
    }
    onAgregar(callback) {
        this.btAgregar.onclick = callback;
    }
    onModificar(callback) {
        this.btModificar.onclick = callback;
    }
    onEliminar(callback) {
        this.btEliminar.onclick = callback;
    }
    onVolver(callback) {
        this.btVolver.onclick = callback;
    }
    mostrar() {
        this.ui.removeAttribute("hidden");
    }
    ocultar() {
        this.ui.setAttribute("hidden", "true");
    }
    mostrarAspirantes(aspirantes) {
        this.tblRegistros.innerHTML = "";
        aspirantes.forEach((aspirante) => {
            this.tblRegistros.innerHTML += `<tr>
        <td>${aspirante.cedula}</td>
        <td>${aspirante.nombre}</td>
        <td>${aspirante.tecnico}</td>
        <td>${aspirante.psicometico}</td>
        <td>${aspirante.entrevista}</td>
        <td>${aspirante.porcentajeConcursantes().toFixed(0)}%</td>
      </tr>`;
        });
    }
    limpiarInputs() {
        this.inCedula.value = "";
        this.inNombre.value = "";
        this.inTecnico.value = "";
        this.inPsicometico.value = "";
        this.inEntrevista.value = "";
        this.inPorcentaje.value = "";
    }
}
//# sourceMappingURL=Cl_vAspirantes.js.map