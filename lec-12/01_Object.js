//Object Creation

// const student = {
//     name: "Sabbir Ahmed", //Property
//     marks: 96,             //Property

//     printMarks: function(){ //function/ method
//         console.log("Marks: ", this.marks);
        
//     },

// }


//Prototype --> Object under object which are already defined

const employee = {
    calTax() {
        console.log("Tax is 10%");
        
    }
}

const karanArjun = {
    salary: 50000,
    calTax() {
        console.log("Tax is 20%"); //This will get more priority
    }
}

karanArjun.__proto__ = employee //employee is using as prototype of karanArjun object


const karanArjun2 = {
    salary: 70000,
}

karanArjun2.__proto__ = employee //employee is using as prototype of karanArjun object
