export interface I_vConcurso {
  get cedula(): number;
  get nombre(): string;
  get evaluaciones(): Record<string, number>;
  get porcentaje(): number;
  get estatus(): string;
  onEnviar(callback: () => void): void;
}
