function debounce(callback: Function, delay: number) {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}

function sayHello() {
    console.log("Hello world");
}

const debouncedHello = debounce(sayHello, 1000);

debouncedHello();