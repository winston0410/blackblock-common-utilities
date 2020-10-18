import {
  defaultWhenEmpty
} from '../src/index.js'
const chai = require('chai')
const expect = chai.expect

describe('Test defaultWhenEmpty', function () {
  it('should return the default value when the input value is empty', function () {
    const defValue = 10
    const value = undefined
    const result = defaultWhenEmpty(defValue)(value)
    expect(result).to.eql(defValue)
  })
})
