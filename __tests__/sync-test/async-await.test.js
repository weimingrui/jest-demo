function fetchData(){
  return new Promise((resolve,reject)=>{
    setTimeout(resolve('peanut butter'), 2000)
  })
}
test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch('error');
  }
});