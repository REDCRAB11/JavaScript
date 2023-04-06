//  연산자(operator)
//  fruit = prompt('what is yout favorite fruit?')
//  console.log(fruit) 
//  prompt() 문자열 입력할때 사용 사용자가 직접 입력!
//  숫자를 입력한다면, 입력한 값을 숫자로 변환해서 사용해야한다. 
//  prompt()만 사용하면 문자열만 입력받는다. 
//  prompt("메세지", "디폴트값") 첫번째는 입력창에 띄어줄 메세지, 두번째는 입력부분의 디폴드 값 

// var food = prompt("당신이 제일 좋아하는 과일은?")
// console.log(food)

//  var price = prompt('가격은 얼마인가요?')
//  var tipPercentage = 0.1
//  var count = price * tipPercentage
//  console.log(count)

//   var food = prompt('가격은 얼마인가요?')
//   var tipPercentage = prompt('tip %?') / 100
//   var tipAmount = food * tipPercentage
//   var total = food + tipAmount
//   console.log(tipAmount)
//   console.log(total)
//   alert(count) // 창으로 또 떠서 가격을 나타내줌

//   total(100 + 20%)의 data types(string + numbers)  10020이 나온다. 
//   Number(prompt()) 넘버를 붙여서 데이터 타입을 숫자로 바꿔 주자. 

var food = Number(prompt('가격은 얼마인가요?'))
var tipPercentage = Number(prompt('tip %?')) / 100
var tipAmount = food * tipPercentage
var total = food + tipAmount
console.log('tipAmount: ', tipAmount)
console.log('total: ', total) 
