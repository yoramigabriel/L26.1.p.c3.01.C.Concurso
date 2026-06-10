import Cl_sProyecto from "./Cl_sProyecto.js";
export default class Cl_sAspirantes extends Cl_sProyecto {
    static async existe(aspiranteId) {
        return super.existeId({
            tabla: "aspirante",
            tablaId: aspiranteId,
            tablaIdName: "cedula",
        });
    }
    static async agregar(nuevoAspirante) {
        if (nuevoAspirante.cedula <= 0) {
            return {
                ok: false,
                mensaje: "La cédula debe ser un número positivo",
            };
        }
        if (!nuevoAspirante.nombre || nuevoAspirante.nombre.trim() === "") {
            return {
                ok: false,
                mensaje: "El nombre es obligatorio",
            };
        }
        const chkExiste = await super.existeId({
            tabla: "aspirante",
            tablaId: nuevoAspirante.cedula,
            tablaIdName: "cedula",
        });
        if (!chkExiste.ok) {
            return {
                ok: false,
                mensaje: "Error: No se pudo conectar con el servidor",
            };
        }
        if (chkExiste.existe) {
            return {
                ok: false,
                mensaje: "Ya existe un estudiante registrado con esa cédula",
            };
        }
        return super.agregar(nuevoAspirante.toJSON());
    }
    /**
     * Modifica un estudiante existente con validaciones
     */
    static async modificar(aspiranteId, datos) {
        if (aspiranteId <= 0) {
            return { ok: false, mensaje: "Cédula inválida" };
        }
        const existe = await super.existeId({
            tabla: "aspirante",
            tablaId: aspiranteId,
            tablaIdName: "cedula",
        });
        if (!existe.ok) {
            return { ok: false, mensaje: "Error de conexión" };
        }
        if (!existe.existe) {
            return { ok: false, mensaje: "No existe un aspirante con esa cédula" };
        }
        if (!datos.nombre || datos.nombre.trim() === "") {
            return { ok: false, mensaje: "El nombre es obligatorio" };
        }
        return super.modificar(aspiranteId, datos, "cedula");
    }
    static async eliminar(aspiranteId) {
        if (aspiranteId <= 0) {
            return { ok: false, mensaje: "Cédula inválida" };
        }
        // ✅ VALIDACIÓN 2: Eliminar (la base de datos valida existencia)
        return super.eliminar(aspiranteId, "aspirante", "cedula");
    }
    static async getAspirantes() {
        return super.getTabla({ tabla: "aspirante" });
    }
}
//# sourceMappingURL=Cl_sAspirantes.js.map