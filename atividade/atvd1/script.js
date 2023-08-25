
function carregar() {

    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = 1

    msg.innerHTML = `Agora sao ${hora} horas`
    if (hora >= 5 && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.bakcground = '#81A5B1'
    } else if(hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#f2a635'
    }else{
        img.src = 'imagens/noite.png'
        document.body.style.background = '#534A4B'
    }
}