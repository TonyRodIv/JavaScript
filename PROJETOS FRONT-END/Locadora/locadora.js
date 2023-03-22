function conversor() {
    const minutos = parseFloat(document.getElementById('tempoM').value)
    const nome = document.getElementById('name').value
    let horas = Math.floor(minutos / 60);
    let minutosR = Math.floor(minutos % 60)

    document.getElementById('nomeResul').innerHTML = `<strong>O FILME: </strong> ${nome}`
    document.getElementById('tempoResul').innerHTML = `<strong>TEM: </strong>${horas} hora(s) ${minutosR} minuto(s)`
    console.log(`${horas}h ${minutosR}m`)
}
