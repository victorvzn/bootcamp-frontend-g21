// COMENTARIOS

// console.log('Hola a todos!')

/*
  Esto
  es 
  un
  comentario
  de múltiples
  líneas
*/

// TIPOS DE DATOS (https://lenguajejs.com/javascript/)

// PRIMITIVOS: Number, String, Boolean (true, false), undefined, null, BigInt, Symbol

// NUMBER

console.log(20);
console.log(15.69)
console.log(0.9999)
console.log(-36)

console.log(typeof 20); // number
console.log(typeof 15.69) // number
console.log(typeof 0.9999) // number
console.log(typeof -36) // number

// STRING

console.log('Claudia')
console.log("Farit")
console.log("200")

console.log(typeof 'Claudia') // string
console.log(typeof "Farit") // string
console.log(typeof "200") // string

// BOOLEAN -> false o true

console.log(true)
console.log(typeof false)

// UNDEFINED

let nombre // Declaración de una variable
console.log(nombre)
console.log(typeof nombre)

// NULL

let apellido = null
console.log(apellido)
console.log(typeof apellido)

// BigInt (Permite almacenar numeros muy grandes)
// Symbol (Ayudan a crear valores únicos e irrepetibles)

// VARIABLES Y CONSTANTES

// ECMASCRIPT 5 === ES5
// ECMASCRIPT 6 === ES6

// var -> ES5 (Forma de declarar una variable pero no es recomendado su uso, la declaración es a nivel de la función) ❌

// CONST -> ES6 (El uso de const es lo recomendado) ✅

const edad = 55 // Es obligatorio inicializarlo
const _edad = 25
const edadDeMiHijoMayor = 15
const PI = 3.14
const empresa = 'JS'
const esMayorDeEdad = false

// edad = 90 // Uncaught TypeError: Assignment to constant variable.

console.log(edad)

// LET -> ES6 (El uso de let e lo recomendado) ✅

let edad2 = 35 // No es obligatorio inicializarlo

edad2 = 39 // estamos reasignando un valor numérico
console.log(typeof edad2)
edad2 = "victor"
console.log(typeof edad2)
edad2 = true
console.log(typeof edad2)

console.log('1121' + 15  + 19)

// OPERADORES MATEMÁTICOS

