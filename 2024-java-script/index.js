
function verificar() {

    let msg = document.querySelector('div#msg')
    let res = document.querySelector('div#res')
    let imagem = document.querySelector('img#foto')

    let data = new Date()
    let hora = data.getHours()
    let ano = data.getFullYear()
    let dia = data.getDate()

    
    if (hora >= 0 && hora < 12) {

        msg.innerHTML = `Estamos em ${ano} e são ${hora} horas da manhã`
        res.innerHTML = `Bom dia, hoje é dia <strong>${dia}</strong>`

        foto.src = '../teste.if/img/manha.png'
        

    } else 
            if (hora >= 12 && hora < 18) {

                msg.innerHTML = `Estamos em ${ano} e são ${hora} horas da tarde`
                res.innerHTML = `Boa tarde, hoje é dia <strong>${dia}</strong>`

                foto.src = '../teste.if/img/tarde.png'

            } else {

                msg.innerHTML = `Estamos em ${ano} e são ${hora} horas da noite`
                res.innerHTML = `Boa noite, hoje é dia <strong>${dia}</strong>`

                foto.src = '../teste.if/img/noite.png'

            }
}