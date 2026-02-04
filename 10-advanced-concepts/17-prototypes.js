// 🎯 Why this matters

const { version } = require("react");

// Every object in JS is linked to:

// a prototype

// shared methods

// inheritance chain

// If you don’t get this, you’ll never truly understand:

// classes

// arrays

// functions

// this behavior


//-------Everything is an object-----------

const arr = [];
// console.log(arr.__proto__);




//===========creating object with prototypes==================================

const animal = {
    eat(){
        console.log("eating ....");
        
    }

};


const dog = Object.create(animal);

dog.bark = function(){
    console.log("barking ");
    
}



// dog.eat();
// dog.bark();



//======================== Modern class syntax (sugar) ============================

class person{
    constructor(name){
        this.name= name;
    }

    greet(){
        console.log("hello ...." + this.name);
        
    }
}


const p = new person("Rahul");

// p.greet();

// 🧠 Prototype Chain

// When you do:

// p.greet();


// JS searches:

// object itself

// Person.prototype

// Object.prototype

// null

// That path = prototype chain.




//-=====================Exercise-========================



function Vehicle(type){
    this.type = type;
}

Vehicle.prototype.info= function(){
    console.log("type" ,this.type);
    
}


const bike = new Vehicle("Bike");

bike.info();

