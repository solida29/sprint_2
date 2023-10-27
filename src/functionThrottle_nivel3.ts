function throttle (callback: Function, delay: number) {
    let timer: ReturnType<typeof setTimeout> | null = null;

    return (...args: unknown[]) => {
    if (timer === null) {  // si no hay timer en marcha
        callback(...args);  // la función se ejecuta
        timer = setTimeout(() => {
            timer = null;  // el timer vuelve a null otra vez para que el callback pueda ejecutarse otra vez una vez el delay pasado
        }, delay);
      }
    }
  }

function helloT() {
    console.log("Hello with throttle!");
    let answer = <HTMLElement>document.getElementById('result');
    answer.innerHTML += "Hello with throttle!" + "<br>";
}

const throttleGreet = throttle(helloT, 1000);

let consult = <HTMLElement>document.getElementById('result');
    consult.addEventListener("click", throttleGreet);