const countdown = ()=>{
    const countDate = new Date("Jan 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();

    const gapToEvent = countDate - nowDate; //pega a data do evento e diminuir pela atual para formar a contagem regressiva
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gapToEvent / day);
    const textHour = Math.floor(gapToEvent % day / hour);
    const textMinute = Math.floor(gapToEvent % hour / minute);
    const textSecond = Math.floor(gapToEvent % minute / second);

    document.querySelector('.day').innerHTML = String(textDay).padStart(2,'0')
    document.querySelector('.hour').innerHTML = String(textHour).padStart(2,'0')
    document.querySelector('.minute').innerHTML = String(textMinute).padStart(2,'0')
    document.querySelector('.second').innerHTML = String(textSecond).padStart(2,'0')
}
console.log(countdown)
setInterval(countdown,1000) //criar um intervalo de 1000 segundos para ativar a função