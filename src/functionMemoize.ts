// función para calcular al cuadrado

// function getSquare(num: number){
//     return num * num;
// }

export let cache : Array<number> = []; // array se guardan los argumentos y resultados


export default function memoizeGetSquare(num: number){

    if(cache.hasOwnProperty(num)) {
      return cache[num];
    } else {
      cache[num] = num * num;
      return cache[num];
    }
}