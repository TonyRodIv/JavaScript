let nome = prompt("Digite seu nome:");
let gender = prompt("Qual seu gênero:"+"\n"+"- Digite >M< para Masculino"+"\n"+"- Digite >F< para Feminino");
let genero = gender.toUpperCase();
let idade = prompt("Digite a sua idade:");
let tempoContri = prompt("Digite seu tempo de contribuição em sua empresa:");

switch(genero){
    case "M":
        if(idade>=65 && tempoContri>=35){
            document.getElementById('info').innerHTML = `Olá ${nome}, essas são as suas informações: <br> <strong>Seu gênero:</strong> ${genero}asculino <br> <strong>Sua idade:</strong> ${idade} anos <br> <strong>Seu tempo de contribuição com a empresa:</strong> ${tempoContri} anos <br> <br> De acordo com essas informações, você atende todos os requisitos para se aposentar. 😉👌`
        } else{
            document.getElementById('info').innerHTML = `Olá ${nome}, essas são as suas informações: <br> <strong>Seu gênero:</strong> ${genero}asculino <br> <strong>Sua idade:</strong> ${idade} anos <br> <strong>Seu tempo de contribuição com a empresa:</strong> ${tempoContri} anos <br> <br> De acordo com essas informações, você ainda <strong> não </strong> pode se aposentar. 😢`
        }
    break 
    case "F":
        if(idade>=62 && tempoContri>=30){
            document.getElementById('info').innerHTML = `Olá ${nome}, essas são as suas informações: <br> <strong>Seu gênero:</strong> ${genero}eminino <br> <strong>Sua idade:</strong> ${idade} anos <br> <strong>Seu tempo de contribuição com a empresa:</strong> ${tempoContri} anos <br> <br> De acordo com essas informações, você atende todos os requisitos para se aposentar. 😉👌`
        } else{
            document.getElementById('info').innerHTML = `Olá ${nome}, essas são as suas informações: <br> <strong>Seu gênero:</strong> ${genero}eminino <br> <strong>Sua idade:</strong> ${idade} anos <br> <strong>Seu tempo de contribuição com a empresa:</strong> ${tempoContri} anos <br> <br> De acordo com essas informações, você ainda <strong> não </strong> pode se aposentar. 😢`
        }
    break
    default:
        window.alert("⚠️ ERRO - CONFIRA AS INFORMAÇÕES E TENTE NOVAMENTE!! ⚠️")
    break
    }