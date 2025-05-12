//Method-1: Map (Similar forEach but create a new Array)

let arr = [1,2,3,4,5];

let newArr = arr.map((val) => {
    return val
    
})

console.log(newArr);
console.log();



//Method-2: Filter

let evenArr2 = arr.filter((val) => {
    return val % 2 === 0;
})

console.log(evenArr2);
console.log();


//Method-3: Reduce (Output will give a single value)

let GreaterOne = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
})

console.log(GreaterOne);
console.log();


let sum = arr.reduce((prev, curr) => {
    return prev + curr;
})

console.log(sum);
console.log();


