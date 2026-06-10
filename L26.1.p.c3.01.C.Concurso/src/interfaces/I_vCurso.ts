export default interface I_vCurso {
  onBtVerEntregas(callback: () => void): void;
  onBtAspirantes(callback: () => void): void;
  deshabilitarBotones(): void;
  habilitarBotones(): void;
}
