//Basic try/catch
try {
  const result = 10 / 0;
  console.log(result);

  console.log(x);   // x not defined → throws error
} catch (error) {
  console.log("Something went wrong");
  console.log(error.message);
}



console.log("--------------------------------------------------------------------------");
// Operate with finally block
try {
  console.log("Trying risky code");
} catch (err) {
  console.log("Error occurred");
} finally {
  console.log("This always runs");
}



console.log("------------------------------------------------------------------------------");

//thoughing custom error
function divide(a,b){
    if(b === 0){
        throw new Error("Cannot divide by zero");
    }


    return a/b;
}


try{
    divide(10,0);
}catch(err){
    console.log(err.message);
    
}


console.log("-------------------------------------------------------------------------------------");



//Error handling in async (critical)
async function fetchData() {
    throw new Error("API failed");
}


async function main(){
    try{
        await fetchData();
    }catch(err){
        console.log("Cought async error" ,err.message);
        
    }
}



main();




console.log("-------------------------------------------------------------------------------------------");

// 1. Write function withdraw(balance, amount)
//    - if amount > balance → throw error "Insufficient funds"
//    - else return new balance

// 2. Call it inside try/catch

// 3. Create async version:
//    withdrawAsync() that returns promise
//    handle with async/await + try/catch


