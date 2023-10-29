// función para calcular al cuadrado

// function getSquare(num: number){
//     return num * num;
// }

export let cache : Array<number> = []; 
// array donde se guardan los resultados. Los parametros corresponden a la posición en el array

export default function memoize(callback: Function, num: number){
    return (...args: unknown[]) => {
      if(cache.hasOwnProperty(num)) {  // buscamos si num existe en cache
        return cache[num];  // si existe, devuelve el resultado que está en la posición num en el array cache
      } else {
        cache[num] = num * num;  // si no, se hace el calculo y lo almacena en el array
        return cache[num];
      }
    }
  }

// función para calcular al cuadrado
const getSquare = (n: number) => (n * n);
getSquare(9);

// funcion memoize simple para calcular al cuadrado
const memoizedGetSquare = () => {
  let cache: Array<number> = [];
  return (n: number) => {
    if (n in cache) {  // buscamos si n existe en el cache
      return cache[n];
    }
    else {
      let result = n * n;  // hacemos el calculo
      cache[n] = result;
      return result;
    }
  }
}
// returned function from memoizedAdd
const newGetSquare = memoizedGetSquare();
console.log(newGetSquare(9)); // calculo
console.log(newGetSquare(9)); // en el cache