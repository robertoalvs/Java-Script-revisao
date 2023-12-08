
/* let vel = 50

if (vel > 60) {

    console.log(`Sua velocidade foi ${vel}, você ultrapassou o limite permitido, MULTADO!`)

} else {

    console.log(`DIRIJA COM CUIDADO!`)
} */



        

        
       
            function verificar() {

            let box = document.querySelector('input#itext')
            let res = document.querySelector('div#pais')
                
            let paiis = box

                if (paiis == 'Brasil' ) {

                    res.innerText = 'BRASIL'
                    res.style.background = "green"
                    res.style.color = "yellow"
                    
                
                }else   {
                
                    res.innerText = 'ESTRANGEIRO'
                    res.style.background = "black"
                    res.style.color = "white" 
                }

            }

            
    
        

    