function carregar() {

    let msg = document.getElementById('msg')
    let foto = document.getElementById('imagem')
    let res = document.getElementById('foto')
    let sec = document.getElementById('sessao')

    let horaDia = new Date()
    let hora = horaDia.getHours()
    let mes = horaDia.getFullYear()
    let dia = horaDia.getDate()


    msg.innerHTML = `<p>Estamos em <strong>${mes}</strong> são exatamente: <strong>${hora} horas</strong> </p>`

    if (hora >= 0 && hora < 12) {

        foto.src = './img/manha.png'
        document.body.style.background = 'red'

        res.innerHTML += `<p>BOM DIA!!! <br> Hoje é dia <strong>${dia}</strong> </p>`



    } else if (hora >= 12 && hora <= 18) {

        foto.src = './img/tarde.png'
        document.body.style.background = 'pink'
        sec.style.background = 'green'
        sec.style.color = 'white'

        res.innerHTML += `<p>BOA TARDE!!! <br> Hoje é dia <strong>${dia}</strong> </p>`



    } else {

        foto.src = './img/noite.png'
        document.body.style.background = 'black'

        res.innerHTML += `<p>BOA NOITE!!! <br> Hoje é dia <strong>${dia}</strong> </p>`
    }
}
