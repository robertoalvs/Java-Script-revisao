function clicar() {

    let form = document.querySelector('div#res-form')
    let nome = document.querySelector('input#inome')
    let anoatual = document.querySelector('input#inum1')
    let nasc = document.querySelector('input#inum2')
    let pais = cocument.querySelector('input#ipais')
    
    let n1 = Number(anoatual.value)
    let n2 = Number(nasc.value)
    
    let country = pais.value
    let soma = n1 - n2

    

    if (nome.value.length == 0 || anoatual.value.length == 0 || nasc.value.length == 0 || pais.value.length == 0) {

        alert('Digite alguma coisa')
    }
}