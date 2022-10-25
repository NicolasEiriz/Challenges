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