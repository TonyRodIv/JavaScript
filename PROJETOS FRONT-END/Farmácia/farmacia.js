function calcular() {
    let name = document.getElementById('name').value;
    let preco = parseFloat(document.getElementById('preco').value);

    let precoFinal = Math.round(preco*2)

    document.getElementById('nomeResul').innerHTML = `<strong>Promoção de </strong>${name}`
    document.getElementById('resul').innerHTML = `<strong>Leve 2 por apenas </strong>R$ ${precoFinal}`
}
