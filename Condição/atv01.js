/*
var anoDeNascimento = parseInt(prompt("Digite o seu ano de nascimento: "));
var anoAtual = new Date()
var idadeAtual = anoAtual.getFullYear()-anoDeNascimento;

console.log(`Você nasceu em ${anoDeNascimento}`)
if(idadeAtual>=16){
    document.getElementById('info').innerHTML = `Você tem ${idadeAtual} anos, então você pode votar!!`
    if(idadeAtual>=18){
        console.log(`E também pode dirigir!!`)
    }
    else{
        console.log(`Poxa! Você ainda não pode dirigir!!`)
    }
}
else{
    console.log(`Poxa! Você tem ${idadeAtual} anos, então você ainda não pode votar e também não pode dirigir`)
}
*/
const idadeDirigir = 18;
const idadeVotar = 16;


let anoDeNascimento = parseInt(prompt("Digite o seu ano de nascimento: "));
let anoAtual = new Date()
let idadeAtual = anoAtual.getFullYear()-anoDeNascimento;

if(idadeAtual >= idadeVotar && idadeAtual < idadeDirigir){
    document.getElementById('info').innerHTML = `Você tem ${idadeAtual} anos, então você pode votar porém não pode dirigir 😬`
} else if(idadeAtual >=18){
    document.getElementById('info').innerHTML = `Você tem ${idadeAtual} anos, então você pode votar e também pode dirigir 😉👌`
} else if(idadeAtual <16 && idadeAtual >= 1){
    document.getElementById('info').innerHTML = `Você tem ${idadeAtual} anos, então você não pode votar nem dirigir 🤕`
}else{
    window.alert("ERRO - VOCÊ AINDA NÃO NASCEU")
}