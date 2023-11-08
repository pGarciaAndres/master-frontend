import { isBookReadTS } from "./optional.js";

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

// 2. Concat (Corregido)
const concat = (a, b) => [...a, ...b];

console.log("Concatenación: ", concat(arrayA, arrayB));

// Opcional (Corregido)
function concatPlus(array1, ...rest) {
  return array1.concat(...rest);
}

console.log("Concatenación Plus: ", concatPlus(arrayA, arrayB, arrayC));

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

console.log("Leído: ", isBookRead(books, "Devastación")); // true
console.log("Leído: ", isBookRead(books, "Canción de hielo y fuego")); // false
console.log("Leído: ", isBookRead(books, "Los Pilares de la Tierra")); // false

// Opcional
console.log("(TS) Leído: ", isBookReadTS(books, "Devastación")); // true
console.log("(TS) Leído: ", isBookReadTS(books, "Canción de hielo y fuego")); // false
console.log("(TS) Leído: ", isBookReadTS(books, "Los Pilares de la Tierra")); // false

// 5. Slot Machine
class SlothMachine {
  #coins;

  constructor() {
    this.#coins = 0;
  }

  #incrementCoins() {
    this.#coins += 1;
  }

  #win() {
    this.#coins = 0;
  }

  play() {
    this.#incrementCoins();
    const result = Array(
      Math.random() >= 0.5,
      Math.random() >= 0.5,
      Math.random() >= 0.5
    );

    if (result.every((item) => !!item)) {
      console.log(`Congratulations!!!. You won ${this.#coins} coins!!`);
      this.#win();
    } else {
      console.log(
        "Good luck next time!!",
        `(${this.#coins} coins in the machine)`
      );
    }
  }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
