const objFuncionarios = require("./funcionarios");

//console.log(objFuncionarios.funcionarios())

function GetDataAtual(){
    var data = new Date()

    var dia     = data.getDate();           // 1-31
    var mes     = data.getMonth();          // 0-11 (zero=janeiro)
    var ano4    = data.getFullYear();       // 4 dígitos
    var hora    = data.getHours();          // 0-23
    var min     = data.getMinutes();        // 0-59
    var seg     = data.getSeconds();        // 0-59
    var mseg    = data.getMilliseconds();   // 0-999

    var str_data = (dia <= 9 ? "0"+dia : dia) + '/' + ((mes+1) <= 9 ? "0"+(mes+1) : mes+1) + '/' + ano4;
    var str_hora = (hora <= 9 ? "0"+hora : hora) + ':' 
                 + (min <= 9 ? "0"+min : min) + ':' 
                 + (seg <= 9 ? "0"+seg : seg) + ':' 
                 + (mseg <= 9 ? "00"+ mseg: (mseg < 100 ? "0" + mseg : mseg));
    var DataFormatada = str_data + ' ' + str_hora

    console.log(`Data atual: ${DataFormatada} `)
}

GetDataAtual()