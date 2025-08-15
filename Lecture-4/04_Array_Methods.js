//Method-1: Push()

let marks = [1,2,3,4,5];

marks.push(10,20,30);
console.log(marks);
console.log();


//Method-2: Pop()

let deleted = marks.pop();
console.log(marks);
console.log("Deleted Marks: ",deleted);
console.log();


//Method-3: toString()

let strMark = marks.toString();
console.log(strMark);
console.log();


//Method-4: unshift == push() --> Add at beginning

marks.unshift(100);
console.log(marks);
console.log();



//Method-5: shift == pop() --> Delete from start

marks.shift(100);
console.log(marks);
console.log();


//Method-6: Splice(StartIdx, delCount, newElement) --> Change original array

//Add Element
let arr = [1,2,3,4,5,6,7];
console.log(arr.splice(2,0,101,102));

//Delete Element
console.log(arr.splice(3,1);

//Replace Element
console.log(arr.splice(3,1,2000);










