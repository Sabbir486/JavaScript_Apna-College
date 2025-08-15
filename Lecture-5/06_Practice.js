// Problems

let n = prompt("Enter a number: ");

let arr = [];

for(let i=0; i<n; i++){
    arr[i] = i+1;
}

console.log(arr);

//Part-1:

let sum = arr.reduce((prev, curr) => {
    return prev + curr; 
})

console.log(sum);
console.log();


//Part-2:

let factorial = arr.reduce((prev, curr) => {
    return prev * curr; 
})

console.log(factorial);
