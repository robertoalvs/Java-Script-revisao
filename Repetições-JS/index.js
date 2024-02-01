function contar() {


    let n1 = document.querySelector('input#iini')
    let n2 = document.querySelector('input#ifim')
    let n3 = document.querySelector('input#ipasso')

    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let num3 = Number(n3.value)

    let res = document.querySelector('div#res')


    if (num1 == 0 || num2 == 0 || num3 == 0) {

        alert('ERRO! CORRIGIR')
        res.innerHTML = 'IMPOSSÍVEL CONTAR'

    } else {
        
        res.innerHTML = 'Contando:'

        if (num1 < num2) {

            for (let c = num1; c <= num2; c += num3) {

                res.innerHTML += `${c} \u{1F449}`
            }
            
        } else {

            for (let c = num1; c >= num2; c -= num3) {

                res.innerHTML += `${c} \u{1F449}`

            }
        }
        

        res.innerHTML += `\u{1F3C1}`
    } 
 }
