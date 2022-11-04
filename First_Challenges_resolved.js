//Challenges resolved


//1. Perfect Square

function findNextSquare(sq) {
  
  if(Number.isInteger(Math.sqrt(sq))){ 
    sq++
    while(!Number.isInteger(Math.sqrt(sq))){
      sq ++
    }
  return sq  
  } else{return -1}
  
 
}

function findNextSquare(122)

//Link of kata: https://www.codewars.com/kata/56269eb78ad2e4ced1000013

_________________________________________

//2. Sum of two lowest positive integers


function sumTwoSmallestNumbers(numbers) {  
  //loop in the array and return the two lowest numbers
  let result = 0
  
  for(let i = 0; i < 2; i++){
    result += Math.min(...numbers)
    numbers.splice(numbers.indexOf(result), 1)
  }
  
   
  return result
  }

//Link of kata:https://www.codewars.com/kata/558fc85d8fd1938afb000014

_________________________________________

//3. add two numbers together and return their sum in binary


function addBinary(a,b) {

  let result = a + b
  
  return result.toString(2)
}

//Link of kata: https://www.codewars.com/kata/551f37452ff852b7bd000139

_________________________________________

//4. Number of People in the Bus

let number = function(busStops){
  // Take an array of integer numbers
  // The first number in the array is the people who get into the bus
  // The second number in the array is the people who get off the bus
  // Return a number of people who still in the bus after the last bus station (after the las array)
  
  // Loop in the array and return the people in the bus less the people who leave
  
let peopleInBus = 0

busStops.forEach(stops =>{
    peopleInBus += stops[0] 
    peopleInBus -= stops[1]
   })
  
  return peopleInBus
  
}

//link of kata: https://www.codewars.com/kata/5648b12ce68d9daa6b000099
_________________________________________
//5. Find the divisors!

function divisors(integer) {
  
  //get into a number
  //returns an array with all of the numbers divisors, except for 1 and the numver itself
  
  let result = []
  //make a loop an return every number who is divisible by the input, return an array with all these numbers
  
  for(let i = 2; i < integer; i++){
    if(integer % i === 0){
      result.push(i)}
}
  
 //if any number was divilse return 'the (number) is prime'
  if(result.length === 0){
 return `${integer} is prime`}
 else{return result}
  
  
}

divisors(15)

//link of kata: https://www.codewars.com/kata/544aed4c4a30184e960010f4

_________________________________________

//6 Credit Card Mask

// return masked string

function maskify(cc) {
  //convert the number into and array
  if(cc.length < 4){
    return cc
  }
  else{
  let arr = cc.split('')
  
  //create a variable with the last four numbers
  
  let lastFour = arr.slice(arr.length - 4)
  
  //map into arr and return '#', without the las four numbers
  
  arr = arr.map(x=> '#').slice(0, arr.length -4)
  
  //push the last 4 numbers into the resul
  
  lastFour.forEach(num =>{
    arr.push(num)
  })
  
  return arr.join('')
}

}

function maskify(4556364607935616)

//link of kata: https://www.codewars.com/kata/5412509bd436bd33920011bc

_________________________________________

// 7 Shortest Word

function findShort(s){
  //convert the string into a array of words
 
  let arrayOfWords = s.split(' ')
  
  //compare the words with reduce and return de shortest
  
  let shortest = arrayOfWords.reduce((lowest,current)=>
   lowest.length < current.length ? lowest : current
  )
  
  return shortest.length
}

findShort('bitcoin take over the world maybe who knows perhaps')

//Link to kata: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
_________________________________________

//8 Mumbling  

function accum(s) {
  //convert the string into an array, map trough it and return the letter repeated x times, when x its their index number
  
  return s.split('').map((letter,index) => `${letter.toUpperCase()}${letter.toLowerCase().repeat(index)}`).join('-')
}

//Link to kata: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

_________________________________________

//9 Testing 1-2-3

let number=function(array){
  // Takes a list of string and return each line prepended by the correct number
  // Numbering starts at 1
  // Example ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
  
let number = 1
let result = []

if(array.length === 0){
  return []
} else{
array.forEach(element =>{
result.push(`${number}: ${element}`)
  number += 1 }) 
return result
}
 
}

// Link to kata: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

_________________________________________

//10 Find the stray number

function stray(numbers) {

  //given an odd-length array of integers, return the different number

  //loop in the array if the number is the same than the next one keep moving, otherwise return that number
 
  let result = 0
 
  
  numbers.forEach(num =>{
    if(num !== numbers[1]){
      result = num
    }
  })
  return result
}

//Link to kata: https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

_________________________________________

//11 Count the divisors of a number

function getDivisorsCnt(n){
    // count the number of divisor of a positive integer
  
    let result = 58
    
  //loop and use the % operator to find all the divisible numbers
    
    for(let i = 1; i <= n; i++){
      if(n % i === 0){
        result += 1
      }
    }
  return result
}

//Link to kata: https://www.codewars.com/kata/542c0f198e077084c0000c2e/solutions/javascript
_________________________________________

//12 Get the Middle Character

function getMiddle(s)
{
  let sLength = s.length
  if(sLength % 2 === 0){
    return s.slice(sLength / 2 - 1, sLength / 2 + 1)
  } else{
    return s.slice(Math.floor(sLength / 2), Math.floor(sLength / 2 + 1) )
  }
 
}

//Link to kata: https://www.codewars.com/kata/56747fd5cb988479af000028
_________________________________________

// 13 How good are you really?

function betterThanAverage(classPoints, yourPoints) {
  
  let averageClassPoints = 0
  
  classPoints.forEach(point => {
    averageClassPoints += point
})
                      
if(yourPoints > averageClassPoints / classPoints.length){
  return true
} else return false
}

//Link to kata: https://www.codewars.com/kata/5601409514fc93442500010b

_________________________________________

// 14 Vowel Count

function getCount(str) {
  //convert the string into an array
  let arr = str.split('')
  let result = 0
  
  //loop and if we found a vowels add 1 to result
  
  arr.forEach(letter =>{
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
       result += 1
       }
  })
  return result;
}

//Link to kata: https://www.codewars.com/kata/54ff3102c1bad923760001f3

_________________________________________

// 15 Sort array by string length

function sortByLength (array) {
  /*Take an array of strings as an argument and return
  containing the same strings, ordered from shortest to longest*/
  
  //Use sort and length to calculate the shortest word
  
  return array.sort((a,b) => a.length - b.length)
  
};
________________________________________

// 16  Remove First and Last Character

function removeChar(str){
  //remove the first and last character of an string
   // if it has less than two character return the same string
 if(str.length < 2){
   return str
 } else{
   return str.slice(1, str.length - 1 )
 }
   
 };

 ________________________________________

 //17 Make a function that does arithmetic!

 function arithmetic(a, b, operator){
  //Given two numbers and an arithmetic operator, return the result of the two number having that operator used on them
  
  if(operator === 'add'){
    return a + b
  } else if(operator === 'subtract'){
    return a - b
  } else if(operator === 'multiply'){
    return a * b
  } else if (operator === 'divide'){
    return a / b
  }
}

________________________________________

