// ---- Exercícios de interpretação de código -----
// 1. Resposta
/*
        let array
        console.log('a. ', array) // R. undefined

        array = null
        console.log('b. ', array) // R. null

        array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        console.log('c. ', array.length) // R. 11

        let i = 0
        console.log('d. ', array[i]) // R. 3

        array[i+1] = 19
        console.log('e. ', array) // R. (11)

        const valor = array[i+6]
        console.log('f. ', valor) // R. 9
*/
// 2.
/*
        const frase = prompt("Digite uma frase") // R. 2

        console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
*/

// ---- Exercícios de escrita de código -----
// 1.
/*
        let nomeUsuario = prompt("Digite seu nome.");
        let emailUsuario = prompt("Digite seu e-mail.");
        let fraseUsuario = `O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeUsuario} .`;

        console.log(fraseUsuario)
*/
// 2.


// 3.


// ---- Desafio -----




//---------------- PROTOTIPO DE STRINGS
/*
// toLowerCase 
const frase = "OieeEEe"
const fraseMinuscula = frase.toLowerCase()  // diminui as letras pra minusculo

// toUpperCase
const fraseMinuscula = frase.toUpperCase()  // aumenta as letras pra maiusculo

// length()
console.log(nome.length) //indica o tamanho de uma string (conta letras espaços)

// trim()
console.log(email.trim()) //remove espaços extras, uteis para logins

// includes
console.log(nome.includes("tu")) //incluir palavras em uma string/frase

// replaceAll(chars1), (chars2).
const novaFrase = frase.reaplaceAll("Meyer") // troca um conjunto de caracteres por alguma outra coisa

//---------------- ARRAYS - LISTAS

const numeros = [1, 2, 3, 4]
const nomes = [ "camis", "fabiano" , "fernando" , "ricado" ]
const tudoJunto = [ 1 , "camis"]

console.log(numeros)
*/

function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))