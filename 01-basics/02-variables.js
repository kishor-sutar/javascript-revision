//-----------------
//var example
//-----------------

console.log(a , " ", typeof(a));
//var is hoisted and initialized  with undefined

var a = 10;

console.log(a , "  " , typeof(a));
//now a has value 10

//----------------
//let example
//----------------
// console.log(b); 
// Reference error 
// b exists in memory but is in Temporal Dead zone (TDZ)

let  b = 20

console.log(b);
// works only after initialization


//-------------------------------------
//const example
//-------------------------------------

const c = 30;


//c = 40
// TypeError: Assignment to constant variable.

console.log(c);

console.log("========================================================================== exercise=======================================================================================");


if(true){
    var x = 100;   
    let y = 200;
    const z = 300;
}

console.log(x);

//should this work ?  => yes 


console.log(y);

//should this work ? =>

console.log(z); 

// should this work ?  =>  



