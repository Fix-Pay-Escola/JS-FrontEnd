function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')



    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente.')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            //Homem
            genero = 'Homem'

            if (idade >= 0 && idade < 4) {
                img.setAttribute('src', 'imagens2/h-bebe.png')
                //bebe
            }else if(idade < 10){
                img.setAttribute('src','imagens2/h-crianca (1).png')
            }  else if (idade < 21) {
                img.setAttribute('src', 'imagens2/h-adolescente.png')
                //adolescente
            }else if(idade < 35){
                img.setAttribute('src','imagens2/h-jovem.png')
                //jovem
            }
             else if (idade < 50) {
                img.setAttribute('src', 'imagens2/h-meia idade.png')
                //adulto
            }
            else if(idade < 120) {
                img.setAttribute('src', 'imagens2/h-idoso.png')
                //idoso
                
            }
            else{
                img.setAttribute('src','imagens2/morto.png')
                
            }
        }

        else if (fsex[1].checked) {
            //mulher
            genero = 'mulher'

            if (idade >= 0 && idade < 4) {
                img.setAttribute('src', 'imagens2/m-bebe.png')
                //bebe
            }
            else if(idade < 10){
                img.setAttribute('src','imagens2/m-crianca.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens2/m-adolescente.png')
                //adolescente
            }else if(idade <35){
                img.setAttribute('src','imagens2/m-jovem.png')
                //jovem
            }else if (idade < 50) {
                img.setAttribute('src', 'imagens2/m-meia-idade.png')
                //adulto
            }
            else if(idade < 120) {
                img.setAttribute('src', 'imagens2/m-idosa.png')
                //idoso
            }
            else{
                img.setAttribute('src','imagens2/morto.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` detectamos genero ${genero} com a Idade : ${idade}`
        res.appendChild(img)
    }
}