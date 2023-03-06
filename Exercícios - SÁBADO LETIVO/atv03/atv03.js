// Crie uma função que recebe um objeto com o número e porcentagem das
// propriedades como parâmetros e retorne a porcentagem fornecida do
// número.

const objeto = {
    number: parseFloat(prompt("Qual o número?")),
    porcentage: parseFloat(prompt("Qual a porcengatem desse valor?"))
}
function obj(num,porcnt){
    valorFinal=(porcnt/100)*num;
    document.querySelector('#info').innerHTML=`${objeto.porcentage}% de ${objeto.number} é equivalente a ${valorFinal}`
    return(valorFinal)
}
console.log(obj(objeto.number, objeto.porcentage));