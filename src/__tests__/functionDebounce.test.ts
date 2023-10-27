import debounce from  "../functionDebounce"

jest.useFakeTimers();
it("calls the mock function callback after 1 second via advanceTimersByTime", () => {
  const functionCallback = jest.fn()  // Función mock de Jest
  const debouncedMock = debounce(functionCallback, 1000);

  debouncedMock();
  expect(functionCallback).not.toHaveBeenCalled();  // El callback no se ha llamado todavía
  jest.advanceTimersByTime(1000);  // Permite simular que ha pasado 1000 ms (delay)
  expect(functionCallback).toHaveBeenCalledTimes(1);  // El callback se ha llamado 1 vez
});

//test 2
test("sayHello function after 1 second", () => {
  const sayHello = jest.fn(() => console.log("Hello world")); // Pasamos la funcion por el mock de jest
  const debouncedHello = debounce(sayHello, 1000);

  debouncedHello();
  expect(sayHello).not.toHaveBeenCalled(); // La función sayHello no se ejecuta todavía
  jest.advanceTimersByTime(1000);  // Permite dejar pasar un tiempo a 1000 ms (delay)
  expect(sayHello).toHaveBeenCalledTimes(1);  // La funcion sayHello ha pasado 1 vez

});