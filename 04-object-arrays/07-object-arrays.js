// 🎯 Why this matters in industry

// Almost everything you touch is:

// an object (user, request, response)

// an array (lists, API data, DB results)

// 🧠 Core idea

// Objects → key–value pairs (structured data)

// Arrays → ordered lists

// JavaScript is object-driven.

const  user  = {
    name:"Kshor",
    age:21,
    isAdmin:false
};

//access properties
console.log("user name:",user.name);
console.log("user age:",user.age);

//modify properties
user.age = 23;

console.log(user);

//Add new property
user.city = "pune";

console.log(user);



console.log("--------------------------------functions----------------------------------");

const numbers = [10,20,30];
//access

console.log(numbers[0]);

//add elements
numbers.push(40);


//Remove last elements
numbers.pop();

console.log(numbers);

console.log(typeof(numbers));

console.log("----------------------looping over the arrays----------------------------------");


const skills = ["js","react","Node"];

for(const skill of skills){
    console.log(skill);
    
}



console.log("-------------------Objects inside array--------------------------------------------");


const users= [
    {
        name:"A",
        role:"admin"
    },

    {
        name:"B",
        role:"user"
    }
];


for(const user of users){
    console.log(user.name , user.role);
    
}




console.log("--------------Exrecise---------------");

const products = [
    {name:"Laptop" ,price:50000},
    {name:"Phone" , price:20000},
];


//1. print all products names
for(const pro of products){
    console.log(pro.name);
    
}

//2.Increase each price by 10 %

for(const pro of products){
    pro.price = (pro.price * (10/100) + pro.price );
}


//3. print updated array

console.log(products);



