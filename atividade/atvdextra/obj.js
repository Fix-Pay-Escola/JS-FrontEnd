const vayne = {
    gold: 5100,
    compra: function comp(buy){
        if (this.gold>=buy){
        this.gold-=buy
    console.log(`Parabéns pela compra! gold restante: ${this.gold}`)
        } else {
            console.log(`Gold insuficiente. Falta: ${(buy-this.gold)*-1}`)
        }
    }
}
vayne.compra(3000)
console.log(vayne.gold)