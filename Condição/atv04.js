let altura = prompt("Qual a sua altura atual?");
let peso = prompt("Qual o seu peso atual?");
let imc = peso / altura**2;
imc = imc.toFixed(2)

if(imc<=18.5){
    document.getElementById('info').innerHTML = `Seu Índice de Massa Corporal foi: ${imc} <br> Você está <strong>abaixo</strong> do peso 😢`
}else if(imc > 18.5 && imc <= 25){
    document.getElementById('info').innerHTML = `Seu Índice de Massa Corporal foi: ${imc} <br> Você está no peso <strong>Ideal</strong> 😉👌`
}else if(imc >25){
    document.getElementById('info').innerHTML = `Seu Índice de Massa Corporal foi: ${imc} <br> Você está <strong>acima</strong> do peso 😕`
}