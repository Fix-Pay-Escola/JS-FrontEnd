/*FUNÇÃO PAR IMPAR*/
function parimpar(n) {
    /* se o resto da divisão for igual a 0 */
    if (n%2 == 0) {
        return 'par!'
    } else {
        return 'ímpar!'
    }
}

let res = parimpar (3)
console.log(`O Número detectado foi ${3} , este Número é ${res}`)

//AUTOR:LEO