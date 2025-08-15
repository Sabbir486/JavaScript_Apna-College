//DOM --> Document Object Model
//DOM --> Accessing HTML through JavaScript

//To do Dynamic Changes in pages we use DOM. It's not possible through HTML. That's why 
//it is done by JavaScript.(***)

//***console.dir() -> Print property and method (To print Object)
//***console.log() -> Only print

//DOM Manipulation --->

//Accessing Element by using Id

let heading = document.getElementById("heading"); //h1
console.dir(heading); // dir --> Cause this is an Object
                      

//Accessing Element by using Class

let heading1 = document.getElementsByClassName("heading1"); //h3, p
console.dir(heading1); //class return HTML Collection which is similar to Array
console.log(heading1);

//Accessing Element by using Tag

let para = document.getElementsByTagName("p"); //p
console.dir(para);


//Accessing Element by using Query Selector(Return Node)***

let element = document.querySelector("p"); //1st Element
console.dir(element);

//for Id--> #
let element1 = document.querySelector("#heading"); //1st Element
console.dir(element1);

//for Class--> .
let allelement = document.querySelectorAll(".myClass"); //ALL Element
console.dir(allelement);


//Properties-> tagName, innerText, innerHTML, textContent

console.dir(document.body.firstChild); //Node-> text, comment, element**

let head = document.querySelector("h1");
console.log(head);






