module.exports = function check(str, bracketsConfig) {

const doubles={};
const doublesArray =[];

const openBracket = [];
const bracketPair = {};


for (let j = 0; j < bracketsConfig.length; j++){
  
  openBracket.push(bracketsConfig[j][0]);
  
  bracketPair[bracketsConfig[j][1]] = bracketsConfig[j][0];
  
  if (bracketsConfig[j][1] === bracketsConfig[j][0]){
    doublesArray.push(bracketsConfig[j][1]);
  }
}
    


for (let i = 0; i < str.length; i++) {
  doubles[doublesArray[i]] = 0;
}

for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < doublesArray.length; j++) {
      if (str[i] === doublesArray[j]) {
          doubles[doublesArray[j]] += 1
      }
  }
}  

for (let key in doubles){
    if (doubles[key] % 2 !== 0){
        return false;
    }
}



let stack = [];
 
for (let i = 0; i < str.length; i++){
  let currentSymbol = str[i];
  
  if (doublesArray.includes(currentSymbol)){
    doubles[currentSymbol] -= 1

    
    if (doubles[currentSymbol] %2 !== 0 && doubles[currentSymbol] !== 0 ){

      stack.push(currentSymbol);
      
    } else {
        if (stack.length === 0) {
            return false;
        }
        if (bracketPair[currentSymbol] === stack[stack.length-1]) {
          stack.pop();
        //} else{
          //return false;
        }
      }
  } else {

    if(openBracket.includes(currentSymbol)) {
    
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElement = stack[stack.length-1];

      if (bracketPair[currentSymbol] === topElement) {
        stack.pop();
       
      } 
      //else{
        //return false;
      //}
    }
  }

}

return stack.length === 0;

}