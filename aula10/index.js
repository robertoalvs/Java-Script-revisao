
function somar() {

    let numero = document.querySelector('input#inum')
    let numero2 = document.querySelector('input#inum2')
    let res = document.querySelector('div#res')
    let n1 = Number(numero.value)
    let n2 = Number(numero2.value)

    let soma = n1 + n2
    

    res.innerHTML = `A soma de ${n1} + ${n2} é: ${soma}`

}