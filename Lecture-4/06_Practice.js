let prices = [250, 645, 300, 900, 50];

for(let price of prices){
    price = price-((price/100)*10);
    console.log(price);
    
}