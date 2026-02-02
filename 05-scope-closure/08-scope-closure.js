/********** Scope  &  closures *****************/


let globalVar = "I am global";

function testScope() { 
    let localVar = "I am Local";

    console.log(globalVar);  //accessible
    console.log(localVar);   //accessible    
}

testScope();
// console.log(localVar); 


if(true){
    let a = 10;
    const b = 20;
    var c  = 30;
}

// console.log(a); 
// console.log(b);

console.log(c); // works -> var igonres block

console.log("---------------------Closure ------------------------------------");

/**
 * definition in human lang:
 * A Closure is when a function rememberds variables from its outer Scope
 * even after that outer function has finished.
 * 
 * 
 */

function outer(){
    let count = 0;
    function innner(){
        count++;
        console.log(count);
    }

    return innner;
}

const counter = outer();
counter() ;//1
counter(); //2
counter() ;// 3


console.log("----------------------Private variable pattern--------------------------------------");

function createUser(name){
    let score = 0;
    return{
        getName(){
            return name;
        },
        increase(){
            score++;
        },
        getScore(){
            return score;
        }
    };
}


const user = createUser("kishor");

user.increase();
user.increase();

console.log(user.getScore());



console.log("-----------------------------Exrecise----------------------------------");


function makeMultiplier(x){
    //return a function that multiplies any  number by x]
    return function demo(y){
        return x*y;
    }
    
}

const double = makeMultiplier(2);
console.log(double(5)); //should print 10


const triple = makeMultiplier(3);
console.log(triple(5));// should print 15

