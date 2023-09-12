const nums = [1, [2, 3], [[]], [4, [5]], 6];

// const res = nums.flat(1)
// op [1, 2, 3,[], 4, [5], 6]

// const res = nums.flat(2)
// [ 1, 2, 3, 4, 5, 6 ]

const res = nums.flat(Infinity)

console.log(res)