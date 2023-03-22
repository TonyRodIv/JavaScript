function revenda() {
    const veiculo = document.getElementById('name').value
    const preco = parseFloat(document.getElementById('preco').value)

    const desconto = (preco - (preco*0.50)).toFixed(1)
    const parcelado = (preco/12).toFixed(2)

    document.getElementById('nomeResul').innerHTML = `<strong>VEÍCULO: </strong> ${veiculo}`
    document.getElementById('resul').innerHTML = `<strong>ENTRADA DE: </strong> R$${desconto}`
    document.getElementById('resul2').innerHTML = `<strong>PARCELAS DE 12x de: </strong> R$${parcelado}`
}
