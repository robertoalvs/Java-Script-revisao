
function clicar() {

    let fotos = document.querySelector('img#foto')
    let numero1 = document.querySelector('input#inum')
    let sex = document.getElementsByName('sexo')
    let imasc = document.querySelector('input#imasc')
    let ifem = document.querySelector('input#ifem')
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


    }  else {

        if(homem) {

            genero = 'Homem'

            if (idade == 0 || idade <= 11) {

                fotos.src ='../2024-java-idade/img/crianca-homem.png'
                resposta.innerHTML = `Você é uma ${genero} e tem ${idade} anos`

            } else if (idade <= 17 ) {

                fotos.src ='../2024-java-idade/img/adolecente-menino.png'
                resposta.innerHTML = `Você é uma ${genero} e tem ${idade} anos`

            } else if (idade <= 59 ) {

                fotos.src ='../2024-java-idade/img/homem-adulto.png'
                resposta.innerHTML = `Você é uma ${genero} e tem ${idade} anos`

            } else  {

                fotos.src ='../2024-java-idade/img/homem-idoso.png'
                resposta.innerHTML = `Você é uma ${genero} e tem ${idade} anos`

            }

        } else if (mulher) {

            genero = 'Mulher'

            if (idade == 0 || idade <= 11) {

                fotos.src ='../2024-java-idade/img/crianca-mulher.png'
                resposta.innerHTML = `Você é uma ${genero} e tem ${idade} anos`

            } else if (idade <= 17) {

                fotos.src ='../2024-java-idade/img/adolecente-menina.png'
                resposta.innerHTML = `Você é uma ${genero} e tem ${idade} anos`

            } else if (idade <= 59) {

                fotos.src ='../2024-java-idade/img/mulher-adulta.png'
                resposta.innerHTML = `Você é uma ${genero} e tem ${idade} anos`

            } else {

                fotos.src ='../2024-java-idade/img/mulher-idosa.png'
                resposta.innerHTML = `Você é uma ${genero} e tem ${idade} anos`

            }
        }
        
    }
         

}