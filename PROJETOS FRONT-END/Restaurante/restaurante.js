function preco(){
    let precoBuffetPorKg = document.getElementById('preco').value;
    let consumoEmGramas = document.getElementById('consumo').value;
    
    let precoTotal = (consumoEmGramas / 1000) * precoBuffetPorKg;
    document.getElementById('result').innerHTML = `<strong>O preço total a ser pago é:</strong> R$${precoTotal}`;
}