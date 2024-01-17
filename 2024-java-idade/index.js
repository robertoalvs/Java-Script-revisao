
function clicar() {

    let fotos = document.querySelector('img#foto')
    let numero1 = document.querySelector('input#inum')
    let sex = document.getElementsByName('sexo')
    let resposta = document.querySelector('div#res')

    let data = new Date()
    let ano = data.getFullYear() 

    let num = Number(numero1.value)
    let idade = ano - num

    let homem = sex[0].checked
    let mulher = sex[1].checked
    let genero = ''
    

    if (numero1.value == 0 || numero1.value > ano) {

        alert('[ERRO!] Você não digitou nada, ou colocou o ano errado, [CORRIGIR]')


    } else if (homem ) {

            genero = 'Homem'
            fotos.src ='../2024-java-idade/img/crianca-homem.png'
            resposta.innerHTML = `Você é ${genero} e você tem ${idade}`

    } else  if (homem || idade >= 12 || idade <= 17) {

            genero = 'Homem'
            fotos.src ='../2024-java-idade/img/adolecente-menino.png'
            resposta.innerHTML = `Você é ${genero} e você tem ${idade}`

    } else  if(homem || idade >= 18 || idade <= 59) {

        genero = 'Homem'
        fotos.src ='../2024-java-idade/img/homem-adulto.png'
        resposta.innerHTML = `Você é ${genero} e você tem ${idade}`
    }


}