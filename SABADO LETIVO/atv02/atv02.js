let horaMin1 = [prompt("Digite o hórario que iniciou em horas (somente hora): "), prompt("Digite o hórario que começou em minutos (somente o minuto da hora): ")]
let horaMin2 = [prompt("Digite o hórario que acabou em horas (somente hora): "), prompt("Digite o hórario que acabou em minutos (somente o minuto da hora): ")]
function tempo(horaInicial, minutoInicial, horaFinal, minutoFinal) {
    let tempoRestanteH, tempoRestanteM;

    if (horaInicial < horaFinal) {
      tempoRestanteH = horaFinal - horaInicial;
    } else{
      tempoRestanteH = horaInicial - horaFinal - 24;
    }
    
    if (minutoInicial < minutoFinal) {
      tempoRestanteM = minutoInicial - minutoFinal;
    } else {
      tempoRestanteM = minutoFinal - minutoInicial;
    }
    
    tempoRestanteH=Math.abs(tempoRestanteH)
    tempoRestanteM=Math.abs(tempoRestanteM)

    console.log(`${tempoRestanteH}h e ${tempoRestanteM}m`)
    document.getElementById('info').innerHTML = `${tempoRestanteH}h e ${tempoRestanteM}m`
}
console.log(tempo(horaMin1[0], horaMin1[1], horaMin2[0], horaMin2[1]))