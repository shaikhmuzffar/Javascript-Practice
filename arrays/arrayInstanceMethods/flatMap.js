let A = [1, 2, 3, 4, 5];

// This is used to flatten the input array element into a new array.

const res=A.flatMap(x=>[x+3])

// res =A.map(x=>[x+3])
console.log(res)