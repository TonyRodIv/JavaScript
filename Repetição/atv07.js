let i = 0
let num = [];
let maiorNum = 0;

for(let i = 1; i < 11; i++){
    num[i-1] = Number(prompt(`Digite o ${i}° número`));

    if (maiorNum < num[i-1]){
        maiorNum = num[i-1]
    }
    console.log(`O maior número no momento é ${maiorNum}`)
}
document.getElementById('info').innerHTML = (`O maior número foi <strong> ${maiorNum} </strong>`)
