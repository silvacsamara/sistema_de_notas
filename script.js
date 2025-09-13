/*
Sistema de notas

- Peça ao usuário a nota de uma prova (0 a 10).
- Mostre:
    - `"Aprovado"` se a nota ≥ 7
    - `"Recuperação"` se a nota ≥ 4 e < 7
    - `"Reprovado"` se a nota < 4
*/

const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))
let nota3 = parseFloat(prompt("Digite a terceira nota: "))

try {
    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        throw new Error("Valor inválido. Por favor, digite apenas números.")
    } else if((nota1 < 0) || (nota2 < 0) || (nota3 < 0)){
        throw new Error("Valor inválido. Digite apenas números positivos.")
    } else if(nota1 > 10 || (nota2 > 10) || (nota3 > 10)){
        throw new Error("Valor inválido. Por favor, digite notas de 0 a 10.")
    }

    let media = ((nota1 + nota2 + nota3) / 3).toFixed(2)

    if(media >= 7){
        console.log("Aprovado.")
    }else if(media >= 4){
        console.log("Recuperação.")
    }else{
        console.log("Reprovado.")
    }

    console.log(`Média: ${media}`)

} catch (erro) {
    console.log("Erro: ", erro.message)
}