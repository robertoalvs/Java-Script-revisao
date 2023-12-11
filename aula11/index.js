

    function verificar() {

        let vel = document.querySelector('input#inum')
        let res = document.querySelector('div#res')
        let n = Number(vel.value)

         
        

        if (n > 50) {

            res.innerHTML = `</p>Sua velocidade foi de <strong>${n} KM/h</strong></p>`

            res.innerHTML += '<p>Ultrapassou o limite permitido <strong>MULTADO!</strong></p>'



      } else {

        res = alert('SIGA EM FRENTE!!!')
      }
    }
      
    
        

    