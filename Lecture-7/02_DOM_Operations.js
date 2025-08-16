// Insert Element

// Create Element ***
let newBtn = document.createElement("Button");
newBtn.innerText = "Click Me!"
console.log(newBtn);

// Add Element ***

//1. Append ->>Add at the end of node (inside)

// let div = document.querySelector("div");
// div.append(newBtn);

//2. Prepend ->>Add at the start of node (inside)

// let div = document.querySelector("div");
// div.prepend(newBtn);

//2. before ->>Add before the node (outside)

// let div = document.querySelector("div");
// div.before(newBtn);

//2. after ->>Add after the node (outside)

let p = document.querySelector("p");
p.after(newBtn);




// Delete Element

let para = document.querySelector("p");
para.remove();


// HomeWork -> AppendChild, RemoveChild