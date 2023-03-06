let num = Number(prompt("Digite um número:"))
function teste(numero){
    numero = num % 2
    if(numero === 0){
        document.getElementById('info').innerHTML = `O número é par`
        console.log("O número é par")
        return(`verdadeiro`)
    }
    else{
        document.getElementById('info').innerHTML = `O número é impar`
        console.log("O número é impar")
        return(`falso`)
    }
}
console.log(teste(num))