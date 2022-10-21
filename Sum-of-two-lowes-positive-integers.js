function sumTwoSmallestNumbers(numbers) {  
  //loop in the array and return the two lowest numbers
  let resul = 0
  
  for(let i = 0; i < 2; i++){
    resul += Math.min(...numbers)
    numbers.splice(numbers.indexOf(resul), 1)
  }
  
  return resul
  }