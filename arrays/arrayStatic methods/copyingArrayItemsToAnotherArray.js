let marvel = ['iron-man','hulk','thor','cpt.america']

let superHeros=[];

// superHeros = new Array(marvel) method 1
// superHeros= [...marvel] method 2

// marvel.map(hero=>superHeros.push(hero))  method 3

// for(i=0;i<marvel.length;i++){  method 4
//     superHeros.push(marvel[0]) 
// }

marvel.forEach((item)=>superHeros.push(item))


console.log(superHeros)