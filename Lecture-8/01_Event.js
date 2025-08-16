let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {  //Arrow Function
    console.log("Btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
    
}

let div = document.querySelector("div");

div.onmouseover = () => {
    console.log("Clicked Done!");
}