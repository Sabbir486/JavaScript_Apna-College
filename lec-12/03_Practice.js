let Data = "Secret Information";

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Data: ", Data);
        
    }
}

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    
    editData(){
        Data = "New Data";
    }
}

let student1 = new User("Sa", "sa@gmail.com");
console.log(student1);

let student2 = new User("Ra", "ra@gmail.com");
console.log(student2);

let admin1 = new Admin("Ad", "ad@gmail.com");
console.log(admin1);

