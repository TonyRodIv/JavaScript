let valores = [prompt("Digite o primeiro valor:"), prompt("Digite o segundo valor:")]

function teste(vlr1, vlr2) {
    if (valores[0] === valores[1]) {
        document.getElementById('info').innerHTML = `Verdadeiro`
        return (`Verdadeiro`)
    }
    document.getElementById('info').innerHTML = `Falso`
    return (`Falso`)
}
console.log(teste(valores[0], valores[1]))