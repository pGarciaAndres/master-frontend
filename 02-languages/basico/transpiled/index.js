"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var optional_1 = require("./optional");
/* Módulo 2 - Lenguajes */
var arrayA = ["Pepe", "Juan", "Luis"];
var arrayB = ["Marta", "Raquel", "Ana"];
var arrayC = ["Toby", "Max", "Felix"];
var objectA = { name: "Maria", surname: "Ibañez", country: "SPA" };
var objectB = { name: "Luisa", age: 31, married: true };
// 1. Array operations
// Head
var head = function (_a) {
    var first = _a[0];
    return first;
};
console.log("Primer elemento: ".concat(head(arrayA)));
// Tail
var tail = function (_a) {
    var first = _a[0], rest = _a.slice(1);
    return rest;
};
console.log("Todos menos el primero: ".concat(tail(arrayA)));
// Init
var init = function (array) { return array.slice(0, -1); };
console.log("Todos menos el \u00FAltimo: ".concat(init(arrayA)));
// Last
var last = function (array) { return array.slice(-1); };
console.log("\u00DAltimo elemento: ".concat(last(arrayA)));
// 2. Concat
var concat = function (a, b) { return __spreadArray([a], b, true); };
console.log("Concatenaci\u00F3n: ".concat(concat(arrayA, arrayB)));
// Opcional
function concatPlus() {
    var result = [];
    var arrays = arguments[0];
    for (var key in arrays) {
        result.push(arrays[key]);
    }
    return result;
}
console.log("Concatenaci\u00F3n Plus: ".concat(concatPlus({ arrayA: arrayA, arrayB: arrayB, arrayC: arrayC })));
// 3. Clone Merge
// Clone
function clone(source) {
    return __assign({}, source);
}
var copy = clone(objectA);
console.log("Original: ".concat(JSON.stringify(objectA)));
console.log("Clone: ".concat(JSON.stringify(copy)));
// Merge
// function merge(source, target) {
//   const copy = clone(target);
//   for (var key in source) {
//     copy[key] = source[key];
//   }
//   return copy;
// }
function merge(source, target) {
    return __assign(__assign({}, target), source);
}
console.log("Merge: ".concat(JSON.stringify(merge(objectA, objectB))));
// 4. Read Books
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
function isBookRead(books, titleToSearch) {
    var _a, _b;
    return (_b = (_a = books.find(function (book) { return book.title === titleToSearch; })) === null || _a === void 0 ? void 0 : _a.isRead) !== null && _b !== void 0 ? _b : false;
}
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
// Opcional
console.log("Primer elemento ts: ".concat(optional_1.tsFunctions.headts(arrayA)));
// 5. Slot Machine
