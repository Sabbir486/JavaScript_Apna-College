let marks = [85, 97, 44, 37, 76, 60]

let size = marks.length;
let sum = 0;

for(let ele of marks){
    sum = sum+ele;
}

let avg = sum/size;
console.log(`Average marks is ${avg}`);
