// función para calcular al cuadrado

// function getSquare(num: number){
//     return num * num;
// }

export let cache : Array<number> = []; 
// array donde se guardan los resultados. Los parametros corresponden a la posición en el array

export default function memoizeGetSquare(num: number){
    if(cache.hasOwnProperty(num)) {  // buscamos si num existe en cache
      return cache[num];  // si existe, devuelve el resultado que está en la posición num en el array cache
    } else {
      cache[num] = num * num;  // si no, se hace el calculo y lo almacena en el array
      return cache[num];
    }
}