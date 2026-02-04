// In real projects you will almost never see raw for loops.
// You’ll see:

// .map() → transform data

// .filter() → select data

// .reduce() → calculate from data



// 🧠 Core Idea

// A Higher Order Function is a function that:

// takes another function as argument

// or returns a function

// All array methods are built on this.


const numbers  = [1,2,3,4];

//multiply each by 2

const doubled = numbers.map((n)=>{
    return n *2;
});


// console.log(doubled);

console.log("---------------------------------------filter select items----------------------------------------------");


const age = [12,18,22,15,30];

const adults = age.filter((age)=>{
    return age >= 18;
});

// console.log(adults);
// [ 18, 22, 30 ]


console.log("---------------------------------------------reduce-creating single value------------------------------------------------");

const prices = [100, 200, 300];
const total = prices.reduce((sum,p)=>{
    return sum +p;
},0);

// console.log(total);
// 600





const products = [
  { name: "laptop", price: 50000, inStock: true },
  { name: "phone", price: 20000, inStock: false },
  { name: "tablet", price: 30000, inStock: true },
];



const products_name = products.map((u)=>{
    return  u.name;
});


// console.log(products_name);

const inStock_products = products.filter((u)=>{
    return u.inStock;
}).map((u)=>{
    return u.name;
})

// console.log(inStock_products);



const total_instock = products.filter((u)=>{
    return u.inStock;
}).map((u)=>{
    return u.price;
}).reduce((total,current)=>{
    return total +current;
},0);


// console.log(total_instock);




const discount_array  = products.map((u)=>{
    return u.price * 0.9;
});


console.log(discount_array);



