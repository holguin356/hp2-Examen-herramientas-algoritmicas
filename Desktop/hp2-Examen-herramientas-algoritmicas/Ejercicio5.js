//crear una funcion que sume dos arreglos y que el resultado se agregue en un  nuevo arreglo

array1=[];
array2=[];
arrayPlus=[];

function fillArray(array){
    let numRandom=0;
        for(let i=0; i<5;i++){
            numRandom=parseInt(Math.random()*100)
        array[i]=numRandom
    }
}
fillArray(array1);
fillArray(array2);

function sumaArray(array1,array2){
    if(array1.length!=array2.length){
        console.log('no tiene la misma cantidad de caracteres');
    } else{
        for(let i=0;i<array1.length;i++){
            arrayPlus.push(array1[i]+array2[i]);
        }
        return arrayPlus;
    }
}

console.log('array1 '+ array1)
console.log('array2 '+ array2)

console.table(sumaArray(array1,array2));
