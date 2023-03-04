let horaMin1 = [prompt("Digite o hórario que iniciou em horas (somente hora): "), prompt("Digite o hórario que começou em minutos (somente o minuto da hora): ")]
let horaMin2 = [prompt("Digite o hórario que acabou em horas (somente hora): "), prompt("Digite o hórario que acabou em minutos (somente o minuto da hora): ")]
function tempo(h1, m1, h2, m2) {
    let tempoRestanteH, tempoRestanteM;

    if (h1 > h2) {
      tempoRestanteH = h2 - h1;
    } else {
      tempoRestanteH = h1 - h2;
    }
    if (m1 < m2) {
      tempoRestanteM = m1 - m2;
    } else {
      tempoRestanteM = m2 - m1;
    }
    
    tempoRestanteH=Math.abs(tempoRestanteH)
    tempoRestanteM=Math.abs(tempoRestanteM)

    console.log(`${tempoRestanteH}h e ${tempoRestanteM}m`)
    document.getElementById('info').innerHTML = `${tempoRestanteH}h e ${tempoRestanteM}m`
}
console.log(tempo(horaMin1[0], horaMin1[1], horaMin2[0], horaMin2[1]))