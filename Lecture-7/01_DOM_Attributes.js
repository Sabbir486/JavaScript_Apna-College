let div = document.querySelector("div");
console.log(div);

//getAttribute (attr)
let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

//setAttribute (attr, val)
let setName = div.setAttribute("name", "Sabbir");
console.log(setName);


// Special -> node.style
let divs = document.querySelector("div");
console.log(divs);

// divs.style.visibility = "hidden";