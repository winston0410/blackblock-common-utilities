import {
  when
} from '../src/index.js'
const chai = require('chai')
const expect = chai.expect

describe('Test when', function () {
  it('should the input value should be transformed when the predicate is true', function () {
    const transformFn = (x) => x + 3
    const value = 7
    const predicate = (x) => x === 7
    const result = when(predicate)(transformFn)(value)
    expect(result).to.eql(10)
  })
})
