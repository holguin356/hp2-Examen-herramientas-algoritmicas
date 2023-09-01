//2. crear funcion que identifique por medio de false o true si una matriz es cuadrada y que tome como parametro matriz

let matriz = [[1,2,3,4],[1,2,3,4],[1,2,3,4]]

function checkSquare(){
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
          if(matriz.length!==matriz[i].length){
            return false;
            break;
          }
        }
      }
      return true;
}


checkSquare(matriz);

console.log(checkSquare(matriz));