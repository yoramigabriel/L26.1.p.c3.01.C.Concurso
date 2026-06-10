export default class Cl_mAspirante {
  private tabla: string = "aspirante";
  private _cedula: number = 0;
  private _nombre: string = "";
  private _idCargo: number = 0;
  private _tecnico: number= 0
  private _psicometico: number = 0
  private _entrevista: number = 0
  private _porcentaje: number = 0

  constructor({ 
    cedula, 
    nombre, 
    idCargo, 
    tecnico,
    psicometico,
    entrevista,
    porcentaje
  }: { 
    cedula: number; 
    nombre: string; 
    idCargo: number; 
    tecnico: number;
    psicometico: number;
    entrevista: number;
    porcentaje: number;
  }) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.idCargo = idCargo;
    this.tecnico = tecnico;
    this.psicometico = psicometico;
    this.entrevista = entrevista;
    this.porcentaje = porcentaje;
  }

  set cedula(value: number) {
    this._cedula = +value;
  }
  get cedula(): number {
    return this._cedula;
  }

  set nombre(value: string) {
    this._nombre = value.trim();
  }
  get nombre(): string {
    return this._nombre;
  }

  set idCargo(value: number) {
    this._idCargo = +value;
  }
  get idCargo(): number {
    return this._idCargo;
  }

  set tecnico(value: number) {
    this._tecnico = +value;
  }
  get tecnico(): number {
    return this._tecnico;
  }

  set psicometico(value: number) {
    this._psicometico = +value;
  }
  get psicometico(): number {
    return this._psicometico;
  }

  set entrevista(value: number) {
    this._entrevista = +value;
  }
  get entrevista(): number {
    return this._entrevista;
  }

  set porcentaje(value: number) {
    this._porcentaje = +value;
  }
  get porcentaje(): number {
    return this._porcentaje;
  }

  obtenerPuntajeTotal(): number {
    const puntajes = [this._tecnico, this._psicometico, this._entrevista];
    if (puntajes.length === 0) return 0;
    const suma = puntajes.reduce((acc, curr) => acc + curr, 0);
    return +(suma / puntajes.length).toFixed(2);
  }
  porcentajeConcursantes(): number {
    const puntajes = [this._tecnico, this._psicometico, this._entrevista];
    if (puntajes.length === 0) return 0;
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
