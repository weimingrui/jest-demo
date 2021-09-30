import { timerGame } from "../../timerGame.js"
const tick = () => new Promise(res => setImmediate(res));

export const advanceTimersByTime = async time => jest.advanceTimersByTime(time) && (await tick());

export const runOnlyPendingTimers = async () => jest.runOnlyPendingTimers() && (await tick());
 
export const runAllTimers = async () => jest.runAllTimers() && (await tick());

test("calls the callback after 1 second", () => {
  jest.useFakeTimers();
  const callback = jest.fn()
  timerGame(callback)
  // 在这个时间点，定时器的回调不应该被执行
  expect(callback).not.toBeCalled()

  // “快进”时间使得所有定时器回调被执行
  // jest.runAllTimers()
  jest.advanceTimersByTime(1000)
  // 现在回调函数应该被调用了！
  expect(callback).toBeCalled()
  expect(callback).toHaveBeenCalledTimes(1)
})
// it("calls the callback after 1 second via advanceTimersByTime", () => {
//   const callback = jest.fn()

//   timerGame(callback)

//   // 在这个时间点，回调函数不应该被执行
//   expect(callback).not.toBeCalled()

//   // “快进”时间，使得所有定时器回调都被执行
//   jest.advanceTimersByTime(1000)

//   // 到这里，所有的定时器回调都应该被执行了！ expect(callback).toBeCalled();
//   expect(callback).toHaveBeenCalledTimes(1)
// })
