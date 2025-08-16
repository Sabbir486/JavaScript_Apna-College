let divs = document.querySelectorAll(".box");

let idx = 1;
for(div of divs){
    div.innerText = `New Unique Value ${idx}`;
    idx++;
}

// divs[0].innerText = "New Unique Value 01";
// divs[1].innerText = "New Unique Value 02";
// divs[2].innerText = "New Unique Value 03";

