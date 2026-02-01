
const age = 20;

//----------------------
//if / else
//-----------------------

if(age >= 18){
    console.log("User is allowed");
}else{
    console.log("User is not allowed");
}


console.log("----------------Else if chain (real world logic)-----------------------");

const score = 75;
if(score >= 90){
    console.log("Grade A");
    
}else if(score >= 75){
    console.log("Grade B");
    
}else if(score >= 60){
    console.log("Grade C");
    
}else{
    console.log("Fail");
}

/////////////////////////////////////////////////////////////////////

console.log("---------------Switch statement(cleaner for fixed value)-----------------------------------");

const role = "admin";

switch (role) {
    case "admin":
        console.log("Full access");
        break;

    case "user":
        console.log("Limited access");
        break;

    default:
        console.log("No access");
        
        
        
}


/**
 * industry rule:
 * Use if/else for range & conditions
 * Use switch for fixed known values
 * Avoid deeply nested if block --- refactor instead
 */

/////////////////////////////////////////////////////////////////

console.log("----------------------------------------exercise--------------------------------------------");

const isLoggedIn = true;
const isAdmin = false;

if(isLoggedIn && isAdmin){
    console.log("Admin dashboard");
}else if(isLoggedIn){
    console.log("USer dashboard");
    
}else{
    console.log("Please log in");
    
}