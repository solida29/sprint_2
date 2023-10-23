export default function debounce(callback: Function, delay: number) {
    let timer: ReturnType<typeof setTimeout>;
    return () => {
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(callback, args)
        }, delay)
    }
}

export function sayHello() {
    console.log("Hello world");
}

export const debouncedHello = debounce(sayHello, 1000);

debouncedHello();