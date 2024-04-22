/*
Descripcion: Actividad01 Ejercicio3 
Desarrollador: Ruth Alejandra Quioz Asturizaga 
Fecha: 2024-04-20
Cambios: Ninguno
*/

// Función para verificar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Función para generar y mostrar números primos
function generarPrimos() {
    const cantidad = parseInt(document.getElementById("cantidad").value);
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingrese un número válido mayor que cero.");
        return;
    }

    const primos = [];
    let contadorIntentos = 0;
    while (primos.length < cantidad && contadorIntentos < 1000) {
        const numeroAleatorio = Math.floor(Math.random() * 110);
        if (esPrimo(numeroAleatorio)) {
            primos.push(numeroAleatorio);
        }
        contadorIntentos++;
    }

    if (primos.length < cantidad) {
        alert("No se pudieron generar suficientes números primos menores que 110.");
    }

    mostrarPrimos(primos);
}

// Función para mostrar los números primos en la página
function mostrarPrimos(primos) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Números Primos Generados:</h2>";
    const ul = document.createElement("ul");
    primos.forEach(primo => {
        const li = document.createElement("li");
        li.textContent = `${primo} - ${primo} es primo y fue generado aleatoriamente.`;
        ul.appendChild(li);
    });
    resultadoDiv.appendChild(ul);
}
