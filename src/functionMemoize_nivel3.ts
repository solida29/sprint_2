
function memoGetSquare(){
  let cache : Array<number> = []; 
  // array donde se guardan los resultados. Los parametros corresponden a la posición en el array
  
  let numUserString = document.getElementById('numUser') as HTMLInputElement;
  let num = Number(numUserString.value);
  let getSquare: number;
  
  if(cache.hasOwnProperty(num)) {  // buscamos si num existe en cache
    getSquare = cache[num];  // si existe, devuelve el resultado que está en la posición num en el array cache
  } else {
    cache[num] = num * num;  // si no, se hace el calculo y lo almacena en el array
    getSquare = cache[num];
  }
  console.log(cache[num]);
  console.table(cache);

  let solution = <HTMLElement>document.getElementById('resultGetSquare');
  solution.innerHTML += num + " squared is " + getSquare + "<br>" + 
  "Cache is " + cache + "<br>";
}