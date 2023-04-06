// Arrays

const groceries =['🍎','🥝', '🥑', '🍑']
// console.log(groceries)

/* // index 
console.log(groceries[0]) //apple
// grab th 3nd index
console.log(groceries[3]) //peach */


// Array methods
// push 오른쪽으로 추가! 
groceries.push('🍅')
// console.log(groceries)


groceries.push('🍒')
// console.log(groceries)

//Array Slice
// start from 0 INCULUSIVE and up to 2[0,1,2]
// 처음 시작해서 2개까지 출력해. 즉, 인덱스로 0 ~ 2번까지 출력해 
// console.log(groceries.slice(0,3))

// start from 0 INCULUSIVE and up to 6[0,1,2,3,4,5]
// 인덱스 3번째에서 부터 인덱스 5번까지 출력해 6을 쓴 이유는 인덱스가 6번째까지는 없지만
// 인덱스5번까지 보여주려면 6까지는 써야한담. 
// console.log(groceries.slice(3, 6))


// array methods [slice, push, indexOf, length]

// console.log(groceries.indexOf('🍎'))
// console.log(groceries.length)


