var agora = new Date()
var horario = `${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()} `
    console.log(`O horário de acesso a esse site consta ${horario}`)
    if (agora.getHours() < 12 && agora.getHours() > 5) {
        console.log('Que belo dia está fazendo lá fora!')
    } else if (agora.getHours <5) {
        console.log('Que bela madrugada está fazendo lá fora, recomendamos uma volta pelo parque!')
    } else if (agora.getHours() <= 18) {
        console.log('Que bela tarde está fazendo lá fora!')
    } else if (agora.getHours() > 18) {
        console.log('Que bela noite está lá fora!')
    } 



//autora:isabel















    /*var agora = 00
    var horario = `${agora}`
    console.log(`O horário de acesso a esse site consta ${horario}`)
    if (agora < 12 && agora > 5) {
        console.log('Que belo dia está fazendo lá fora!')
    } else if (agora < 5 && agora >= 0) {
        console.log('Que bela madrugada está fazendo lá fora, recomendamos uma volta pelo parque!')
    } else if (agora <= 18) {
        console.log('Que bela tarde está fazendo lá fora!')
    } else if (agora > 18) {
        console.log('Que bela noite está lá fora!')
    }*/
//autora:isabel