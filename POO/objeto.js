//Arquivo adicionado ao github
//Definindo objeto com New Object
console.log("## Teste 1 - Definindo objeto com New Object ")
console.log("")
let pessoa = new Object()
pessoa.Nome = "Paulo"
pessoa.CPF = "770.141.973-04"
pessoa.Fone = "(85) 91049886"
pessoa.Email = "paulosacha.vm@gmail.com"

console.log(pessoa)

//Definindo objeto usando notação literal
console.log("")
console.log("## Teste 2 - Definindo objeto usando notação literal ")
console.log("")

let carro = {
    Marcar: "Ford",
    Modelo: "Ford KA",
    AnoFab: 2019
}
carro.Cor = "Cinza Steel"
carro["Proprietario"] = {
    Nome: "Paulo",
    Idade: 42
}

console.log(carro)

//Definindo objeto usando Função Construtora
console.log("")
console.log("## Teste 3 - Definindo objeto usando função construtora ")
console.log("")

function Produto(nome, preco, desconto){
    this.Nome = nome
    this.Preco = preco
    this.PrecoFinal = () => {return preco * (1 - desconto)}
    
}

//Teste usando prototype
//Produto.prototype.GetPrecoOriginal = () => {return this.Preco}

let Produto1 = new Produto("Caneta",7.90, 0.10)
let Produto2 = new Produto("Monitor",695.90, 0.05)

console.log(Produto1)

//console.log(`Produto ${Produto1.Nome} com preço original de ${Produto1.GetPrecoOriginal()}`)
console.log(`Produto ${Produto1.Nome} com preço de ${Produto1.PrecoFinal()}`)

console.log(Produto2)
console.log(`Produto ${Produto2.Nome} com preço de ${Produto2.PrecoFinal()}`)

//Definindo objeto com Função Factory
console.log("")
console.log("## Teste 4 - Definindo objeto usando função Factory ")
console.log("")

function MontarCarro(marca, modelo, ano, valor){
    const novocarro = {
        Marca: marca,
        Modelo: modelo,
        AnoFab: ano,
        Valor: valor,
        ValorRevenda: () => {
            return valor * (1 - 0.05)
        }
    }

    return novocarro
}

let carro1 = MontarCarro("Ford","Fiesta","2020",54990.00)
console.log(`O valor do ${carro1.Modelo} é: ${carro1.ValorRevenda()}`)