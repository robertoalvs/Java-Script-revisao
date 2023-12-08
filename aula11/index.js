
/* let vel = 50

if (vel > 60) {

    console.log(`Sua velocidade foi ${vel}, você ultrapassou o limite permitido, MULTADO!`)

} else {

    console.log(`DIRIJA COM CUIDADO!`)
} */


let country = ''
let box = document.querySelector('input#itext')
let res = document.querySelector('div#pais')

let result = country

res.innerHTML = box

if (box == 'Brasil' ) {

    res.style.background = "green"
    res.style.color = "yellow"
    res.innerText = 'BRASIL'

} else {

    res.innerText = 'ESTRANGEIRO'
    res.style.background = "black"
    res.style.color = "white"    
}