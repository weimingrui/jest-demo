beforeAll(() => {
  global.testVal = 'peanut butter';
  console.log('1 - beforeAll', Date.now())
});
afterAll(() => console.log('1 - afterAll', Date.now()));
beforeEach(() => console.log('1 - beforeEach', Date.now()));
afterEach(() => console.log('1 - afterEach', Date.now()));
function fetchData(){
  return new Promise((resolve,reject)=>{
    setTimeout(resolve('peanut butter'), 2000)
  })
}
test('the data is peanut butter', async () => {
  const data = await fetchData();
  console.log('1 - test', Date.now())
  expect(global.testVal).toBe('peanut butter');
});

describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll', Date.now()));
  afterAll(() => console.log('2 - afterAll', Date.now()));
  beforeEach(() => console.log('2 - beforeEach', Date.now()));
  afterEach(() => console.log('2 - afterEach', Date.now()));
  test('the data is peanut butter', async () => {
    const data = await fetchData();
    console.log('2 - test', Date.now())
    expect(data).toBe('peanut butter');
  });
});
test('the data is peanut butter', async () => {
  const data = await fetchData();
  console.log('3 - test', Date.now())
  expect(data).toBe('peanut butter');
});