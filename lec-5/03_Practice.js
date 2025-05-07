//By using function keyword

function countVowel(str) {
    let count = 0;
    let n = str.length;
    for (let i = 0; i < n; i++) {
        let char = str[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    console.log(count);
}

countVowel("Sabbir Ahmed");


//By using Arrow Function

const vowelCount = (str) => {
    let cnt = 0;
    let r = str.length;

    for(let char of str){
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            cnt++;
        }
    }
    console.log(cnt);
    
}

vowelCount("tanvir ahmed rony");
