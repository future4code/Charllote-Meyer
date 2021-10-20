//------ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO --------------
    // 1. ---------------------------------------------------
/*
        const filme = {
            nome: "Auto da Compadecida", 
            ano: 2000, 
            elenco: [
                "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
                "Virginia Cavendish"
                ], 
            transmissoesHoje: [
                {canal: "Telecine", horario: "21h"}, 
                {canal: "Canal Brasil", horario: "19h"}, 
                {canal: "Globo", horario: "14h"}
                ]
        }

        console.log(filme.elenco[0])
        console.log(filme.elenco[filme.elenco.length - 1])
        console.log(filme.transmissoesHoje[2])

a.          Resposta: será impresso:
            Matheus Nachtergaele
            Virginia Cavendish
            { canal: 'Globo', horario: '14h' }
*/

    // 2. ---------------------------------------------------
/*
        const cachorro = {
            nome: "Juca", 
            idade: 3, 
            raca: "SRD"
        }

        const gato = {...cachorro, nome: "Juba"}

        const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

        console.log(cachorro)
        console.log(gato)
        console.log(tartaruga)

a. Resposta:
        { nome: "Juca", idade: 3, raca: "SRD" }
        { nome: "Juba", idade: 3, raca: "SRD" }
        { nome: "Jubo", idade: 3, raca: "SRD" }

b. Resposta: A síntase dos três pontos, localizados na frente do array é o
Spread Operator, ele serve para copiar e reproduzir informações.

*/

    // 3. ---------------------------------------------------
/*
        function minhaFuncao(objeto, propriedade) {
            return objeto[propriedade]
        }

        const pessoa = {
        nome: "Caio", 
        idade: 23, 
        backender: false
        }

        console.log(minhaFuncao(pessoa, "backender"))
        console.log(minhaFuncao(pessoa, "altura"))

a. Resposta: false e underfined

b. Resposta: A função minhaFuncao recebe um objeto e o nome
de uma propriedade que o objeto possua ou não e retorna o valor dela.


O primeiro console log exemplifica a chamada
da minhaFuncao com uma propriedade existente,
já o segundo console log mostra que é retornado
undefined quando o objeto não possui a propriedade
passada como argumento.
*/

//------ EXERCÍCIOS DE ESCRITA DE CÓDIGO --------------------
    // 1. ---------------------------------------------------
/*
a.
        const pessoa = {
            nome="Charllote"
            apelidos:["Chá", "Chachá, "Cházinha"]
        };
        function imprimePessoa(objeto) {
            console.log(
                `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido[0]}, ${objeto.apelido[1]}, ${objeto.apelido[2]}`
            );
        }
        imprimePessoa(pessoa)
b.
        const novaPessoa= {...pessoa, apelido: ["Chá", "Chachá", "Chazinha"]};
        imprimePessoa(novaPessoa)
*/

    // 2. ---------------------------------------------------
/*
a.
        const pessoa = {
            nome:"Charllote",
            idade = "35",
            profissao = "Designer Gráfico"
        };
b.
        retorno: ["Charllote", 5, 35, "Designer Gráfico", 9]

        function imprimeInformações(individuos) {
            return [
                individuo.nome,
                individuo.nome.length,
                individuo.idade,
                individuo.profissao,
                individuo.profissao.length,
            ];
        }
        console.log(imprimeInformacoes(pessoa));
*/

    // 3. ---------------------------------------------------
/*
a.
        const carrinho = [];

b.
        const morango = {
            nome:"morango",
            disponibilidade: true
        };

        const uva = {
            nome:"uva",
            disponibilidade: true
        };

        const kiwi = {
            nome:"kiwi",
            disponibilidade: true
        };
c.
        adicionaFrutaNoCarrinho(morango)
        adicionaFrutaNoCarrinho(uva)
        adicionaFrutaNoCarrinho(kiwi)
d.
        console.log(carrinho);
*/


//------ DESAFIOS -------------------------------------------
    // 1. ---------------------------------------------------
/*
        function novaPessoa(){
            const pessoa = {
                nome: prompt("Nome da Pessoa:"),
                idade: Number(prompt("Idade da pessoa:"))
                profissao: prompt("Profissão da pessoa:")
            };
            console.log(pessoa);
            console.log(ypeof pessoa);
        }
        criaPessoa()
*/

    // 2. ---------------------------------------------------
/*
        function comparaAnoDeLancamento(primeiroFilme, segundoFilme) {
            return `O primeiro filme foi lançado antes do segundo?
            ${primeiroFilme.anoDeLancamento < segundoFilme.anoDeLancamento}

            primeiro filme foi lançado no mesmo ano do segundo?
            ${primeiroFilme.anoDeLancamento === segundoFilme.anoDeLancamento}`;
        }
        const matrix = {
            nome: "Matrix",
            anoDeLançamento: 1999
        };
        const johnWick = {
            nome:"John Wick",
            anoDeLançamento: 2014
        };

        console.log(comparaAnoDeLançamento(matrix, johnwick));
*/

    // 3. ---------------------------------------------------
/*
        function inverteDisponibilidade(frutas) {
            return {...fruta, disponibilidade: !fruta.disponibilidade}
        }
        console.log(inverteDisponibilidade(morango))
        console.log(inverteDisponibilidade(inverteDisponibilidade(pera)))
*/