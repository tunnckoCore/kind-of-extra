/*!
 * kind-of-extra <https://github.com/tunnckoCore/kind-of-extra>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var kindof = require('./index')
var through2 = require('through2')
var hybridify = require('hybridify')
var relike = require('relike')
var fs = require('fs')

test('should work as `kind-of` sugar', function (done) {
  test.strictEqual(kindof(123), 'number')
  test.strictEqual(kindof('a'), 'string')
  test.strictEqual(kindof({}), 'object')
  test.strictEqual(kindof(/regex/), 'regexp')
  done()
})

test('should work for Promises, Hybrids, Streams and Errors', function (done) {
  var promise = relike(fs.readFile, './package.json', 'utf8')
  var hybrid = hybridify(fs.readFile)('./package.json', 'utf8')
  var stream = through2()
  var error = new Error('foo')

  test.strictEqual(kindof(promise), 'promise')
  test.strictEqual(kindof(hybrid), 'hybrid')
  test.strictEqual(kindof(stream), 'stream')
  test.strictEqual(kindof(error), 'error')
  done()
})

test('should work for es6 generators', function (done) {
  var generator = (function * () { yield 42 })()
  var genfn = function * () { yield 42 }

  test.strictEqual(kindof(generator), 'generator')
  test.strictEqual(kindof(genfn), 'generatorfunction')
  done()
})

test('should treat hybrid as promise when `extra: false` (not as hybrid)', function (done) {
  var hybrid = hybridify(fs.readFile)('./package.json', 'utf8')
  test.strictEqual(kindof(hybrid, false), 'promise')
  done()
})

test('should treat generator as object (as normally would) when `extra: false`', function (done) {
  var generator = (function * () {
    /* istanbul ignore next */
    yield 55
  })()
  test.strictEqual(kindof(generator, false), 'object')
  done()
})

test('should treat generator function as function (as normally) when `extra: false`', function (done) {
  var genFunction = function * () {
    /* istanbul ignore next */
    yield [1, 2, 3]
  }
  test.strictEqual(kindof(genFunction, false), 'function')
  done()
})

test('should treat arrow functions as function', function (done) {
  var arrow = (a, b) => { return a * b }
  test.strictEqual(kindof(arrow), 'function')
  done()
})
