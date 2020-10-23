import {
  returnIf
} from '../src/index.js'
const chai = require('chai')
const expect = chai.expect

describe('Test returnIf', function () {
  let value1, value2

  beforeEach(function () {
    value1 = 10
    value2 = 6
  })

  it('should return the first value if the predicate is true', function () {
    const testValue = true
    const result = returnIf((x) => x === true)(value1)(value2)(testValue)
    expect(result).to.eql(value1)
  })

  it('should return the second value if the predicate is false', function () {
    const testValue = false
    const result = returnIf((x) => x === true)(value1)(value2)(testValue)
    expect(result).to.eql(value2)
  })
})
