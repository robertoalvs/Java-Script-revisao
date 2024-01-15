
function clicar() {

    let fotos = document.querySelector('img#foto')
    let numero1 = document.querySelector('input#inum')
    let sex = document.getElementsByName('sexo')
    let resposta = document.querySelector('div#res')

    let data = new Date()
    let ano = data.getFullYear() 

    let num = Number(numero1.value)
    let idade = ano - num

    

    if (idade == 0 || idade <= 11) {

        resposta.innerHTML = `Você tem: <strong>${idade}</strong> anos`

    } else  {

        alert('Adulto')
    }
}