function clicar() {

        let usuario = document.getElementById('inome')
        let num = document.getElementById('inum1')
        let num2 = document.getElementById('inum2')
        let city = document.getElementById('ipais')
        let form = document.getElementById('resform')

        let nome = usuario.value
        let paises = city.value
        
        let n1 = Number(num.value)
        let n2 = Number(num2.value)
        let total = n1 - n2

        

        if (usuario.valeu == 0 || num.value == 0 || num2.value == 0 || city.value == 0) {

            alert('[ERRO!] Preencha os campos obrigadotorios com *')


        } else
                if (paises == 'Brasil' || paises == 'brasil') {

                    if (total <= 17) {

                        alert('[WARNING!] VOCÊ É MENOR DE IDADE!!!')

                    } else {

                        alert('[VOCÊ É MAIOR DE IDADE!!!]')
                    }

                    form.innerHTML =  `Você é Brasileiro e tem ${total} anos.`
                    form.style.backgroundImage = 'url(./flag-brasil.jpg)'
                    form.style.color = 'white'

                } else {

                    if (total <= 17) {

                        alert('[WARNING!] VOCÊ É MENOR DE IDADE!!!')

                    } else {

                        alert('[VOCÊ É MAIOR DE IDADE!!!]')
                    }

                    form.innerHTML =  `Você é Estrangeiro e tem ${total} anos.`
                    form.style.backgroundImage = 'url(./flag-euro.png)'
                }
    }