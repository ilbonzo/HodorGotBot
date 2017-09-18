const hodorTalk = require('../../src/modules/hodorTalk');

test('get generic response', () => {
    expect(hodorTalk.getGenericResponse()).toContain('Hodor');
});

test('have a nice day response', () => {
    expect(hodorTalk.getHaveANiceDay('Matteo')).toEqual('Have a nice day Matteo');
});

test('odor by hodor response', () => {
    expect(hodorTalk.getOdorByHodor('lol')).toEqual('odor by hodor: lol');
});
