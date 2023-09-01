let array = [];
let answer = [];

function fillArray(array){
    let numRandom=0;
        for(let i=0; i<10;i++){
            numRandom=parseInt(Math.random()*15)
        array[i]=numRandom
    }
}
fillArray(array);
console.table(array);
answer = array.filter((filt) => filt>=6);
console.log(answer);


