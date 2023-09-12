let Marvel = ["hulk","iron-man","thor"];
let Dc =["superman","batman","wonder-women"];

const result=Marvel.concat(Dc).filter((hero)=>hero.includes("o"))
// Builds a new array containing elements that satisfy a function’s test.

console.log(result)