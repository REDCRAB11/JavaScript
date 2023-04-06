// this is a function called 'sayMyName'
// and it has 0 arguments
// does: it logs out your name to the console

/* function sayMyName(){
    console.log('jaemin')
    console.log('jisung')
    console.log('runjun')
    console.log('jaemin')
}

sayMyName() */

/* function sayMyName(name){
    console.log(name)
}

sayMyName('mark') */

// this is a function called 'sayMyName2'
// it has 1 argument called `name`
// does: it logs out your name to console
/* function sayMyName2(name){
    console.log(name)
}

sayMyName2('jeno') */

function greeting(name){
    // greet = 'hi ' + name + ', nice to meet you!' 
    //template literals `` -- 위에처럼 해도 되지만 너무 정신없음 
    greet = `hi ${name}, Nice to meet you!`
    console.log(greet)
}

greeting('chenle')


function sum(a, b){
    // return 
    return a + b
}

num = sum(1,2)
console.log(num)

/* function sum(a, b){
    // 콘솔에 3이 저장되기에 num에서는 가져올 저장 정보가 없다. 그래서 num은 undefined나옴 
    // 콘솔을 쓰면 쓰는 의미가 없기에 반환되는 return을 쓰자. 
    console.log(a+b)
}

num = sum(1,2)
console.log(num) */


function calculateFoodTotla(food, tip){
    const tipPercentage = tip / 100
    const tipAmount = food * tipPercentage
    const total = sum(food, tipAmount)
    return total
}

console.log(calculateFoodTotla(100, 20))

// ES6
// Arrow Funcitons =>
// arrow function with explicit return
const sumArrow = (a, b) => {
    return a+b
}

// arrow function with implicit return
//IMPORTANT: For implicit return, remove curly
// 위랑 아래랑 똑같다고...
const sumArrow2 = (a, b) => a + b

console.log(sumArrow2(10, 50))
