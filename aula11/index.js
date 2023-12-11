
function verificar() {

  let txt = document.querySelector('input#itxt')
  let res = document.querySelector('div#res')

  let pais = txt

  if (pais == 'Brasil') {

    res.innerHTML = 'BRASILEIRO'
    

  } else if (pais != 'Brasil'){

    res.innerHTML = 'ESTRANGEIRO'

  } else if (pais == 'underfine'){

    res.innerHTML = 'ERRO!'

  } else {

    res.innerHTML = ''
  }

}
      
    
        

    