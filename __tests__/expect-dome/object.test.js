/*
 * @Author: Arthur
 * @Date: 2021-10-04 17:42:38
 * @LastEditors: Arthur
 * @LastEditTime: 2021-10-04 17:43:57
 * @Description: file content
 */
describe('not.objectContaining', () => {
    const expected = { foo: 'bar' };

    it('matches if the actual object contain expected key: value pairs', () => {
        expect({foo: 'bar', bar: 'baz' }).toEqual(expect.objectContaining(expected));
    });
    it('matches if the actual object does not contain expected key: value pairs', () => {
        expect({ bar: 'baz' }).toEqual(expect.not.objectContaining(expected));
    });
});