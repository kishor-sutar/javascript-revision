// JavaScript first scans the entire file before running it.
// This is called the Memory Creation Phase.

// During memory creation:
// x is allocated memory and set to undefined
// test() function is stored completely in memory

console.log(x);
// At this moment:
// x exists in memory but has no value yet
// so JavaScript prints: undefined

var x = 5;
// Now during execution phase:
// value 5 is assigned to x

test();
// test function already exists in memory
// so JavaScript can execute it even before its definition appears

function test() {
  console.log("Test function running");
}

console.log(x);
// x now holds value 5
// so JavaScript prints: 5
