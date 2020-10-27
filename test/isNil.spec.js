import {
  isNil
} from '../src/index.js'
const chai = require('chai')
const expect = chai.expect

describe('Test isNil()', function () {
  it('should return the true when the input value is undefined', function () {
    const value = undefined
    const result = isNil(value)
    expect(result).to.eql(true)
  })

  it('should return the true when the input value is null', function () {
    const value = null
    const result = isNil(value)
    expect(result).to.eql(true)
  })
})
