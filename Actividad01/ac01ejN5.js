//Descripcion: Actividad01 Ejercicio5
/**
 * 
 * Combina dos arrays de nombres y apellidos de forma aleatoria y formatea los nombres.
 * @param {string[]} nombres - Array de nombres.
 * @param {string[]} apellidos - Array de apellidos.
 * @returns {string[]} - Nuevo array con nombres combinados y formateados.
 */
function combinarNombres(nombres, apellidos) {
    // Validar que ambos arrays no estén vacíos
    if (nombres.length === 0 || apellidos.length === 0) {
        console.error("Error: Ambos arrays deben contener elementos.");
        return [];
    }

    var nombresFormateados = [];

    // Recorrer los arrays de nombres y apellidos y combinarlos de forma aleatoria
    for (var i = 0; i < Math.max(nombres.length, apellidos.length); i++) {
        var nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
        var apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];

        // Formatear el nombre y apellido combinado
        var nombreCompleto = nombreAleatorio.charAt(0).toUpperCase() + nombreAleatorio.slice(1).toLowerCase();
        var apellidoCompleto = apellidoAleatorio.charAt(0).toUpperCase() + apellidoAleatorio.slice(1).toLowerCase();

        nombresFormateados.push(nombreCompleto + " " + apellidoCompleto);
    }

    return nombresFormateados;
}

// Ejemplo de uso:
var nombres = ["juan", "maría", "carlos"];
var apellidos = ["garcía", "pérez", "martínez"];

var nombresFormateados = combinarNombres(nombres, apellidos);
console.log(nombresFormateados);