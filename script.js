//Uppgift 1: Variabler med var, let och const
var flower = "rose"
let season = "spring"
const city = "Copenhagen"

//Uppgift 2: 5 Variabler av typ Boolean, Number, String, Object and Array
//Boolean
let hasProduct = true

//Number
let favorNumber = 45

//String
let userName = "Tillmann"

//Object
let country = {
  name: "Sweden",
  capital: "Stockholm",
  currency: "Svenska krona"
}

//Array
let cities = ["Göteborg", "Copenhagen", "Oslo", "Stockholm"]

//Uppgift 3
console.log("UPPGIFT 3")
//Functions
function calculate(x, y) {
  let answer = x + y

  return answer
}

let sum = calculate(7, 9)
console.log("Summan blir " + sum)

//Uppgift 4
console.log("UPPGIFT 4")
//Logga ut nuvarabde datum och tid
console.log(Date())

//Uppgift 5
console.log("UPPGIFT 5")
//Objekt med metod
let book = {
  title: "Mina berättningar",
  author: "Tillmann Weimer",
  year: 2020,
  presentation() {
    console.log("The book with the title " + this.title + " was written in " + this.year + " by " + this.author)
  }
}
//exekvering av metoden i objekt
book.presentation()

//Uppgift 6
console.log("UPPGIFT 6")
//Arrays med filter
let numbers = [4, 8, 15, 16, 23, 42]
console.log(numbers)
//logga ut det sista värdet
console.log(numbers[5])
//filtrera ut numbers under 20
numbers.filter(numbersLessThan20)
function numbersLessThan20(numbers) {
  return numbers < 20
}
let numbersUnder20 = numbers.filter(numbersLessThan20)
console.log(numbersUnder20)

//skapa en ny array med map genom att dubla värdena från numbers arrayn
const double = numbers.map(number => number * 2)
console.log(double)

//Lista alla Items från numbers arrayn via en forEach loop
numbers.forEach(list)

function list(item, index) {
  console.log(index + item + "\n")
}

//Upgift 7 skapa en while loop som loopar 6 gånger
console.log("UPPGIFT 7")
let i = 0

while (i < 6) {
  console.log("This is item number: " + i)
  i++
}
//De tre första looparna ska det loggas ut i konsolen: "Loop 1", "Loop 2" resp "Loop 3" De tre sista looparna ska det loggas ut: "Almost done..."Efter loopen ska det loggas ut "Done"

let a = 1
while (a < 7) {
  if (a < 4) {
    console.log("LOOP " + a)
  } else {
    console.log("Almost done " + a)
  }
  a++
}
console.log("Done")
