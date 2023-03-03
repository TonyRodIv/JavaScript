let num = [parseInt(prompt("Digite a primeira nota")),parseInt(prompt("Digite a segunda nota")),parseInt(prompt("Digite a terceira nota")),]
let letra = prompt("Digite 'A' para média Aritmética \nDigite 'P' para média por pesos \n\nDigite a letra correspondente a sua opção:")
let opcao = letra.toUpperCase();

function calculo(num01, num02, num03){
    if(opcao=="A"){
        let result = (num01+num02+num03)/3
        document.getElementById('info').innerHTML = `Você escolheu a opção de média aritmética <br> Sua Média foi: <strong> ${result} </strong>`
    }
    else if(opcao=="P"){
        let result;
        let n=[num01*5,num02*3,num03*2] 
        result = (n[0]+n[1]+n[2])/10
        document.getElementById('info').innerHTML = `Você escolheu a opção de média ponderada <br> Sua Média foi: <strong> ${result} </strong>`
    }

}
console.log(calculo(num[0],num[1],num[2]))