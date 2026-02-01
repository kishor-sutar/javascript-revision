//for loop is used when number of iteration are known

for(let i = 0 ; i <= 5 ;i++){
    console.log("count: " ,i);
}

console.log("----------------------------------------------------------");

// while loop runs as long as condition is true
let count = 1;

while(count <= 3){
    console.log("While count: " , count);
    count++;
}


console.log("------------------------------------------------------------");

//do.......while loop (runs at least once)
let num = 5;

do{
    console.log("runs at least once");
    num--;
    //Even though condition is false , body runs once
}while(num > 10);


console.log("-------------------------------------------------------------");

//for......of loop (industry favorite for arrays)

const users = ["Alice" , "bob" , "Charlie"];

for(const user of users){
    console.log(user);
    
}
//cleaner than index-based loops.Safer.

console.log("------------------Exrecise-----------------");

const numbers = [10,20,30,40];
//1. Print each number using for loop
//2. print each number using for.....of
//3. Stop loop when number is 30\

for(let i = 0 ; i < numbers.length ;i++){
    console.log(numbers[i] , "using for loop");
    
}

console.log("------------------------------------------");


for(const num of numbers){
    if(num==30){
        break;
    }
    console.log(num , "using for..of loop");
    
}

