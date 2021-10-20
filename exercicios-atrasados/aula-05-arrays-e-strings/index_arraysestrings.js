//------ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO --------------
    // 1. ---------------------------------------------------
/*
        let array
        console.log('a. ', array) //Resposta: underfined

        array = null
        console.log('b. ', array) //Resposta: null

        array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 
        console.log('c. ', array.length) //Resposta: 11

        let i = 0
        console.log('d. ', array[i]) //Resposta: 3

        array[i+1] = 19
        console.log('e. ', array) //Resposta: [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

        const valor = array[i+6]
        console.log('f. ', valor) //Resposta: 9
*/

    // 2. ---------------------------------------------------
/*
        const frase = prompt("Digite uma frase")

        console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) //Resposta: ""SUBI NUM ÔNIBUS EM MIRROCOS"", 27
*/


//------ EXERCÍCIOS DE ESCRITA DE CÓDIGO --------------------
    // 1. ---------------------------------------------------
/*
        const emailDoUsuario = prompt("Qual seu email?")
        const nomeDoUsuario = prompt("Qual seu nome?")

        console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}.`)
*/

    // 2. ---------------------------------------------------
/*
        const comidasPreferidas = [
            "Empadão de Brócolis"
            "Nhoque"
            "Pizza"
            "Lasanha"
            "Salgadinho de festa"
        ];
*/
//a. console.log(comidasPreferidas)

/*b.    
        console.log(comidasPreferidas[0])
        console.log(comidasPreferidas[1])
        console.log(comidasPreferidas[2])
        console.log(comidasPreferidas[3])
        console.log(comidasPreferidas[4])
*/
/*c.
        const novaComida =prompt("Diga sua comida favorita!")
        comidasPreferidas[1] = novaComida

        console.log(comidaspreferidas)
*/

    // 3. ---------------------------------------------------
/*a.
        const listaDeTarefas = []
        const primeiraTarefa = prompt("Digite a primeira tarefa.")
        const segundaTarefa = prompt("Digite a segunda tarefa.")
        const terceiraTarefa = prompt("Digite a terceira tarefa.")
*/
/*b.
        listaDeTarefas.push(primeiraTarefa)
        listaDeTarefas.push(segundaTarefa)
        listaDeTarefas.push(terceiraTarefa)
*/
/*c.
        console.log(listaDeTarefas)
*/
/*d.
        const tarefaRealizada = prompt("Digite o índice de uma tarefa realizada.")

        listaDeTarefaas.splice(Number(tarefaRealizada), 1)
        console.log(listaDeTarefas)
*/

//------ DESAFIOS -------------------------------------------
    // 1. ---------------------------------------------------
/*
        const minhaFrase = "Eu amo programar"
        const minhaFraseArray = minhaFrase.split(" ")

        console.log(minhaFraseArray)

*/

    // 2. ---------------------------------------------------
/*
        const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
        const tamanhoArray = frutas.length;

        console.log("Index abacaxi: ", indexAbacaxi, "tamanho do array:" tamanhoArray);
*/