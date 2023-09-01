//3 una funciona que tome la fila mas larga  que tome matriz

let matriz = [[1,2,3],[1,2,3],[4,2,3,4],[1,2]]

function filaLarga(matriz){
    let fila = [];
    let filaMayor= 0
    let numFila=0
    for(let i=0; i < matriz.length; i++)
    {
        if(filaMayor<matriz[i].length){
            filaMayor=matriz[i].length;
            numFila=i;
        }
    }
    for(let i=0; i < matriz.length; i++)
    {
        fila=matriz[[i],[numFila]]
    }

    return fila;
}

console.log("La fila larga es "+filaLarga(matriz))