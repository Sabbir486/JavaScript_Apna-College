//Event Handling--->

//Event Object

// let btn = document.querySelector("#btn");

// btn.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);   
//     console.log(evt.target);
     
// }

//Event Listeners

//node.addEventListener(event, callback) //callback --> handler
//node.removeEventListener(event, callback)

btn.addEventListener("click", (evt) => {
    console.log("Button was clicked");
    console.log(evt);
    console.log(evt.type);
       
})

btn.addEventListener("click", () => {
    console.log("Button was clicked-2nd time");
    
})

btn.addEventListener("click", () => {
    console.log("Button was clicked-3nd time");
    
})

btn.addEventListener("click", () => {
    console.log("Button was clicked-4nd time");
    
})

