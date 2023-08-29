//continuar o codigo em casa
cliente = {
    nome: 'leonardo',
    idade: 18,
    dinheiro: 40,

    compra: function compra (ingresso){
        if(this.idade >=18 ){
 var preco = 30
 if(this.dinheiro>=preco){
    this.dinheiro-=preco
    console.log('Compra aprovada , Você é maior de idade, pagará: 30 reais')
 }
        } else {
            preco= 15
            console.log('Você é menor de idade, sua compra foi meia')
        }
    }
}

filmes = {
    filme1: 'Barbie',
    filme2: 'Oppenheimer',
    filme3: 'Parasita',
    filme4: 'Tudo em todo lugar ao mesmo ao mesmo tempo',
}

cliente.compra(1)

