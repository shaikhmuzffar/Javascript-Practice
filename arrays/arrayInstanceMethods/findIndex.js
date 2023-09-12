let Marvel = ["hulk","iron-man","thor"];
let Dc =["superman","batman","wonder-women"];

const result=Marvel.concat(Dc).findIndex(hero=>hero.includes("tm"));
// Return the first index of the element in a given array that satisfies the provided testing function.

console.log(result)