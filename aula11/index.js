

function verificar() {

    let horas = document.getElementById('icountry')
    let result = document.getElementById('res')

    let n = Number(horas.value)

    let time = n

        if  (time <= 11) {

            result.innerText = 'BOM DIA'
            result.style.background = "green"
            result.style.color = 'yellow'

        } else if (time >= 12 && time <= 23){

            result.innerText = `BOA TARDE SÃO ${time} HORAS`
            result.style.background = 'orange'
            result.style.color = 'black'
            
            
        } else {

            result.innerText = 'BOA NOITE'
            result.style.background = 'black'
            result.style.color = 'white'
        }
        
}
            
    
        

    