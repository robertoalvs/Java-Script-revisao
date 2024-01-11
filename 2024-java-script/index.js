
function verificar() {

    let msg = document.querySelector('div#msg')
    let res = document.querySelector('div#res')
    let imagem = document.querySelector('img#foto')

    let data = new Date()
    let hora = data.getHours()
    let ano = data.getFullYear()
    let dia = data.getDate()

    msg.innerHTML = `Estamos em ${ano} e são ${hora} horas da manhã`


    if (hora >= 0 && hora < 12) {

        foto.src = '../teste.if/img/manha.png'

        res.innerHTML = `Boa dia hoje, hoje é dia <strong>${dia}</strong>`

    } else 
            if (hora >= 12 && hora < 18) {

                foto.src = '../teste.if/img/tarde.png'

                res.innerHTML = `Boa tarde hoje é dia <strong>${dia}</strong>`

            } else {

                foto.src = '../teste.if/img/noite.png'

                res.innerHTML = `Boa noite hoje é dia <strong>${dia}</strong>`
            }
}