//function declaration is fully hoisted
// console.log(add(2,3));   camn work  before function definition (hoisted)
function add(a,b){
    return a+b;
}
  console.log(add(2,3));
 //5

//can be used before or after definition

console.log("-------------------------------------------------");


//function expression (not hoisted)
//function expression is assigned to a variable

const multiply = function(a,b){
    return a*b;
}

console.log(add(2,3));

console.log("-------------------------------------------------------------");

//Arrow function are concise and common in modern converted

const subtract = (a,b) => {
    return a-b;
}

console.log(subtract(10,4));



console.log("------------------------------------------------------------------");

//parameters vs argument

function greet(name){
    //name is parameters
    console.log("hello" , name);
    
}


greet("kishor");
console.log("--------------------------------------------------------------");
//Return vs console.log() (critical difference)

function square(x){
    return x *x;
}

const result = square(5);
// result holds value
console.log(result);


console.log("------------Exrecise----------------");

//1.Write a function isEven(num) returns true or false
//2.write the same function using arrow syntax
//3.Call both function and log results

const isEven = (num)=>{
    // if(num % 2 == 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    return (num % 2 ==0) ? true : false;
}

console.log(isEven(2));


function isEvenByNorm(num){
    return (num  % 2 == 0) ? true :false ;
}

console.log(isEvenByNorm(4));







