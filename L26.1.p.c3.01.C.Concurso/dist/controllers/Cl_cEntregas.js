import entregas from "../services/Cl_sEntregas.js";
export default class Cl_cEntregas {
    modelo;
    vista;
    volverCallback;
    constructor({ modelo, vista, volverCallback, }) {
        this.modelo = modelo;
        this.vista = vista;
        this.volverCallback = volverCallback;
        this.vista.onRecargar(() => this.btRecargarOnClick());
        this.vista.onChangeSoloCorrectos(() => this.onChangeSoloCorrectos());
        this.vista.onVolver(() => this.onVolver());
        this.vista.mostrar();
        this.btRecargarOnClick();
    }
    onChangeSoloCorrectos() {
        this.btRecargarOnClick();
    }
    onVolver() {
        this.vista.ocultar();
        this.volverCallback();
    }
    async btRecargarOnClick() {
        let resultado = await entregas.getEntregas();
        if (resultado.ok === false) {
            alert("Error: No se pudo conectar con el servidor");
            return;
        }
        this.modelo.setConcurso(resultado.tabla);
        this.vista.mostrarConcurso(this.modelo.getConcurso(this.vista.soloCorrectos));
    }
}
//# sourceMappingURL=Cl_cEntregas.js.map