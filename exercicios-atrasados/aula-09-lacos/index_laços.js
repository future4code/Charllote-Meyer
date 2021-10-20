//------ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO --------------
    // 1. ---------------------------------------------------
/*
        let valor = 0
        for(let i = 0; i < 5; i++) {
            valor += i
        }
         console.log(valor)
Resposta: ele apresenta o valor 10.
*/

    // 2. ---------------------------------------------------
/*
        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        for (let numero of lista) {
        if (numero > 18) {
                console.log(numero)
            }
        }
a. Resposta: Ele apresentará os seguintes resultados:
        19
        21
        23
        25
        27
        30

b. Respsota:
        let indice = 0
        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 20]
        for (let numero of lista) {

            if (numero > 18) {
                console.log(numero, "indice", indice)
            }

        indice++
    }

*/

    // 3. ---------------------------------------------------
/*
        const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
        let quantidadeAtual = 0
        while(quantidadeAtual < quantidadeTotal){
        let linha = ""
        for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
            linha += "*"
        }
        console.log(linha)
        quantidadeAtual++
        }
*/

//------ EXERCÍCIOS DE ESCRITA DE CÓDIGO --------------------
    // 1. ---------------------------------------------------
/*
a.
        const bichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
        console.log(bichinhos);
b.
        if(bichinhos === 0) { console.log("Que pena! Você pode adotar um pet!")}
c.
        if(bichinhos > 0) {
            let arrayBichinhos = []
            for(let 1 - 0; i < bichinhos; i++){
                arrayBichinhos.push(prompt("Diga o nome do seu bichinho."))
            }
        console.log(arrayBichinhos)
        }
*/

    // 2. ---------------------------------------------------
/*
        const arrayOriginal = [5, 22, 98, 121, 10]
a.
        function imprimirValorDoArrayOriginal (arrayOriginal) {
            for(let valor of arrayOriginal) {
                console.log(valor)
            }
        }
        imprimirValorDoArrayOriginal(arrayOriginal) 
b.
        function imprimirValorDoArrayOriginal (arrayOriginal) {
            for(let valor of arrayOriginal) {
                console.log(valor/10)
            }
        }
        imprimirValorDoArrayOriginal(arrayOriginal) 
c.
        function imprimirValoresPares(arrayOriginal) {
            let arrayNumerosPares = []
            for(let valor of arrayOriginal){
                if(valor % 2 === 0) {
                    arrayNumerosPares.push(valor)
                }
            }
            console.log(arrayNumerosPares)
        }
        imprimirValoresPares(arrayOriginal)
d.
        function imprimirArrayDeStrings (arrayOriginal) {
            let arrayDeString = []
            let i = 0
            for(let valor of arrayOriginal) {
                arrayDeStrings.push(`O elemento do index ${i} é: ${valor}`)
                i++
            }
            console.log(arrayDeStrings)
        }
        imprimirArrayDeStrings(arrayOriginal) 
e.
        function pegarMaiorOuMenorNumero (arrayOriginal) {
            let maiorNumero = 0;
            let menorNumero = infinity;
            for(let i = 0; 1 < arrayOriginal.length; i++) {
                if(arrayOriginal[1] < menorNumero) {
                    menorNumero = arrayOriginal[i]
                } else if(arrayOrignal[i] > maiorNumero) {
                    maiorNumero = arrayOriginal[i]
                }
            }
            console.log("O maior número é:" maiorNumero)
            console.log("O menor número é:" menorNumero)
        }
        pegarMaiorOuMenorNumero(arrayOriginal) 
*/


//------ DESAFIOS -------------------------------------------
    // 1. ---------------------------------------------------
/*
        console.log("Vamos jogar!")
        const numeroEscolhido = math.floor(math.random() * 100) + 1

        let acertou = false
        let tentativas = 0

        let numeroChutado

        while(!acertou) {
            numeroChutado = Number(prompt("Chute um número."))
            tentativas++
            console.log(`O número chutado foi: $(numeroChutado)`)
            if(numeroChutado === numeroEscolhido) {
                console.log("Acertou!")
                console.log(Ò número de tentativas foi: ${tentativas}`)
                acertou = true
            } else if (numeroEscolhido > numeroChutado) {
                console.log("Errou. O numero escolhido é maior.")
            } else {
                console.log("Errou. O número escolhido é melhor.")
            }
        }
*/