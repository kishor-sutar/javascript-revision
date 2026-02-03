//--------------
//Callback style 
//---------------
/*
function step1(callback){
    setTimeout(function(){
        console.log("Step 1 completed");
        callback();
    },1000);
}

function step2(callback){
    setTimeout(function(){
        console.log("Step 2 completed");
        callback();
    },2000);
}


function step3(callback){
    setTimeout(function(){
        console.log("step 3 completed");
        callback();
        
    },3000);
};


step1(()=>{
    step2(()=>{
        step3(()=>{
            setTimeout(()=>{
                console.log("All steps done");
            },4000);
            
            
        })
    })
})

*/
//--------------------
//Convert  same logic to promises
//-----------------------
/*
function step1P(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Step 1 completed");
            resolve();
        },1000);
    });
}


function step2P(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Step 2 completed");
            resolve();
            
        },1000);
    });
}


function step3P(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Step 3 complete");
            resolve();
        },1000);
    });
}

*/

// step1P()
//     .then(step2P)
//     .then(step3P)
//     .then(function(){
//         console.log("All steps done with promises");
        
//     });


//Async /Await version (real industry)

// async function runsteps() {
//     await step1P();
//     await step2P();
//     await step3P();    

//     console.log("All steps done with async/await");
    
// }


// runsteps();


function riskyTask(){
    return new Promise(function(resolve,reject){
        let success = false;
        setTimeout(function(){
            if(success){
                resolve("Done");
            }else{
                reject("Something went wrong");
            }
        },1000);
    });
}



async function handleRisk(){
    try{
        const result = await riskyTask();

        console.log(result);
        
    }catch(error){
        console.log("Cought error : ",error); 
    }
}


handleRisk();



