// forEach --> Higher Order Method (function + object/Data Structure)

let arr = [1, 2, 3, 4, 5];

// forEach takes a callback function that is called for each item in the array
arr.forEach((val, idx) => {
    console.log(val + 10, idx);
});

console.log(); 

// Practice Problem

let ar = [1,2,3,4,5]

ar.forEach((val) => {
    console.log(val * val);
    
})