//if

var num = 1
num = 5

if (num=== 1) {
    console.log("num é igual a 1")
} else if (num === 2){
    console.log("num é igual a 2")
} else {
    console.log("num não é 1 ou 2")
}

//switch

var mes = "janeiro"

switch (mes) {
    case "fevereiro":
        console.log("mes 2");
        break;

    case "março":
        console.log("mes 3");
        break;

    case "dezembro":
        console.log("mes 12");
        break;

    default:
        console.log("nenhum dos casos foi atendido")
}