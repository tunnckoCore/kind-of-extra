/*!
 * kind-of-extra <https://github.com/tunnckoCore/kind-of-extra>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('mukla')
var kindof = require('./index')
var through2 = require('through2')

test('should work as kind-of', function (done) {
  test.strictEqual(kindof(123), 'number')
  test.strictEqual(kindof('a'), 'string')
  test.strictEqual(kindof({}), 'object')
  test.strictEqual(kindof(/regex/), 'regexp')
  done()
})

test('should work for es6 generators', function (done) {
  var generator = (function * () { yield 42 })()
  var genfn = function * () { yield 42 }

  test.strictEqual(kindof(generator), 'generator')
  test.strictEqual(kindof(genfn), 'generatorfunction')
  done()
})

test('should treat arrow functions as function', function (done) {
  var arrow = (a, b) => { return a * b }
  test.strictEqual(kindof(arrow), 'function')
  done()
})

test('should return "error" when input is instance of error', function (done) {
  test.strictEqual(kindof(new Error('foo')), 'error')
  done()
})

test('should return "promise" for promises', function (done) {
  var promise = Promise.resolve(123)
  var actual = kindof(promise)
  test.strictEqual(actual, 'promise')
  done()
})

test('should return "stream" for streams', function (done) {
  var stream = through2()
  test.strictEqual(kindof(stream), 'stream')
  done()
})
