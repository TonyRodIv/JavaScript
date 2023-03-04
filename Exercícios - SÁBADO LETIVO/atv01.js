let segundos = Number(prompt("Digite o tempo em segundos: "))
function conversor(seconds) {
    let horas = Math.floor(seconds / 3600);
    console.log(horas)
    let minutos = Math.floor((seconds % 3600) / 60);
    console.log(minutos)
    let segundosRestantes = seconds % 60;
    console.log(segundosRestantes)
  
    document.getElementById('info').innerHTML = `${horas}h ${minutos}min ${segundosRestantes}s`
    return `${horas}h ${minutos}min ${segundosRestantes}s`;
  }
  console.log(conversor(segundos));
