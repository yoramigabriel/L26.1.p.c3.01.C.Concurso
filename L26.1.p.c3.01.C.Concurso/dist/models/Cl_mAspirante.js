export default class Cl_mAspirante {
    tabla = "aspirante";
    _cedula = 0;
    _nombre = "";
    _idCargo = 0;
    _tecnico = 0;
    _psicometico = 0;
    _entrevista = 0;
    _porcentaje = 0;
    constructor({ cedula, nombre, idCargo, tecnico, psicometico, entrevista, porcentaje }) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.idCargo = idCargo;
        this.tecnico = tecnico;
        this.psicometico = psicometico;
        this.entrevista = entrevista;
        this.porcentaje = porcentaje;
    }
    set cedula(value) {
        this._cedula = +value;
    }
    get cedula() {
        return this._cedula;
    }
    set nombre(value) {
        this._nombre = value.trim();
    }
    get nombre() {
        return this._nombre;
    }
    set idCargo(value) {
        this._idCargo = +value;
    }
    get idCargo() {
        return this._idCargo;
    }
    set tecnico(value) {
        this._tecnico = +value;
    }
    get tecnico() {
        return this._tecnico;
    }
    set psicometico(value) {
        this._psicometico = +value;
    }
    get psicometico() {
        return this._psicometico;
    }
    set entrevista(value) {
        this._entrevista = +value;
    }
    get entrevista() {
        return this._entrevista;
    }
    set porcentaje(value) {
        this._porcentaje = +value;
    }
    get porcentaje() {
        return this._porcentaje;
    }
    obtenerPuntajeTotal() {
        const puntajes = [this._tecnico, this._psicometico, this._entrevista];
        if (puntajes.length === 0)
            return 0;
        const suma = puntajes.reduce((acc, curr) => acc + curr, 0);
        return +(suma / puntajes.length).toFixed(2);
    }
    porcentajeConcursantes() {
        const puntajes = [this._tecnico, this._psicometico, this._entrevista];
        if (puntajes.length === 0)
            return 0;
        const suma = puntajes.reduce((acc, curr) => acc + curr, 0);
        const promedio = suma / puntajes.length;
        return +(promedio * 100).toFixed(0);
    }
    toJSON() {
        return {
            tabla: this.tabla,
            cedula: this.cedula,
            nombre: this.nombre,
            id_cargo: this.idCargo,
            tecnico: this.tecnico,
            psicometico: this.psicometico,
            entrevista: this.entrevista,
            porcentaje: this.porcentajeConcursantes()
        };
    }
}
//# sourceMappingURL=Cl_mAspirante.js.map