export function infiniteTimerGame(callback) {
  console.log('Interval Ready....go!');
  setTimeout(() => {
    console.log("Interval Time's up -- stop!");
    callback && callback();
    // 10秒钟后执行下一个
    setTimeout(() => {
      infiniteTimerGame(callback);
    }, 10000);
  }, 1000);
}