
function clicar () {

    let nome = document.querySelector('input#inome')
    let anoatual = document.getElementById('iyear')
    let nasc = document.getElementById('inasc')
    let flagbr = document.querySelector('img#flagbr')
    let euro = document.querySelector('img#estrangeiro')

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
            if(country == 'Brasil' || country == 'brasil')    {

        form.innerHTML = `Você mora no <strong>${country}</strong> seu nome é <strong>${name}</strong> e você tem <strong>${soma}</strong> anos <br>!!BRASILEIRO!!`

        flagbr.src = "./img/icons8-brazil-96.png"
        flagbr.style.opacity = '1'
        

    } else {

        form.innerHTML = `Você mora no <strong>${country}</strong> seu nome é <strong>${name}</strong> e você tem <strong>${soma}</strong> anos <br>!!ESTRANGEIRO!!`
        
        euro.src = "./img/icons8-new-zealand-96.png"
        euro.style.opacity = '1'
        flagbr.style.opacity = '0'
        
    } 

           
}