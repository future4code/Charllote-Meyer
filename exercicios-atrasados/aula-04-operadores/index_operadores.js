//------ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO --------------
    // 1. ---------------------------------------------------
// Resposta: false, false, true e boolean
 /*
        const bool1 = true
        const bool2 = false
        const bool3 = !bool2

        let resultado = bool1 && bool2
        console.log("a. ", resultado) // true E false -> false

        resultado = bool1 && bool2 && bool3 
        console.log("b. ", resultado) // true E false E false -> false

        resultado = !resultado && (bool1 || bool2) 
        console.log("c. ", resultado) // true OU false -> true

        console.log("d. ", typeof resultado) // boolean
*/

    // 2. ---------------------------------------------------
        // Resposta: faltava o NUMBER pro código rodar corretamente.


    // 3. ---------------------------------------------------
/*
        let primeiroNumero = Number(prompt("Digite um número!"))
        let segundoNumero = Number(prompt("Digite outro número!"))

        const soma = primeiroNumero + segundoNumero

        console.log(soma)
*/

//------ EXERCÍCIOS DE ESCRITA DE CÓDIGO --------------------
    // 1. ---------------------------------------------------
/*
        const suaIdade = Number(prompt("Digite sua idade."))
        const idadeAmigo = Number(prompt("Digite a idade do(a) seu(ua) melhor amigo(a)."))

        const somaIdades = suaIdade + idadeAmigo

        console.log("Sua idade é maior que a do seu(ua) melhor amigo(a)?", suaIdade >= idadeAmigo) 

        console.log(soma)
*/

    // 2. ---------------------------------------------------
/*
    const numeroPar = Number(prompt("Insira aqui um número PAR."))

    const divisao = numeroPar - 2

    console.log(divisao)

// a divisão funciona para todos os números pares, sempre diminuíndo em dois números.
// a divisão também ocorre para todos os números ímpares, sempre diminuíndo em dois números também.
*/

    // 3. ---------------------------------------------------
/*
        const suaIdade = Number(prompt("Digite sua idade."))

        console.log("sua idade em meses é:", suaIdade * 12)
        console.log("Sua idade em dias é:", suaIdade * 365)
        console.log("Sua idade em horas é:", suaIdade * 8760)
*/

    // 4. ---------------------------------------------------
/*
        const numero1 = Number(prompt("Digite aqui um número qualquer."))
        const numero2 = Number(prompt("Digite aqui outro número qualquer."))

        console.log(numero1)
        console.log(numero2)

        console.log(numero1 > numero2)
        console.log(numero1 === numero2)
        console.log(numero1 % numero2)
        console.log(numero2 % numero1)
*/

//------ DESAFIOS -------------------------------------------
    // 1. ---------------------------------------------------
        // a. -----------------------------------------------
/*
        (KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
        (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32
*/
        // b. -----------------------------------------------
/*
        let tempKelvin = (77 - 32)*(5/9) + 273.15
        console.log("Item a", tempKelvin, "°K")
*/
        // c. -----------------------------------------------
/*
        let tempFahrenheit = 80 * (9/5) + 32
        console.log("Item b", tempFahrenheit, "°F")
*/
        // d. -----------------------------------------------
/*
        tempKelvin = 30 + 273.15
        tempFahrenheit = 30 * (9/5) + 32
        console.log("Item c", tempFahrenheit, "°F e", tempKelvin, "°K")
*/

    // 2. ---------------------------------------------------
/*
        const energiaConsumida = Number(prompt("Insira a energia consumida"));
        const desconto = Number(prompt("Insira a porcentagem de desconto"));

        const porcentagemDesc = 1 - desconto / 100;
        console.log("O custo da sua conta é R$", 0.05 * energiaConsumida * porcentagemDesc);
*/

    // 3. ---------------------------------------------------
        // a. -----------------------------------------------
/*
        console.log("a. 20lb equivalem a", 20 * 0.453592, "kg");

*/
        // b. -----------------------------------------------
/*
        console.log("b. 10.5oz equivalem a", 10.5 * 0.29767, "kg");
*/
        // c. -----------------------------------------------
/*
        console.log("c. 100mi equivalem a", 100 * 1609.34, "m");
*/
        // d. -----------------------------------------------
/*
        console.log("d. 50ft equivalem a", 50 * 0.3048, "m");
*/
        // e. -----------------------------------------------
/*
        console.log("e. 103.56gal equivalem a", 103.56 * 3.78541, "litros");
*/
        // f. -----------------------------------------------
/*
        console.log("f. 450 xic equivalem a", 450 * 0.15, "litros");
*/
        // g. -----------------------------------------------
/*
        const xicarasUsuario = Number(prompt("Insira uma quantidade em xícaras para saber o valor equivalente em litros"));
        console.log("g.", xicarasUsuario, "xic equivalem a", xicarasUsuario * 0.15, "litros");
*/