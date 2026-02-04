// 🎯 Why this matters

// this decides:

// which object owns a method

// how event handlers behave

// how React class components worked

// how libraries like Express, jQuery, Vue were 



// 🧠 Brutal Truth

// this is NOT where function is written.
// this is decided by HOW the function is called.

console.log(this);
// In Node → {} (module exports)

const user = {
    name:"Kishor",

    show(){
        console.log(this.name);
    }
}


// user.show();   //Kishor
// Here this = user because
// function was called as user.show().


const user2 = {
    name:"Rahul",


    show(){
        function inner(){
            console.log(this.name);
        }


        inner();
    }
};



// user2.show();


const user3 = {
    name:"Amit",
    show(){
        const inner = () =>{
            console.log(this.name);
            
        };

        inner();
    }
}




// user3.show();


//----------------------------Call - invoke with specific this ----------------------------------------------------


function greet(city){
    console.log(this.name, city);
    
}


const person = {name : "kishor"};

greet.call(person,"pune");



//-------------------apply -- same but argument as array--------------------------------------



greet.apply(person,["mumbai"]);


//----------------------bind- returns new function -------------------------------------------------------

const newFn = greet.bind(person);

// newFn("Delhi");


//--------------------------Exercise---------------------------------------------

const car ={
    brand :"BMW",
    show(){
        console.log(this.brand);
        
    }
};


const fn = car.show.bind(car);
fn();
//1.Call fn()
//2.Explain result
//3/Fix it using bind




function add(a,b){
    return this.base + a + b;
}


const obj = {base : 10}


// const result =add.call(obj,1,2);
// console.log(result);


const result = add.apply(obj,[1,2]);
console.log(result);









