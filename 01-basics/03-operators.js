/**
 * Operators & Type Coercion
 * 
 * real production bugs come from things like:
 * 
 * "5" + 1 giving "51"
 * [] == [] being false
 * if(value) behaving unexpectedly
 * API's sending string instead of numbers
*/

/**
 * Core rule (burn this into your brain)
 * js has two comparison systems:
 * == -> loose comparison (does type conversion)
 * === ->strict comparison (no comparison)
 * 
 * industry rule:
 *      Always use  === unless you  have very specific reason not to.
 */

//

//----------
//Arithmetic Operators
//---------------------------
console.log("------------------------------");

console.log(10 + 5); // 15
console.log(10 -5);  // 5
console.log(10 * 5) //50
console.log(10 /5) ;  // 2


//---------------------
// String +  Numbers
// ----------------------\
console.log("---------------String + Numbers-------------------");

console.log("5" +  1);// number is converted to string -> "51"

console.log("5" - 1);

console.log(1 + "5");

console.log(1- "5");

console.log(5 * "p");

console.log("3" * "k" )


   // string converted to number -> 4

//----------------------
// Loose equality (==)
//----------------------
console.log("------------------lose equality-------------");

console.log(5 == "5");

//true -> type Coercion happens

//----------------------
//strict equality (===)
//---------------------
console.log("---------------------strict equality-----------------");
console.log(5==="5");


//------------------------
//Boolean Coercion
//-------------------------
console.log("------------------------Boolean Coercion-----------------");
console.log(Boolean(0)); 
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("hello"));

//-Exrecise------


console.log("--------------------Exrecise-----------");

console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);
console.log("" == false);
console.log("" === false);










