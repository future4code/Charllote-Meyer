//------ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO --------------
    // 1. ---------------------------------------------------
/*
        const respostaDoUsuario = prompt("Digite o número que você quer testar")
        const numero = Number(respostaDoUsuario)

        if (numero % 2 === 0) {
        console.log("Passou no teste.")
        } else {
        console.log("Não passou no teste.")
        }
a. o programa testa se os números são pares
b. os números pares
c. os números impares
*/

    // 2. ---------------------------------------------------
/*
                let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
    case "Laranja":
        preco = 3.5
        break;
    case "Maçã":
        preco = 2.25
        break;
    case "Uva":
        preco = 0.30
        break;
    case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
    default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a. o programa informa qual o preço de uma determinada fruta.
b. "o preço da fruta Maçã é R$ 2,25."
c. o preço passará a ser o do último item (defaul), que é 5 reais.
*/

    // 3. ---------------------------------------------------
/*
        const numero = Number(prompt("Digite o primeiro número."))

        if(numero > 0) {
        console.log("Esse número passou no teste")
            let mensagem = "Essa mensagem é secreta!!!"
        }

        console.log(mensagem)

a. pegndo um número do usuário através do prompt, convertendo
   esse número e guardando na variável numero.
b. se for 10, impreme "Esse número passou no teste".
c. Haverá erro, pois a variável mensagem foi criada dentro do
   bloco do IF e não pode ser acessada pelo escopo pai.

*/

//------ EXERCÍCIOS DE ESCRITA DE CÓDIGO --------------------
    // 1. ---------------------------------------------------
/*
        const idade = Number(prompt("Qual é a sua idade?"));

        if (idade >= 18) {
            console.log("Você pode digirir.");
        } else {
            console.log("Você não pode dirigir.");
        }
*/

    // 2. ---------------------------------------------------
/*
        const periodo = prompt("Escolha seu período: M (Matutino) ou V (Vespetino) ou N (Noturno)")

        if (periodo === "M") {
            console.log("Bom Dia!")
        } else if (periodo === "V"){
            console.log("Boa Tarde!")
        } else if (periodo === "N"){
            console.log("Boa Noite!")
        } else {
            console.log("Erro!")
        }
*/

    // 3. ---------------------------------------------------
/*
        const periodo = prompt(
            "Escolha seu período: M (Matutino) ou V (Vespetino) ou N (Noturno)"
        );

        switch (periodo) {
            case "M":
                console.log("Bom Dia!");
                break;
            case "V":
                console.log("Boa Tarde!");
                break;
            case "N":
                console.log("Boa Noite!");
                break;
            default:
                console.log("Erro!");
                break;
        }
*/

    // 4. ---------------------------------------------------
/*
        const genero = prompt("Qual o gênero do filme?");
        const preco = prompt("Qual o proço do ingresso?");

        if (genero === "fantasia" && preco <= 15) {
            console.log("Bom filme!");
        } else {
            console.log("Escolha outro filme :(");
        }
*/

//------ DESAFIOS -------------------------------------------
    // 1. ---------------------------------------------------
/*
        const genero = prompt("Qual o gênero do filme?");
        const preco = prompt("Qual o proço do ingresso?");

        if (genero === "fantasia" && preco <= 15) {
            const lanche = prompt("Escolha um lanchinho:");
            console.log("Bom filme!");
            console.log(`Aproveite o seu ${lanche)`)
        } else {
            console.log("Escolha outro filme :(");
        }
*/

    // 2. ---------------------------------------------------
/*
        const nome = prompt("Digite seu nome:")
        const tipo = prompt("[IN]ternacional ou [DO]mestico")
        const etapa = prompt("semi-final [SF], Decisão terceiro [DT] ou Final {FI}?")
        const categoria = Number(prompt("Categoria 1, 2, 3, ou 4?"));
        const quantidade = Number(prompt("Quantidade de ingresso?"));

        let precoUnitario;

        switch (etapa) {
            case "SF":
                switch (categoria)  {
                    case 1:
                        precoUnitario = 1320;
                        break;
                    case 2:
                        precoUnitario = 880;
                        break; 
                    case 3:
                        precoUnitario = 550;
                        break; 
                    case 4:
                        precoUnitario = 220;
                        break;
                    default:
                        precoUnitario = 0;
                        break; 
                }
                break;
            case "DT":
                switch (categoria) {
                    case 1:
                        precoUnitario = 660;
                        break;
                    case 2:
                        precoUnitario = 440;
                        break; 
                    case 3:
                        precoUnitario = 330;
                        break; 
                    case 4:
                        precoUnitario = 170;
                        break;
                    default:
                        precoUnitario = 0;
                        break; 
                }
                break;
            case "FI":
                switch (categoria) {
                    case 1:
                        precoUnitario = 1980;
                        break;
                    case 2:
                        precoUnitario = 1320;
                        break; 
                    case 3:
                        precoUnitario = 880;
                        break; 
                    case 4:
                        precoUnitario = 330;
                        break;
                    default:
                        precoUnitario = 0;
                        break; 
                }
                break;
              default:
                break;
        }

        if (tipo === "IN") {
            precoUnitario = precoUnitario * 4.1;
        }

        let textoTipo;
        if (tipo === "DO") {
            textoTipo = "Doméstico";
        } else if (tipo === "IN") {
            textoTipo = "Internacional";
        } else {
            textoTipo = "Erro";
        }

        let textoEtapa:
        switch (etapa) {
            case "SF":
                textoEtapa = "Semi-Final";
                break;
            case "DT";
                textoEtapa = "Decisão terceiro";
                break;
            case "FI"
                textoEtapa = "Final";
                break;
            default:
                textoEtapa = "Erro";
                break;
        }
//      -------- SAÍDAS
        console.log("----Dados da Compra----");
        console.log("Nome do Cliente:", nome);
        console.log("Tipo do Jogo:", textoTipo);
        console.log("Etapa do Jogo:", textoEtapa);
        console.log("Categoria:", categoria);
        console.log("----Valores----");
        console.log("Valor do Ingresso:", precoUnitario);
        console.log("Valor total da compra:", precoUnitario * quantidade);
*/