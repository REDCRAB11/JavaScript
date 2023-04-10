// Objects{}
// key : value pairs
// key -> name 
// vlaue --> 'jaemin'
// objects = 나재민이라는 인물이면
// properties = 그 인물의 이름이나 입은 옷색상..등등 

const person = {
    name: 'jamin',
    first: 'na'
}

// access object: do notation vs. bracket notation
console.log(person.name)
console.log(person.first)

// bracket notation
console.log(person['name'])
console.log(person['first'])

// assign object
// person.phone = '123-1234-1234'
person['phone'] = '123-1234-1234'
console.log(person.phone)


// peson2
const person2 = {
    name: 'jisung',
    hair: 'blod'
}

console.log(person2)
console.log(person2.name)
console.log(person2.hair)


// es6 arrow function (2 arguments)
// object
// template literals
const intoducer = (name, hair) =>{
    const person ={
        name: name,
        hair: hair,
        assets: 100000,
        liability: 50000,
        netWorth: function(){
            return this.assets - this.liability
        }
    }
    // 여기서 person.netWorth => 위에 함수 전체값으로 나온다. 이건 우리가 원하는 값이 아니므로 뒤에 () 붙여준다. 
     const intro = `Hi, my name is ${person.name} and the color of my hair is ${person.hair} and my ney worth is $${person.netWorth()} USD` 

     return intro
}

console.log(intoducer('jaemin', 'black'))
console.log(intoducer('jisung', 'blond'))
