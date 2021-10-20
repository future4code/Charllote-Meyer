//------ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO --------------
    // 1. ---------------------------------------------------
/*
        const usuarios = [
        { nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" },
        { nome: "Letícia Chijo", apelido: "Chijo" }
        ]

        const novoArrayA = usuarios.map((item, index, array) => {
        console.log(item, index, array)
        })
        
a. Resposta: { Nome: "Amanda Rangel", apelido: "Mandi" }, 0, array inteiro
             { Nome: "Laís Petra", apelido: "Laura" }, 1, array inteiro
             { Nome: "Letícia Chijo", apelido: "Chijo" }, 2, array inteiro
*/

    // 2. ---------------------------------------------------
/*
        const usuarios = [
            { nome: "Amanda Rangel", apelido: "Mandi" },
            { nome: "Laís Petra", apelido: "Laura" },
            { nome: "Letícia Chijo", apelido: "Chijo" },
        ]

        const novoArrayB = usuarios.map((item, index, array) => {
            return item.nome
        })

        console.log(novoArrayB)
a. Resposta: ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]
*/

    // 3. ---------------------------------------------------
/*
        const usuarios = [
            { nome: "Amanda Rangel", apelido: "Mandi" },
            { nome: "Laís Petra", apelido: "Laura" },
            { nome: "Letícia Chijo", apelido: "Chijo" },
        ]

        const novoArrayC = usuarios.filter((item, index, array) => {
            return item.apelido !== "Chijo"
        })

        console.log(novoArrayC)

a. Resposta: [ nome: "Amanda Rangel", apelido: "Mandi" ],
             [ nome: "Laís Petra", apelido: "Laura" ]
*/

//------ EXERCÍCIOS DE ESCRITA DE CÓDIGO --------------------
    // 1. ---------------------------------------------------
/*
        const pets = [
            { nome: "Lupin", raca: "Salsicha"},
            { nome: "Polly", raca: "Lhasa Apso"},
            { nome: "Madame", raca: "Poodle"},
            { nome: "Quentinho", raca: "Salsicha"},
            { nome: "Fluffy", raca: "Poodle"},
            { nome: "Caramelo", raca: "Vira-lata"},
        ];
a.
        const nomeDosPets = pets.map(pet) => {
            return pet.nome;
        });

        console.log("item a", nomeDosPets);
b.
        const cachorrosSalsicha = pets.filter((cachorro) => {
            return cachorro.raca == "Salsicha";
        });

        console.log("item b", cachorroSalsicha);
c.
        const poodles = pets.filter((dog) => {
            return dog.raca === "Poodle";
        });

        const cuponsPoodles = poodles.maps((poodle) => {
            return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}!`;
        });

        console.log("item c", cuponsPoodles);
*/

    // 2. ---------------------------------------------------
/*
        const produtos = [
            { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
            { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
            { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
            { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
            { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
            { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
            { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
            { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
            { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
            { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
        ]
a.
        const nomesProdutos = produtos.map((prod) => {
            return prod.nome;
        });
        console.log("item a", nomesProdutos);
b.
        const produtosComDesconto = produtos.map((prod) => {
            return { nome: prod.nome, preco: (prod.preco * 0.95).toFixed(2) };
        });
        console.log("item b", produtosComDesconto);
c.
        const bebidas = produtos.filter((prod) => {
            return prod.categoria === "Bebidas";
        })
        console.log("item c", bebidas);
d.
        const produtosYpe = produtos.filter((prod) => {
            return prod.nome.includes("Ypê");
        });
        console.log("item d", produtosYpe);
e.
        const compreYpe = produtosYpe.map((prod) => {
            return `Compre ${prod.nome} por ${prod.preco}`;
        });
        console.log("item e", compreYpe);
*/


//------ DESAFIOS -------------------------------------------
    // 1. ---------------------------------------------------
/*
        const pokemons = [
            { nome: "Bulbasaur", tipo: "grama" },
            { nome: "Bellsprout", tipo: "grama" },
            { nome: "Charmander", tipo: "fogo" },
            { nome: "Vulpix", tipo: "fogo" },
            { nome: "Squirtle", tipo: "água" },
            { nome: "Psyduck", tipo: "água" }
        ];
a.
        const nomePokemons = pokemons.map((poke) = > {
            return poke.nome;
        });
        const pokemonsOrdenados = nomePokemons.sort((a, b) => a.localeCompare(b));

        console.log("item a", pokemonsOrdenados);
b.
        const tipos = pokemons.map((poke) => {
            return poke.tipo;
        });
        console.log(tipos);

        const tiposSemRepetir = tipos.filter((tipo, index, array) => {
            return array.indexOf(tipo) === index;
        });
        console.log("item b", tiposSemRepetir);
*/