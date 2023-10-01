/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
const chai = require('chai');
const NumberValidator = require('../../app/numbers_validator.js');

describe('isNumberEven positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumberValidator();
  });
  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with en even number', () => {
    const validationResults = validator.isNumberEven(4);
    chai.expect(validationResults).to.be.true;
  });

  it('should throw an error when provided a string', () => {
    chai.expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });

  it('should return even numbers from array', () => {
    const validationResults = validator.getEvenNumbersFromArray([1, 2, 3, 4, 5, 6, 7]);
    chai.expect(validationResults).to.deep.equal([2, 4, 6]);
  });

  it('should throw an error when provided with not an array of "Numbers"', () => {
    chai.expect(() => {
      validator.getEvenNumbersFromArray(['1', '2', '3']);
    }).to.throw('[1,2,3] is not an array of "Numbers"');
  });

  it('should return true for an array of numbers', () => {
    const validationResults = validator.isAllNumbers([1, 2, 3, 4, 5, 6, 7]);
    chai.expect(validationResults).to.be.true;
  });

  it('should throw an error when provided with not an array', () => {
    chai.expect(() => {
      validator.isAllNumbers('222,6666,888');
    }).to.throw('[222,6666,888] is not an array');
  });

  it('should check the number is integer', () => {
    const validationResults = validator.isInteger(4);
    chai.expect(validationResults).to.be.true;
  });

  it('should throw an error when the value is not integer', () => {
    chai.expect(() => {
      validator.isInteger('aaa');
    }).to.throw('[aaa] is not a number');
  });
});
