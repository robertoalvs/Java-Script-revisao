
function clicar () {

    let nome = document.querySelector('input#inome')
    let anoatual = document.getElementById('iyear')
    let nasc = document.getElementById('inasc')
    let flagbr = document.getElementById('flagbr')
    let euro = document.getElementById('estrangeiro')
    let pais = document.getElementById('ipais')

    let country = pais.value
    let name = nome.value

    let n1 = Number(anoatual.value)
    let n2 = Number(nasc.value)
    
    let soma = n1 - n2

    let form = document.getElementById('formulario')

    if (nome.value.length == 0 || anoatual.value.length == 0 || nasc.value.length == 0 || pais.value.length == 0) {

        alert('ERRO!!! Digite os campos corretamente.')


    } else 
            if (country == 'Brasil' || country == 'brasil')    {

            form.innerHTML = `<p> Você mora no <strong>${country}</strong> seu nome é <strong>${name}</strong> <br>Você tem <strong>${soma}</strong> anos <strong>!!BRASILEIRO!!</strong></p>`

            flagbr.src = "./img/icons8-brazil-96.png"
            flagbr.style.opacity = '1'
            euro.style.opacity = '0'
        

    } else {

        form.innerHTML = `<p> Você mora no <strong>${country}</strong> seu nome é <strong>${name}</strong> <br>Você tem <strong>${soma}</strong> anos <strong>!!ESTRANGEIRO!!</strong></p>`
        
        euro.src = "./img/icons8-new-zealand-96.png"
        euro.style.opacity = '1'
        flagbr.style.opacity = '0'
    } 

    

}
