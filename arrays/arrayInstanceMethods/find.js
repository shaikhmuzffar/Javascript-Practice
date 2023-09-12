let Marvel = ["hulk","iron-man","thor"];
let Dc =["superman","batman","wonder-women"];

const result=Marvel.concat(Dc).find(hero=>hero.length>4);
// Get the value of the first element in the array that satisfies the provided condition.

console.log(result)