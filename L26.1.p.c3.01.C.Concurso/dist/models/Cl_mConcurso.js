export default class Cl_mConcurso {
    tabla = "concurso";
    _cedula = 0;
    _nombre = "";
    _Tecnico = 0;
    _Psicometico = 0;
    _Entrevista = 0;
    _evaluaciones = {};
    constructor({ cedula, nombre, tecnico = 0, psicometico = 0, entrevista = 0, evaluaciones = {}, }) {
        this.cedula = cedula;
        this.nombre = nombre;
        this._Tecnico = tecnico;
        this._Psicometico = psicometico;
        this._Entrevista = entrevista;
        this.evaluaciones = evaluaciones;
    }
    get cedula() {
        return this._cedula;
    }
    set cedula(value) {
        this._cedula = +value;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value.trim();
    }
    get tecnico() {
        return this._Tecnico;
    }
    set tecnico(value) {
        this._Tecnico = +value;
    }
    get psicometico() {
        return this._Psicometico;
    }
    set psicometico(value) {
        this._Psicometico = +value;
    }
    get entrevista() {
        return this._Entrevista;
    }
    set entrevista(value) {
        this._Entrevista = +value;
    }
    get evaluaciones() {
        return this._evaluaciones;
    }
    set evaluaciones(value) {
        this._evaluaciones = value;
    }
    get porcentaje() {
        return this.porcentajeConcursantes();
    }
    get estatus() {
        if (this.porcentajeConcursantes() >= 80) {
            return "Selecionado";
        }
        else
            return "No Seleccionado";
    }
    obtenerPuntajeTotal() {
        const puntajeTecnico = this.tecnico || 0;
        const puntajePsicometico = this.psicometico || 0;
        const puntajeEntrevista = this.entrevista || 0;
        return puntajeTecnico + puntajePsicometico + puntajeEntrevista;
    }
    porcentajeConcursantes() {
        const totalPuntaje = this.obtenerPuntajeTotal();
        const puntajeMaximo = 300;
        return totalPuntaje / puntajeMaximo * 100;
    }
    cumpleBaremo(baremo) {
        const atributosRequeridos = Object.keys(baremo);
        if (atributosRequeridos.length === 0)
            return false;
        return atributosRequeridos.every((atributo) => {
            const notaObtenida = this._evaluaciones[atributo] || 0;
            const notaMinima = baremo[atributo];
            return notaObtenida >= notaMinima;
        });
    }
    toJSON() {
        return {
            tabla: this.tabla,
            cedula: this.cedula,
            nombre: this.nombre,
            tecnico: this.tecnico,
            psicometico: this.psicometico,
            entrevista: this.entrevista,
            puntajeTotal: this.obtenerPuntajeTotal(),
            porcentaje: this.porcentajeConcursantes(),
            evaluaciones: this.evaluaciones,
            estatus: this.estatus,
        };
    }
}
//# sourceMappingURL=Cl_mConcurso.js.map