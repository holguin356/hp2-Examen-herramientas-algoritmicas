//1. crear una función que obtenga un número mayor de una matriz 4X4 y que tome como parametro matriz
let carga = 0;
let matriz=[[]];

function fillMatriz(){
    let numRandom=0;
    for(let i=0; i<4;i++){
        for(let j=0; j<4;j++){
            numRandom=parseInt(Math.random()*100)
        matriz[[i,j]]=numRandom
            console.log("i "+i+ " j "+j)
        }
        
    }
}
//
if(carga == 0)
{
    fillMatriz();
    carga++;
}

function searchBiggerNum(matriz){
    bigNum=matriz[[0,0]];
    numTemp=null;
    for(let i=0; i<4;i++){
        for(let j=0; j<4;j++){
            numTemp=matriz[[i,j]]
            if(bigNum<numTemp)
            {
                bigNum=numTemp;
            }
        }
    }
    return bigNum;
}

console.table(matriz);
console.log(searchBiggerNum(matriz))
