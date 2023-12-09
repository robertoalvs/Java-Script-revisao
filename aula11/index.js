

function verificar() {

    let texto = document.getElementById('icountry')
    let result = document.getElementById('res')

    let pais = texto 

        if  (pais = 'Brasil' || pais == 'Brasil' ) {

            result.innerText = 'BRASIL'
            result.style.background = "green"
            result.style.color = 'yellow'

        } else  if (pais = 'EUA' && pais == 'EUA' ){

            result.innerText = 'ESTRANGEIRO'
            result.style.background = 'black'
            result.style.color = 'white'
        } else {

            result.innerText = 'VAI TIRAR O PASSAPORTE'
        }
        
}
            
    
        

    