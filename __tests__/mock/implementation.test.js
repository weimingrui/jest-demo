const myMockFn = jest.fn(cb => cb(null, true));
var mockfnval = false
myMockFn((err, val) => mockfnval=val);
test('mock function callback value', () => {
  expect(mockfnval).toEqual(true);
});

// 当你需要根据别的模块定义默认的Mock函数实现时，mockImplementation 方法是非常有用的
jest.mock('../../sum'); // this happens automatically with automocking
const sum = require('../../sum').mockName('sum test');

// sum is a mock function
sum.mockImplementation(() => 42).mockName('add42');
test('mock function default callback value', () => {
  expect(sum()).toEqual(42);
});
// 多次调用需返回不同结果的时候调用mockImplementationOnce，默认返回是jest.fn定义的返回
const myMockFnOnce = jest
  .fn(() => 'default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call');
  test('mock function default callback value', () => {
    expect(myMockFnOnce()).toEqual('first call');
    expect(myMockFnOnce()).toEqual('second call');
    expect(myMockFnOnce()).toEqual('default');
    expect(myMockFnOnce()).toEqual('default');
  });

// 链式调用test
const myObj = {
  otherMethod: jest.fn(()=>23),
  myMethod: jest.fn(()=>12).mockReturnThis(),
  myMethod2: jest.fn(function () {
    return this;
  })
};
test('mock function this callback value', () => {
  expect(myObj.myMethod().otherMethod()).toEqual(23);
  expect(myObj.myMethod2().otherMethod()).toEqual(23);
});