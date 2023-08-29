cliente = {
    nome: 'LUCAS',
    idade: 12,
    CPF: false,
    dinheiro: 400,
    comprar_bebida_alcoolica: function bebida(qntd) {
        if (this.idade >= 18 && this.CPF == true) {
            if (this.dinheiro >= (3.50 * qntd)) {
                console.log('Compra Autorizada e Pagamento Efetuado')
                this.dinheiro -= 3.50 * qntd
                console.log(`Saldo Restante: ${this.dinheiro}`)
            }
            else {
                console.log('Dinheiro Insuficiente')
            }
        } else if (this.idade >= 18 && this.CPF == false) {
            console.log('É Necessario cadastro para a compra de bebidas alcoolicas')
        } else if (this.idade < 18 & this.CPF == false) {
            console.log('Ídade abaixo do Autorizado pela Lei e é necessario CPF cadastrado')
        } else {
            console.log('ídade abaixo do autorizado pela lei, Compra Negada')
        }
    }
}

cliente.comprar_bebida_alcoolica(114)

