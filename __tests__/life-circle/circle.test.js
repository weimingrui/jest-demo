function beforTestInit() {
  global.testVal = 'peanut butter'
  console.log('beforTestInit end, do something...')
}
function afterTestInit() {
  console.log('afterTestInit end, do something...')
}
// Applies to all tests in this file， 如果没有异步设置，该方法是和beforeAll没有太大区别
beforeEach(() => {
  beforTestInit();
});

function fetchData(callback){
  callback(global.testVal)
}
test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
// Applies to all tests in this files, 全文件通用配置，不会多次执行初始化设置
afterAll(() => {
  afterTestInit();
});
//---作用域
function beforeFileDescribeTest(){}
describe('describe test module', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return beforeFileDescribeTest();
  });
  test('describe test 1', () => {
    expect('true').toMatch('true');
  });

  test('describe test 2', () => {
    expect(2).toBe(2);
  });
});