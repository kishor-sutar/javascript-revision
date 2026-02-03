
function step1P() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Step 1 complete");
            resolve();
        }, 1000);
    });
}

function step2P() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Step 2 complete");
            resolve();
        }, 1000);
    });
}

function step3P() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Step 3 complete");
            resolve();
        }, 1000);
    });
}


//sequential (slow)

// async function sequential() {
//     await step1P();
//     await step2P();
// }


//parallel (fast)

// async function parallel() {
//     await Promise.all([step1P(), step2P()]);
// }

// sequential();


// parallel();



/**
1. Sequential Execution (The "Wait in Line" method)
In your sequential() function, JavaScript works like a single-lane road.

It starts step1P().

It stops everything and waits for step1P() to finish.

Only then does it start step2P().

Total Time: Time of Step 1 + Time of Step 2.



2. Parallel Execution (The "Multi-Tasking" method)
With Promise.all, JavaScript starts both tasks at almost the same time.

It tells the system to start step1P() and step2P() immediately.

They both run in the background simultaneously.

Total Time: Only the time of the slowest task.
 */



function fakeAPI(name,time){
    return new Promise(()=>{
        setTimeout(()=>{
            name("ooooo")
            
          
        },time);

    });
}




async function sequential() {
    await fakeAPI(()=>{
        console.log("oooo");
        
    },1000);
    await fakeAPI(()=>{
        console.log("555555");
        
    },1000);
}

// sequential();




// function delay(ms) {
//     return new Promise((resolve) => {setTimeout(() => {resolve(`Waited for ${ms} milliseconds`)}, ms)});
// }

// // How to use it:
// delay(2000).then((msg) => console.log(msg));