import {
  defaultWhen
} from '../src/index.js'
const chai = require('chai')
const expect = chai.expect

describe('Test defaultWhen', function () {
  it('should return the default value when the predicate is false', function () {
    const defValue = 10
    const value = 6
    const predicate = (x) => x === 7
    const result = defaultWhen(predicate)(defValue)(value)
    expect(result).to.eql(defValue)
  })
})
