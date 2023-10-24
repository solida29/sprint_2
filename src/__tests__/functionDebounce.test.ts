import debounce from  "../functionDebounce"

jest.useFakeTimers();
it("calls the mock function callback after 1 second via advanceTimersByTime", () => {
  const functionCallback = jest.fn()
  const debouncedMock = debounce(functionCallback, 1000);

  debouncedMock();
  jest.advanceTimersByTime(1100);

  expect(functionCallback).toHaveBeenCalledTimes(1);
});

//test 2

test("sayHello function after 1 second", () => {
  const sayHello = jest.fn(() => console.log("Hello world")); //pasamos la funcion por el mock de jest
  const debouncedHello = debounce(sayHello, 1000);

  debouncedHello();
  expect(sayHello).toHaveBeenCalledTimes(0);
  jest.advanceTimersByTime(1000); //permet de mettre un chrono a 1000 ms
  expect(sayHello).toHaveBeenCalledTimes(1);

});