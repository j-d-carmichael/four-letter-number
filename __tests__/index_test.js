const fourLetterNumber = require('../index.js');

it('For "auth" should be 5046', () => {
  expect(fourLetterNumber('auth')).toBe(5046);
});

it('For "item" should be 5043', () => {
  expect(fourLetterNumber('item')).toBe(5043);
});

it('For "chan" should be 5022', () => {
  expect(fourLetterNumber('chan')).toBe(5022);
});

it('For "evnt" should be 5057', () => {
  expect(fourLetterNumber('evnt')).toBe(5057);
});


it('For "auth" should be 7046', () => {
  expect(fourLetterNumber('auth', 7000)).toBe(7046);
});

it('For "item" should be 7043', () => {
  expect(fourLetterNumber('item', 7000)).toBe(7043);
});

it('For "chan" should be 7022', () => {
  expect(fourLetterNumber('chan', 7000)).toBe(7022);
});

it('For "evnt" should be 7057', () => {
  expect(fourLetterNumber('evnt', 7000)).toBe(7057);
});

it('Should fail too many chars', (done) => {
  try{
    fourLetterNumber('evnta')
    done('It should have failed')
  } catch (e) {
    done()
  }
});

it('Should fail too few chars', (done) => {
  try{
    fourLetterNumber('nta')
    done('It should have failed')
  } catch (e) {
    done()
  }
});

it('Should fail non letter chars', (done) => {
  try{
    fourLetterNumber('nta3')
    done('It should have failed')
  } catch (e) {
    done()
  }
});
