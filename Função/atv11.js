let i = 0
let num = [];
let maiorNum = 0;
let menorNum;

function mM(){
    for(let i = 1; i < 6; i++){
        num[i-1] = Number(prompt(`Digite o ${i}° número`));
    
        if (maiorNum < num[i-1]){
            maiorNum = num[i-1]
        }
        console.log(`O maior número no momento é ${maiorNum}`)
        menorNum = num[i-1]
        if (menorNum > num[i-1]){
            menorNum = num[i-1]
        }
        console.log(`O maior número no momento é ${menorNum}`)
    }
    document.getElementById('info').innerHTML += (`O maior número foi <strong> ${maiorNum} </strong> <br>`)
    document.getElementById('info').innerHTML += (`O menor número foi <strong> ${menorNum} </strong>`)
}
console.log(mM())

