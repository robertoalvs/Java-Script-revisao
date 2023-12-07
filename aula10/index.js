
function somar() {

    let numero = document.getElementById('inum')
    let numero1 = document.getElementById('inum2')
    let result = document.getElementById('res')

    let nu1 = Number(numero.value)
    let nu2 = Number(numero1.value)
    let total = nu1 + nu2

    result.innerHTML = `A soma de ${nu1} + ${nu2} é: ${total}`
}