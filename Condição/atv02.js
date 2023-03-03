let tempCelsius = parseInt(prompt("CONVERSOR DE TEMPERATURA -- CELSIUS para FAHRENHEIT 🌡️"+"\n"+"\n"+"Digite a temperatura em Celsius:"))
let tempFahrenheit= tempCelsius * 1.8 + 32
document.getElementById('info').innerHTML = `${tempCelsius}°C em são equivalentes a ${tempFahrenheit}°F`