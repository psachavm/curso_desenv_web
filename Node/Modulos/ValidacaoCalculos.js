const modCalc = require('./moduloCalculo')
const modValores = require('./constantes')

console.log(">>> Iniciando testes com módulos.")
console.log(" ")
console.log("modCalc = " + modCalc)
console.log("modValores = " + modValores)
console.log(" ")
console.log("## Soma ## ")
console.log(`A soma de ${modValores.Valor1} e ${modValores.Valor2} é: ${modCalc.Soma(modValores.Valor1,modValores.Valor2)}`)
console.log(" ")

console.log("## Multiplicação ## ")
console.log(`A multiplicacao de 4 * 5 é: ${modCalc.Multiplica(4,5)}`)