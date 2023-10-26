function debounce(callback: Function, delay: number) {
    let timer: ReturnType<typeof setTimeout>;

    return (...args: unknown[]) => {
        clearTimeout(timer); // Limpia el timer para evitar la ejecución del callback
        timer = setTimeout(() => {  // Establece un nuevo timer que ejecutará el callback después del delay
            callback(...args)  // callback hell en este caso
        }, delay)
    }
}

function helloD() {
    console.log("Hello with debounce!");
    let answer = <HTMLElement>document.getElementById('result');
    answer.innerHTML += "Hello with debounce!" + "<br>";
}

const debouncedGreet = debounce(helloD, 1000);

let read = <HTMLElement>document.getElementById('result');
    read.addEventListener("click", debouncedGreet);