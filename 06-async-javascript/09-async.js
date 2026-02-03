
//-----setTimeout-----------

// console.log("start");

// setTimeout(()=>{
//     console.log("inside timeout");
    
// },2000);


// console.log(("End"));
 

//-------------Callbacks (olddStyle, ugly)--------------------
console.log(
    "--------------callbacks---------------------"
);

function fetchData(callback){
    setTimeout(function(){
        callback("data received");
    },1000);
}

fetchData(function(result){
    console.log(result);
    
});



//---------------------Promises: - modern  solution------------------------------

console.log("-----------------------modern promises laternative-----------------------------");

const myPromise = new Promise(function(resolve,reject){
    let success = true;

    if(success){
        resolve("Work done");
    }else{
        reject("Error happens");
    }
});



myPromise
    .then(function(data){
        console.log(data);
        
    })
    .catch(function(err){
        console.log(err);
        
    });





//Async /Await (industry standars today)

function getData(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Async data");
        },1000);
    });
}


async function nandleData() {
    const result = await getData();
    console.log(result);
    
    
}


nandleData();




/////////////////////////////////////////////////////////////////////////

console.log("-------------------Exercise-----------------------------");



function wait(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },ms);
    });
}


async function sq() {
    console.log("A");
    await wait(2000);
    console.log("B");
    
    
}

sq();