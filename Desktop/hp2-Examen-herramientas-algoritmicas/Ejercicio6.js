const numeroInicial = prompt('Por favor digite un número, para hacer la cuenta regresiva')

function cuentaRegresiva(numeroInicial){
    regresiva=[];
    numeroInicial=parseInt(numeroInicial);
    for(let i=numeroInicial;i>0;i--){
        regresiva.push(i);
    }
    return regresiva;
}

console.log(cuentaRegresiva(numeroInicial));
