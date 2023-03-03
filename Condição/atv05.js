const aumento = 30/100
let salario = parseInt(prompt("Qual o seu salário atual?"))
let salarioFinal = 0

if(salario <=500){
    let salarioFinal = (salario*aumento)+salario
    document.getElementById('info').innerHTML = `Você tem direito a um <strong>aumento</strong>!! <br> A partir de agora seu novo salário vai ser R$ ${salarioFinal} 🤑`
} else{
    document.getElementById('info').innerHTML = `Você <strong>não</strong> direito a um aumento!! <br> Seu salário permanecerá o mesmo. 😢`
}