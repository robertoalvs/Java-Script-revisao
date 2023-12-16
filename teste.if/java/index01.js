
function clicar () {

    let nome = document.querySelector('input#inome')
    let anoatual = document.getElementById('iyear')
    let nasc = document.getElementById('inasc')

    let name = nome.value

    let n1 = Number(anoatual.value)
    let n2 = Number(nasc.value)
    let soma = n1 - n2

    let form = document.getElementById('formulario')

    if (nome.value.length == 0 || anoatual.value.length == 0 || nasc.value.length == 0) {

        alert('ERRO!!! Digite os campos corretamente.')


    } else {

        form.innerHTML = `Seu nome é ${name} você tem ${soma} anos`
    }

           
}