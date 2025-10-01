//1. Escribe un comentario en una linea

// Hola

//2. Escribe un comentario en varias lineas

/* Hola,
¿Como estas? */

//3. Declara variables con valores asociados a todos los tipos de datos y imprimelos en la consola

let numeros = 1;
let palabra = "Hola";
let boolean = true;
let sinDefinir;

console.log(numeros)
console.log(palabra)
console.log(boolean)
console.log(sinDefinir)
console.log("\n******\n")

//4.Modifica los valores de las variables por otros valores y vuelve a imprimirlos en la consola.

numeros = 2
palabra = "Adios"
boolean = false
sinDefinir = "A"

console.log(numeros)
console.log(palabra)
console.log(boolean)
console.log(sinDefinir)
console.log("\n******\n")

//5. Declara constantes con valores asociados a todos los tipos de datos y imprimelos en la consola.

const num = 1;
const word = "Hola";
const bool = true;

console.log(num)
console.log(word)
console.log(bool)
console.log("\n******\n")


//6. Crea una variable para cada operador aritmetico y muestra su resultado en la consola.

let suma = 3+2;
let resta = 10-5;
let multiplicar = 3*2;
let dividir = 10/5;
let modulo = 10%5;

console.log(suma)
console.log(resta)
console.log(multiplicar)
console.log(dividir)
console.log(modulo)
console.log("*****")

//7. Crea una variable para cada operador de asignacion y muestra su resultado en la consola.

let asign = 10;
console.log(asign)
asign += 5;
console.log(asign)
asign -= 5;
console.log(asign)
asign *= 2;
console.log(asign)
asign /= 2;
console.log(asign)
asign %= 2;
console.log(asign)
console.log("\n******\n")

//8. Crea una variable para cada operador de comparacion y muestra su resultado en la consola.

let igual = (5 == '5');
console.log(igual)
let estrictamenteIgual = (5 === 5);
console.log(estrictamenteIgual)
let diferente = (5 != 3);
console.log(diferente)
let estrictamenteDiferente = (5 !== '5');
console.log(estrictamenteDiferente)
let mayorQue = (5 > 3);
console.log(mayorQue)
let menorQue = (3 < 5);
console.log(menorQue)
let mayorOIgual = (5 >= 5);
console.log(mayorOIgual)
let menorOIgual = (3 <= 5);
console.log(menorOIgual)
console.log("\n******\n")

//9. Crea una variable con un operador lógico y muestra su resultado en la consola.(AND y OR)

let logicoY = (5 > 3 && 3 < 5);
console.log(logicoY)
let logicoO = (5 > 3 || 3 > 5);
console.log(logicoO)
console.log("\n******\n")

//10. Crea una variable con un operador ternario y muestra su resultado en la consola.

let edad = 18;
let esMayorDeEdad = (edad >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(esMayorDeEdad);
console.log("\n******\n")

//11. Concatena dos cadenas de texto y muestra el resultado en la consola.

let cadena1 = "Hola, ";
let cadena2 = "mundo!";
let concatenacion = cadena1 + cadena2;
console.log(concatenacion);
console.log("\n******\n")

//12. Transforma una cadena de texto en mayúsculas y muestra el resultado en la consola.

let texto = "hola mundo";
let textoMayusculas = texto.toUpperCase();
console.log(textoMayusculas);
console.log("\n******\n")

//13. Muestra la longitud de una cadena de texto en la consola.

let longitud = texto.length;
console.log(longitud);
console.log("\n******\n")

//14. Remplaza un el espacio de una cadena por un guión y muestra el resultado en la consola.

let textoConGuion = texto.replace(" ", "-");
console.log(textoConGuion);
console.log("\n******\n")

//15. Comprueba si un String contiene una palabra en concreto y muestra el resultado en la consola.

let contienePalabra = texto.includes("mundo");
console.log(contienePalabra);
console.log("\n******\n")

//16. Extrae una parte de una cadena de texto y muestra el resultado en la consola.

let subcadena = texto.substring(0, 4);
console.log(subcadena);
console.log("\n******\n")

//17. Investiga algun metodo mas utilizado con String y muestra el resultado en la consola.

let textoRepetido = texto.repeat(3);
console.log(textoRepetido);
console.log("\n******\n")

//18. Imprime tu nombre si una varibale tiene su valor

let nombre = "Juan";
if (nombre) {
    console.log(nombre);
}
console.log("\n******\n")

//19. Imprime acceso permitido si un variable nombre y su contraseña son correctos

let password = "1234";
if (nombre === "Antonio" && password === "1234") {
    console.log("Acceso permitido");
}
console.log("\n******\n")

//20. Imprime en que estacion del año estamos a partir de una variable que indique el mes

let mes = 4;
if (mes === 12 || mes === 1 || mes === 2) {
    console.log("Invierno");
} else if (mes >= 3 && mes <= 5) {
    console.log("Primavera");
} else if (mes >= 6 && mes <= 8) {
    console.log("Verano");
} else if (mes >= 9 && mes <= 11) {
    console.log("Otoño");
} else {
    console.log("Mes no válido");
}
console.log("\n******\n")

//21. Usa switch rehaciendo el ejercicio 20

switch (mes) {
    case 12:
        console.log("Invierno");
        break;
    case 1:
        console.log("Invierno");
        break;
    case 2:
        console.log("Invierno");
        break;
    case 3:
        console.log("Primavera");
        break;
    case 4:
        console.log("Primavera");
        break;
    case 5:
        console.log("Primavera");
        break;
    case 6:
        console.log("Verano");
        break;
    case 7:
        console.log("Verano");
        break;
    case 8:
        console.log("Verano");
        break;
    case 9:
         console.log("Otoño");
        break;
    case 10:
         console.log("Otoño");
        break;
    case 11:
        console.log("Otoño");
        break;
    default:
        console.log("Mes no válido");
        break;
}
console.log("\n******\n")

//22. Crea un listado que almacene cinco elementos.

let lista = ["manzana", "banana", "naranja", "uva", "pera"];
console.log(lista);
console.log("\n******\n")

//23. A ese listado incluye uno al principio y uno al final.

lista.unshift("kiwi");
lista.push("mango");
console.log(lista);
console.log("\n******\n")

//24. Elimina el último elemento del listado.

lista.pop();
console.log(lista);
console.log("\n******\n")

//24. Crea un Set que guarde cinco elementos.

let conjunto = new Set(["rojo", "verde", "azul", "amarillo", "naranja"]);
console.log(conjunto);
console.log("\n******\n")

//26.Crea un mapa que como clave tenga un numero y como valor el mes.

let mapa = new Map();
mapa.set(1, "Enero");
mapa.set(2, "Febrero");
mapa.set(3, "Marzo");
mapa.set(4, "Abril");
mapa.set(5, "Mayo");
console.log(mapa);
console.log("\n******\n")

//27. Crea un bucle que imprima numero del 1 al 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("\n******\n")

//28. Crea un bucle que cuente las vocales de una cadena de texto

let cadena = "Hola, ¿cómo estás?";
let contadorVocales = 0;
let vocales = "aeiouAEIOU";
for (let char of cadena) {
    if (vocales.includes(char)) {
        contadorVocales++;
    }
}
console.log("Número de vocales:", contadorVocales);
console.log("\n******\n")

//29. Usa un bucle para invertir una cadena de texto

let cadenaInvertida = "";
for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
}
console.log(cadenaInvertida);
console.log("\n******\n")

//30. Crea un funcion que reciba dos numeros y los sume

function sumar(a, b) {
    return a + b;
}
console.log(sumar(5, 3));
console.log("\n******\n")

//31. Crea una funcion que reciba un Array de Strings y devuelve un nuevo array solo con las letras mayusculas del Array original

function filtrarMayusculas(arr) {
    return arr.filter(str => str === str.toUpperCase());
}
let arrayStrings = ["Hola", "MUNDO", "JavaScript", "ES", "genial"];
console.log(filtrarMayusculas(arrayStrings));
console.log("\n******\n")

//32. Crea una funcion que reciba un String y devuelva la candena al reves

function invertirCadena(str) {
    return str.split('').reverse().join('');
}
console.log(invertirCadena("Hola mundo"));