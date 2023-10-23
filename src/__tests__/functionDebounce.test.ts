import debounce from  "../functionDebounce"
// import sayHello from  "../functionDebounce"
// import debouncedHello from "../functionDebounce"

jest.useFakeTimers();
it("calls the mock function callback after 1 second via advanceTimersByTime", () => {
  const functionCallback = jest.fn()
  const debouncedMock = debounce(functionCallback, 1000);

  debouncedMock();
  jest.advanceTimersByTime(1100);

  expect(functionCallback).toHaveBeenCalledTimes(1);
});


it("calls the sayHello function callback after 1 second", () => {
  function sayHello() {
    console.log("Hello world");
  }
  const time = Date.now();
  const debouncedHello = debounce(sayHello, 1000);

  debouncedHello();

  expect(sayHello).toHaveBeenCalledTimes(1);
  expect(sayHello).toBeGreaterThanOrEqual(1000);

});