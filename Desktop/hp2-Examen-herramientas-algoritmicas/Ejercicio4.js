//crear una funciona que obtenga la cantidad de x elementos de una matriz

let items= [['2','1','1','2'],['2','2'],['1','2','1'],['2','2','2','1']];

const cantidad = obtenerCantidad('2',items);

function obtenerCantidad(buscar, matriz)
{
    let cant=0;
    numero=0
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                numero=matriz[i][j]
                console.log(numero)

                if(numero===buscar){
                    cant++;
                    console.log("cantidad "+cant);
                }
            }
          }

    return cant;
}

console.log(cantidad)