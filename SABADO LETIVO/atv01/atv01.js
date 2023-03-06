let segundos = Number(prompt("Digite o tempo em segundos: "))
function conversor(seconds,horas,minutos) {
    horas = Math.floor(seconds / 3600);
    console.log(horas)
    minutos = Math.floor((seconds % 3600) / 60);
    console.log(minutos)
    segundosRestantes = seconds % 60;
    console.log(segundosRestantes)
    document.getElementById('info').innerHTML = `${horas}h ${minutos}min ${segundosRestantes}s`
    return `${horas}h ${minutos}min ${segundosRestantes}s`;
  }
  console.log(conversor(segundos));
