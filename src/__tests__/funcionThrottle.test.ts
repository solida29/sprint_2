import throttle from  "../functionThrottle"

jest.useFakeTimers();
it("calls the mock function callback after 1 second via advanceTimersByTime", () => {
  const functionCallback = jest.fn()
  const throttleMock = throttle(functionCallback, 1000);

  throttleMock();
  expect(functionCallback).toHaveBeenCalledTimes(1);

  jest.advanceTimersByTime(500);
  throttleMock();
  expect(functionCallback).toHaveBeenCalledTimes(1);

  jest.advanceTimersByTime(1000);
  throttleMock();
  expect(functionCallback).toHaveBeenCalledTimes(2);
  
});