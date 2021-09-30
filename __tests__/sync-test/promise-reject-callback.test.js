function fetchData(){
  return Promise.reject('promise error')
}
test('the data is peanut butter', () => {
  return fetchData().catch(e => expect(e).toMatch('error'));
});
test('the fetch fails with an error', () => {
  return expect(fetchData()).rejects.toMatch('error');
});