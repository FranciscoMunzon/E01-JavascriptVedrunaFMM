//1. Escribe un comentario en una linea

// Hola

//2. Escribe un comentario en varias lineas

/* Hola,
¿Como estas? */
console.log("\n***3***\n")

//3. Declara variables con valores asociados a todos los tipos de datos y imprimelos en la consola

let numeros = 1;
let palabra = "Hola";
let boolean = true;
let sinDefinir;

console.log(numeros)
console.log(palabra)
console.log(boolean)
console.log(sinDefinir)
console.log("\n***4***\n")

//4.Modifica los valores de las variables por otros valores y vuelve a imprimirlos en la consola.

numeros = 2
palabra = "Adios"
boolean = false
sinDefinir = "A"

console.log(numeros)
console.log(palabra)
console.log(boolean)
console.log(sinDefinir)
console.log("\n***5***\n")

//5. Declara constantes con valores asociados a todos los tipos de datos y imprimelos en la consola.

const num = 1;
const word = "Hola";
const bool = true;

console.log(num)
console.log(word)
console.log(bool)
console.log("\n***6***\n")


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
console.log("\n***7***\n")

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
console.log("\n***8***\n")

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
console.log("\n***9***\n")

//9. Crea una variable con un operador lógico y muestra su resultado en la consola.(AND y OR)

let logicoY = (5 > 3 && 3 < 5);
console.log(logicoY)
let logicoO = (5 > 3 || 3 > 5);
console.log(logicoO)
console.log("\n***10***\n")

//10. Crea una variable con un operador ternario y muestra su resultado en la consola.

let edad = 18;
let esMayorDeEdad = (edad >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(esMayorDeEdad);
console.log("\n***11***\n")

//11. Concatena dos cadenas de texto y muestra el resultado en la consola.

let cadena1 = "Hola, ";
let cadena2 = "mundo!";
let concatenacion = cadena1 + cadena2;
console.log(concatenacion);
console.log("\n***12***\n")

//12. Transforma una cadena de texto en mayúsculas y muestra el resultado en la consola.

let texto = "hola mundo";
let textoMayusculas = texto.toUpperCase();
console.log(textoMayusculas);
console.log("\n***13***\n")

//13. Muestra la longitud de una cadena de texto en la consola.

let longitud = texto.length;
console.log(longitud);
console.log("\n***14***\n")

//14. Remplaza un el espacio de una cadena por un guión y muestra el resultado en la consola.

let textoConGuion = texto.replace(" ", "-");
console.log(textoConGuion);
console.log("\n***15***\n")

//15. Comprueba si un String contiene una palabra en concreto y muestra el resultado en la consola.

let contienePalabra = texto.includes("mundo");
console.log(contienePalabra);
console.log("\n***16***\n")

//16. Extrae una parte de una cadena de texto y muestra el resultado en la consola.

let subcadena = texto.substring(0, 4);
console.log(subcadena);
console.log("\n***17***\n")

//17. Investiga algun metodo mas utilizado con String y muestra el resultado en la consola.

let textoRepetido = texto.repeat(3);
console.log(textoRepetido);
console.log("\n***18***\n")

//18. Imprime tu nombre si una varibale tiene su valor

let nombre = "Fran";
if (nombre === "Fran") {
    console.log(nombre);
}
console.log("\n***19***\n")

//19. Imprime acceso permitido si un variable nombre y su contraseña son correctos

let password = "1234";
if (nombre === "Fran" && password === "1234") {
    console.log("Acceso permitido");
}
console.log("\n***20***\n")

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
console.log("\n***21***\n")

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
console.log("\n***22***\n")

//22. Crea un listado que almacene cinco elementos.

let lista = ["Mudkip", "Torchic", "Treecko", "Kyogre", "Groudon"];
console.log(lista);
console.log("\n***23***\n")

//23. A ese listado incluye uno al principio y uno al final.

lista.unshift("Pikachu");
lista.push("Rayquaza");
console.log(lista);
console.log("\n***24***\n")

//24. Elimina el último elemento del listado.

lista.pop();
console.log(lista);
console.log("\n***25***\n")

//24. Crea un Set que guarde cinco elementos.

let conjunto = new Set(["fuego", "planta", "agua", "electrico", "volador"]);
console.log(conjunto);
console.log("\n***26***\n")

//26.Crea un mapa que como clave tenga un numero y como valor el mes.

let mapa = new Map();
mapa.set(1, "Enero");
mapa.set(2, "Febrero");
mapa.set(3, "Marzo");
mapa.set(4, "Abril");
mapa.set(5, "Mayo");
mapa.set(6, "Junio");
mapa.set(7, "Julio");
mapa.set(8, "Agosto");
mapa.set(9, "Septiembre");
mapa.set(10, "Octubre");
mapa.set(11, "Noviembre");
mapa.set(12, "Diciembre");
console.log(mapa);
console.log("\n***27***\n")

//27. Crea un bucle que imprima numero del 1 al 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("\n***28***\n")

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
console.log("\n***29***\n")

//29. Usa un bucle para invertir una cadena de texto

let cadenaAInvertir = "Buenas tardes";
let cadenaInvertida = "";
for (let i = cadenaAInvertir.length - 1; i >= 0; i--) {
    cadenaInvertida += cadenaAInvertir[i];
}
console.log(cadenaInvertida);
console.log("\n***30***\n")

//30. Crea un funcion que reciba dos numeros y los sume

function sumar(a, b) {
    return a + b;
}
console.log(sumar(7, 3));
console.log("\n***31***\n")

//31. Crea una funcion que reciba un Array de Strings y devuelve un nuevo array solo con las letras mayusculas del Array original

function filtrarMayusculas(arr) {
    return arr.filter(str => str === str.toUpperCase());
}
let arrayStrings = ["Hola", "COMO", "estas", "ESPERO", "que", "BIEN"];
console.log(filtrarMayusculas(arrayStrings));
console.log("\n***32***\n")

//32. Crea una funcion que reciba un String y devuelva la candena al reves

function invertirCadena(str) {
    return str.split('').reverse().join('');
}
console.log(invertirCadena("Hola buenas"));