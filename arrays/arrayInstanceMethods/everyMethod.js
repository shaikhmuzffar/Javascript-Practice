const nums =[2,4,6,8]



const even = num => num%2==0;

const result = nums.every(even)

// every methhod only returns  true if all elements satisfy the condition otherwise returns false


console.log(result)