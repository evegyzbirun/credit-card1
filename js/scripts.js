// 16 numbers(ask in input 16 credit card number)   STRING
// take every second number and multiply on 2, if the result is one number we keep it, if the result double number we splite it like 2x6 = 12. so 1 + 2 = 3 our result. 

// function card(cardNumber) {
//   let cardNumberLength = cardNumber.length
//   if (cardNumberLength < 16 || cardNumberLengthh > 16) {
//     return "wrong card number"
//   } else {
//     return "card accepted"
//   }
//   console.log(cardNumber)
// };
function luhnDouble(input) {
  const card = input.split('')
  const doubled = [];
  for (i = 0; i < card.length; i++) {
    if (i % 2 === 0) {
      doubled.push(card[i] * 1)
    }
    else {
      doubled.push(card[i] * 2)
    }
  }
  return doubled;
}
//4102080860435620
//[4,2,0,4,16,0,16,6,0,8,3,10,6,4,0]
//"16" = "1", "6"  => 7



function luhnAddDouble(input) {
  let doubled = luhnDouble(input)
  for (i = 0; i < doubled.length; i++) {
    if (doubled[i] >= 10) {
      let splitDouble = doubled[i].toString().split('');
      let firstDigit = number(splitDouble[0])
      let secondDigit = number(splitDouble[1])
    }
  }
}