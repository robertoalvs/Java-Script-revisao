

/* let n1 = prompt('Digite um número') // O PROMPT sempre retorna uma STRING
let n2 = prompt('Digite outro número')

let num1 = Number(n1) 
let num2 = Number(n2)
let soma = alert(`A soma de ${n1} + ${n2} é = ${num1+num2}`) 
*/



let nome = prompt('DIGITE SEU NOME:')
let sobre = prompt('DIGITE SEU SOBRENOME:')

let anoatual = prompt('DIGITE O ANO ATUAL')
let ano = prompt('DIGITE O ANO QUE VOCÊ NASCEU:')

let n2 = Number(anoatual)
let n1 = Number(ano)

let soma = anoatual - ano

let res = document.write(`<p> Seu nome é: <strong>${nome}</strong> <br> Seu sobrenome é: <strong>${sobre}</strong> <br> Você tem <strong>${soma}</strong de idade</p>`)