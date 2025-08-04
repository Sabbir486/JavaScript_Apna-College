//Object --> Collection of different DataTypes

const student = {
    //key : value (pair)
    fName : "Sabbir",
    marks : 92,
    cgpa : 3.81,
    isPass : true
};

console.log(student);

console.log(student["fName"]);
console.log(student.marks);

console.log(typeof(student));


//Change the Variable in an Object
student.marks = student.marks + 5;
console.log(student.marks);



