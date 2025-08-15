//Accessing Element by using Id

let heading = document.getElementById("heading"); //h1
console.dir(heading); //dir -> Print property and method** (To print Object)
                      //log -> Only print

//Accessing Element by using Class

let heading1 = document.getElementsByClassName("heading1"); //h3, p
console.dir(heading1);
console.log(heading1);

//Accessing Element by using Tag

let para = document.getElementsByTagName("p"); //p
console.dir(para);


//Accessing Element by using Query Selector(Return Node)***

let element = document.querySelector("p"); //1st Element
console.dir(element);

let allelement = document.querySelectorAll("p"); //ALL Element
console.dir(allelement);


//Properties-> tagName, innerText, innerHTML, textContent

console.dir(document.body.firstChild); //Node-> text, comment, element

let head = document.querySelector("h1");
console.log(head);


