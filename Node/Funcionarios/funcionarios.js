const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

const filterChineses = f => f.pais === "China"
const filterMulheres = f => f.genero === "F"
const filterSalario = function (func1, func2){
    return func1.salario < func2.salario ? func1 : func2
}

axios.get(url).then(response => {
    const listfuncionarios = response.data
    
    //aplicar filtro
    const funcResult = listfuncionarios
    .filter(filterChineses)
    .filter(filterMulheres)
    .reduce(filterSalario)

    console.log(funcResult)
})

