function debounce(callback: Function, delay: number) {
    let timer: ReturnType<typeof setTimeout>;

    return (...args: unknown[]) => {
        clearTimeout(timer); // Limpia el timer para evitar la ejecución del callback
        timer = setTimeout(() => {  // Establece un nuevo timer que ejecutará el callback después del delay
            callback(...args)  // callback hell en este caso
        }, delay)
    }
}

function hello() {
    console.log("Hello!");
    let answer = <HTMLElement>document.getElementById('result');
    answer.innerHTML += "Hello!" + "<br>";
}

const debouncedGreet = debounce(hello, 1000);

let read = <HTMLElement>document.getElementById('result');
    read.addEventListener("click", debouncedGreet);