// For In Loop

let student = {
    name: "Sabbir",
    age : 25,
    cgpa: 3.81,
};

for(let key in student){
    console.log("key: ", key, " value: ", student[key]);
}