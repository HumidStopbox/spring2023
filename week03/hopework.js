const prompt = require("prompt-sync")();

const a = prompt("what is your name? ");
console.log(`hello, ${a}`);

const r = require("prompt-sync")();

const b = r("what is your friend's name? ");
console.log(`${b}`);

const z = require("prompt-sync")();

const s = z("who is our president? ");
console.log(`it's actually your mom but ${s} will do`);