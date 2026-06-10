export default class Cl_mConcurso {
  private tabla: string = "concurso";
  private _cedula: number = 0;
  private _nombre: string = "";
  private _Tecnico: number = 0;
  private _Psicometico: number = 0
  private _Entrevista: number = 0;
  private _evaluaciones: Record<string, number> = {};

  constructor({
    cedula,
    nombre,
    tecnico = 0,
    psicometico = 0,
    entrevista = 0,
    evaluaciones = {},
  }: {
    cedula: number;
    nombre: string;
    tecnico?: number;
    psicometico?: number;
    entrevista?: number;
    evaluaciones?: Record<string, number>;
    porcentaje?: number;
    estatus: string;
  }) {
    this.cedula = cedula;
    this.nombre = nombre;
    this._Tecnico = tecnico;
    this._Psicometico = psicometico;
    this._Entrevista = entrevista;
    this.evaluaciones = evaluaciones;
  }

  public get cedula(): number {
    return this._cedula;
  }

  public set cedula(value: number) {
    this._cedula = +value;
  }

  public get nombre(): string {
    return this._nombre;
  }

  public set nombre(value: string) {
    this._nombre = value.trim();
  }
  public get tecnico(): number {
    return this._Tecnico;
  }

  public set tecnico(value: number) {
    this._Tecnico = +value;
  }
  public get psicometico(): number {
    return this._Psicometico;
  }

  public set psicometico(value: number) {
    this._Psicometico = +value;
  }

  public get entrevista(): number {
    return this._Entrevista;
  }

  public set entrevista(value: number) {
    this._Entrevista = +value;
  }

  public get evaluaciones(): Record<string, number> {
    return this._evaluaciones;
  }

  public set evaluaciones(value: Record<string, number>) {
    this._evaluaciones = value;
  }
  public get porcentaje(): number {
    return this.porcentajeConcursantes();
  }

  public get estatus(): string {
    if (this.porcentajeConcursantes() >= 80) {
      return "Selecionado";
    } else return "No Seleccionado";
   
  }

  public obtenerPuntajeTotal(): number {
    const puntajeTecnico = this.tecnico || 0;
    const puntajePsicometico = this.psicometico || 0;
    const puntajeEntrevista = this.entrevista || 0;
    return puntajeTecnico + puntajePsicometico + puntajeEntrevista;
  }
  public porcentajeConcursantes(): number {
    const totalPuntaje = this.obtenerPuntajeTotal();
    const puntajeMaximo = 300;
    return totalPuntaje / puntajeMaximo * 100;
  }

  public cumpleBaremo(baremo: Record<string, number>): boolean {
    const atributosRequeridos = Object.keys(baremo);
    if (atributosRequeridos.length === 0) return false;

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
