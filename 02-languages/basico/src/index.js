// import { tsFunctions } from "./optional";

/* Módulo 2 - Lenguajes */
const arrayA = ["Pepe", "Juan", "Luis"];
const arrayB = ["Marta", "Raquel", "Ana"];
const arrayC = ["Toby", "Max", "Felix"];

const objectA = { name: "Maria", surname: "Ibañez", country: "SPA" };
const objectB = { name: "Luisa", age: 31, married: true };

// 1. Array operations
// Head
const head = ([first]) => first;

console.log(`Primer elemento: ${head(arrayA)}`);

// Tail
const tail = ([first, ...rest]) => rest;

console.log(`Todos menos el primero: ${tail(arrayA)}`);

// Init
const init = (array) => array.slice(0, -1);

console.log(`Todos menos el último: ${init(arrayA)}`);

// Last
const last = (array) => array.slice(-1);

console.log(`Último elemento: ${last(arrayA)}`);

// 2. Concat
const concat = (a, b) => [a, ...b];

console.log(`Concatenación: ${concat(arrayA, arrayB)}`);

// Opcional
function concatPlus() {
  const result = [];
  const arrays = arguments[0];
  for (var key in arrays) {
    result.push(arrays[key]);
  }
  return result;
}

console.log(`Concatenación Plus: ${concatPlus({ arrayA, arrayB, arrayC })}`);

// 3. Clone Merge
// Clone

function clone(source) {
  return { ...source };
}

const copy = clone(objectA);
console.log(`Original: ${JSON.stringify(objectA)}`);
console.log(`Clone: ${JSON.stringify(copy)}`);

// Merge
// function merge(source, target) {
//   const copy = clone(target);
//   for (var key in source) {
//     copy[key] = source[key];
//   }
//   return copy;
// }
function merge(source, target) {
  return { ...target, ...source };
}

console.log(`Merge: ${JSON.stringify(merge(objectA, objectB))}`);

// 4. Read Books
const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books, titleToSearch) {
  return books.find((book) => book.title === titleToSearch)?.isRead ?? false;
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

// Opcional
// console.log(`Primer elemento ts: ${tsFunctions.headts(arrayA)}`);

// 5. Slot Machine
