export default function throttle (callback: Function, delay: number) {
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