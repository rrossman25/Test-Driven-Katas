const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Returns string provided if no number is provided', () => {
      expect(wrap('hello world')).to.equal('hello world');
  });
  it('Returns the string with new lines at the number provided', () => {
      expect(wrap('hello guys', 5)).to.equal('hello\n guys');
  });
  it('Does not split up words', () => {
      expect(wrap('hello world', 5)).to.equal('hello\n     \nworld');
  })
});
