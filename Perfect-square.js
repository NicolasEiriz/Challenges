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
