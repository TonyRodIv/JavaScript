let num=prompt("Me conte até quanto você quer dividir")
document.getElementById('info').innerHTML = `Os divisores de ${num} são: <br>`

for(let i = 0; i <= num; i++){
    num % i === 0 ? document.getElementById('info').innerHTML += `${i} <br> `: '';
}