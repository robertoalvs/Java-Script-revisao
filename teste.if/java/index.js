function verificar() {

    let msg = document.querySelector('article#msg')
    let res = document.querySelector('article#res')
    let sec = document.querySelector('section#sec')
    let foto = document.querySelector('img#imagem')
    let corpo = document.querySelector('main#corpo')

    let data = new Date()
    let hora = data.getHours()
    let ano = data.getFullYear()
    let dia = data.getDate()


   msg.innerHTML = `Estamos em <strong>${ano}</strong> e são <strong>${hora}</strong> horas da manhã`

   if (hora >= 0 && hora < 12) {

        foto.src = "./img/manha.png"
        document.body.style.background = 'rgb(247, 168, 23)'
        corpo.style.background = 'rgb(241, 94, 26)'

        res.innerHTML += `<strong>Bom dia</strong> hoje é dia <strong>${dia}</strong>`


   } else 
            
        if (hora >= 12 && hora <= 18) {

        foto.src = "./img/tarde.png"
        document.body.style.background = 'rgb(241, 94, 26)'
        corpo.style.background = 'rgb(247, 168, 23)'

        res.innerHTML += `<strong>Bom dia</strong> hoje é dia <strong>${dia}</strong>`


   } else {

            foto.src = "./img/noite.png"
            document.body.style.background = 'rgb(59, 76, 235)'
            corpo.style.background = 'rgb(86, 22, 139)'

            res.innerHTML += `<strong>Bom dia</strong> hoje é dia <strong>${dia}</strong>`
            /* res.style.color = 'white' */

   }
}