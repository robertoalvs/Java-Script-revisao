
function verificar() {

  let txt = document.querySelector('input#itxt')
  let res = document.querySelector('div#res')

    if (txt.value.length == '0') {

      
      alert('ERRO! DIGITE ALGUMA COISA')

    }  else 
          if (txt == 'Brasil')  {

            res.innerHTML = 'BRASILERO'
            res.style.background = 'green'
      

    } else {
      
      res.innerHTML = 'ESTRANGEIRO'
      res.style.background = 'black'
      res.style.color = 'white'
    }

}
      
    
        

    