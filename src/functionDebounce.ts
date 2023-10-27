export default function debounce(callback: Function, delay: number) {
    let timer: ReturnType<typeof setTimeout>;

    return (...args: unknown[]) => {  // Devuelve una funcion anonima con todos los argumentos
        clearTimeout(timer); // Limpia el timer para evitar la ejecución del callback
        timer = setTimeout(() => {  // Establece un nuevo timer que ejecutará el callback después del delay
            callback(...args)  // Callback hell en este caso
        }, delay)
    }
}
