# Javascript Ejercicios

### [Reto01 - Contando ovejas para dormir](https://2021.adventjs.dev/challenges/01)

```js
/*
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
*/

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

function contarOvejas(ovejas) {
  return ovejas.filter(function(oveja) {
    const nameLowered = oveja.name.toLowerCase()
    
    const isRedColor = oveja.color === 'rojo'
    const hasLetterN = nameLowered.includes('n')
    const hasLetterA = nameLowered.includes('a')
    
    return isRedColor && hasLetterN && hasLetterA
  })
}

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// Respuesta deseada:

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```

### [Reto10 - La  máquina de cambio](https://2021.adventjs.dev/challenges/10)

```js
/*
Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que 
"calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra"
en metálico.

Las monedas para cambio que puedes usar son estas:

coins[0] = 1 céntimo
coins[1] = 2 céntimos
coins[2] = 5 céntimos
coins[3] = 10 céntimos
coins[4] = 20 céntimos
coins[5] = 50 céntimos

Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.
*/

function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50]
  
  let acc = change
  
  return coins
    .reverse()
    .map(function (coin) {
      let quotient = Math.floor(acc / coin)
    
      if (quotient > 0) {
        acc = acc % coin // rediduo
      }
    
      return quotient
    })
  .reverse()
}

getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
```

* https://adventjs.dev/ (2021)

### [Reto1 (2023) - Primer regalo repetido](https://adventjs.dev/challenges/2023/1)

```js
/*
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números han sido asignados a más de un juguete.

¡Encuentre el primer número de identificación que se ha repetido, donde la segunda aparición tiene el índice más pequeño !

En otras palabras, si hay más de un número repetido, debe devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelva -1.
*/

// [2, 1, 3, 5, 3, 2].indexOf(99) // -1

// [2, 1, 3, 5, 3, 2].sort(function(a, b) {
//   // return b - a // Sort Asc con números
//   return b - a // Sort Desc con números
// })

function findFirstRepeated(gifts) {
  const repeats = gifts.map(function(id, index) {
    return {
      id,
      firstIndex: index,
      secondIndex: gifts.indexOf(id, index + 1)
    }
  })
  
  const idsAperecenPorSegundaVez = repeats.filter(id => id.secondIndex !== -1)
  
  const ordenadosPorElIndiceDeLaSegundaAparicion = idsAperecenPorSegundaVez.sort(function(a, b) {
    return a.secondIndex - b.secondIndex
  })
  
  const idsResultantes = ordenadosPorElIndiceDeLaSegundaAparicion.map(item => item.id)
  
  if (idsResultantes.length > 0) {
    return idsResultantes[0]
  }

  return -1
}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Even though 2 and 3 are repeated
// 3 appears second time first

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// It is -1 since no number is repeated

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
```
