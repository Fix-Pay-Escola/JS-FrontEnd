let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//função que mede os numeros de 0 a 100
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) { return true }

    else { return false }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else { return false }
}

//botao adicionar
function Adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)

    } else {
        window.alert('valor invalido ou ja encontrado na lista')
    }
    //quando apertar no adicionar  ele retira o numero que estava no input
    num.value = ''
    num.focus()
}

//botao de finalizar
function finalizar() {
    //se estiver vazio
    if (valores.length == 0) {
        window.alert('adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} Numeros cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma e todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}
function resetar(){
    valores = []
    const selectElement = document.getElementById('flista');
    selectElement.innerHTML = ''
    res.innerHTML = ''
}
function character(){
    
}
//habilita o enter
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        Adicionar();
    }
    if (e.keyCode == 116) {
        finalizar();
    }
    if (e.keyCode == 27) {
        resetar();
    }
}, false)

