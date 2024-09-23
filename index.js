const prompt = require('prompt-sync')();
/* Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
Debe imprimir ambos resultados por consola o por el DOM.
Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos. */

// Pido al usuario la temperatura en grados Celsius
console.log("Bienvenido al conversor de temperaturas");
let celsius = prompt("Ingrese la temperatura en grados Celsius: ");

// Convierto la entrada del usuario a número
celsius = parseFloat(celsius);

// Verifico si el dato ingresado es un número válido
while (isNaN(celsius)) {
    celsius = parseFloat(prompt("Ingrese un número válido: "));
}

// Convierto la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
let fahrenheit = (celsius * 9/5) + 32;
let kelvin = celsius + 273.15;

// Imprimo los resultados por consola
console.log(`La temperatura en grados Fahrenheit es: ${fahrenheit}`);
console.log(`La temperatura en grados Kelvin es: ${kelvin}`);

