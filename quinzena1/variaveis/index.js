// --- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ---------------------------------------------------------------------------------

// !. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)


// 2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c)

/* 3.Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis.
Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase.
Alem disso, os nomes não podem começar com números ou caracteres especiais.*/

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)


// --- EXERCÍCOS ------------------------------------------------------------------------------------------------------------

// 1.1. Construa um programa, seguindo os seguintes passos:
//    a) Declare uma variável para armazenar um nome, sem atribuir um valor.
        let nome = prompt("Digite seu nome.")
//    b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
        let idade = prompt("Digite sua idade.")
//    c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
        console.log(typeof nome, idade)
//    d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
        Não foi definido nenhum valor
//    e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

//    f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
        Apareceu string e um number
//    g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu
        console.log("Olá nome, você tem idade anos.")



/* 1.2
    a) Crie três novas variáveis, contendo as respostas
    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:*/

        const nome = true
        const idade = false
        const sobreNome = true
        console.log("Seu nome é Carlos?" , nome)
        console.log("Sua idade é de 30 anos?" , idade)
        console.log("Seu sobrenome é Fernandes?" , sobreNome)

            console.log("nome", nome, "idade", idade, "sobrenome", sobreNome);

/* Suponha que temos duas variáveis a e b, cada uma com um valor inicial.
    let a = 10
    let b = 25
Agora, queremos trocar os valores delas, de forma que a passe a ter o valor de b e b passe a ter o valor de a. 
Ou seja, no caso desse exemplo acima, a passaria a ser 25 e b passaria a ser 10.
    let a = 10
    let b = 25

// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados,
independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que a = 25 e b = 10
porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também). */

    let a = 10;
    let b = 25;
    let c;
    c = a;
    a = b;
    b = c;

    console.log("O novo valor de a é ", a);
    console.log("O novo valor de b é ", b);


// --- DESAFIO ------------------------------------------------------------------------------------------------------------

/* 1.Faça um programa que receba dois números do usuário e faça as seguintes operações, 
imprimindo os resultados no console da seguinte forma: */

//1. O primeiro número somado ao segundo número resulta em: x.

    let primeiroNumero
    let segundoNumero

    primeiroNome = prompt('Digite o primeiro número.')
    segundoNumero = prompt('Digite o segundo número.')

        let valorTotal = primeiroNome + segundoNumero

        console.log(valorTotal)

// 2. O primeiro número multiplicado pelo segundo número resulta em: y.

    let atualizandoParaNumero1 = Number(numero1)
    let atualizandoParaNumero2 = Number(numero2)

    let x = atualizandoParaNumero1 + atualizandoParaNumero2
    let y = atualizandoParaNumero1 * atualizandoParaNumero2

    console.log(x)
    console.log(y)

