
function fetchData(){
  return new Promise((resolve,reject)=>{
    setTimeout(resolve('peanut butter'), 2000)
  })
}
test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});
test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});