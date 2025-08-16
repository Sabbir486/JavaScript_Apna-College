// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {  //Arrow Function
//     console.log("Btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
    
// }

// let div = document.querySelector("div");

// div.onmouseover = () => {
//     console.log("Clicked Done!");
// }



// Event Listener -->

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (evt) => {
    console.log("Button was clicked- Handler1");
    // console.log(evt);
    // console.log(evt.type);
       
})

btn1.addEventListener("click", () => {
    console.log("Button was clicked- Handler2");
    
})

//Arrow Function
const handler3 =  () => {
    console.log("Button was clicked- Handler3");
};

btn1.addEventListener("click", handler3);


btn1.addEventListener("click", () => {
    console.log("Button was clicked- Handler4");
    
})

// Delete Event Listener

btn1.removeEventListener("click", handler3);