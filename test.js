/*!
 * kind-of-extra <https://github.com/tunnckoCore/kind-of-extra>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var kindof = require('./index')

var thenParseJson = require('then-parse-json')
var gotHybrid = require('then-got')
var through2 = require('through2')

test('kind-of-extra:', function () {
  test('should work as `kind-of` sugar', function (done) {
    test.equal(kindof(123), 'number')
    test.equal(kindof('a'), 'string')
    test.equal(kindof({}), 'object')
    test.equal(kindof(/regex/), 'regexp')
    done()
  })
  test('should work for Promises, Hybrids, Streams and errors', function (done) {
    var promise = thenParseJson('{"foo":"bar"}')
    var hybrid = gotHybrid('http://www.tunnckocore.tk')
    var stream = through2()
    var error = new Error()

    test.equal(kindof(promise), 'promise')
    test.equal(kindof(hybrid), 'hybrid')
    test.equal(kindof(stream), 'stream')
    test.equal(kindof(error), 'error')
    done()
  })
  test('should work for es6 generators', function (done) {
    var generator = (function * () {yield 42})()
    var genfn = function * () {yield 42}

    test.equal(kindof(generator), 'generator')
    test.equal(kindof(genfn), 'generatorfunction')
    done()
  })
})
