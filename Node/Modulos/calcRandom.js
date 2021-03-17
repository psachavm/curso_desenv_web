const _ = require("lodash")
const modCalc = require('./moduloCalculo')

//Chamando SetInterval ára gerar números e calculos
setInterval(() => {
    let v1 = _.random(1,20)
    let v2 = _.random(1,20)

    if (v1 > v2)
    {
        console.log(`Subtração: ${v1} - ${v2} = ${modCalc.Subtrai(v1, v2)}`)
    }
    else
    {
        console.log(`Soma: ${v1} + ${v2} = ${modCalc.Soma(v1, v2)}`)
    }
}, 2000);