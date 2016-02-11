/*!
 * kind-of-extra <https://github.com/tunnckoCore/kind-of-extra>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isGens = require('is-es6-generators')
var isStream = require('is-node-stream')
var isError = require('is-typeof-error')
var isPromise = require('is-promise')
var isHybrid = require('is-hybrid')
var kindOf = require('kind-of')

/**
 * > Type check utility on steroids.
 *
 * **Example**
 *
 * ```js
 * kindof(123) // => 'number'
 * kindof('foo') // => 'string'
 * kindof({a: 'b'}) // => 'object'
 * kindof(new Error('foo')) // => 'error'
 * kindof(Promise.resolve(42)) // => 'promise'
 * kindof(function * () { yield 43 }) // => 'generatorfunction'
 * kindof(function * () { yield 43 }, false) // => 'function'
 * kindof((a, b) => { return a + b }) // => 'function'
 * ```
 *
 * @param  {Mixed} `val` value to check what type is
 * @param  {Boolean} `extra` when `false` would work as expected for `generator` and `generator function`
 * @return {String} type of the given `val`
 * @api public
 */
module.exports = function kindOfExtra (val, extra) {
  extra = typeof extra === 'boolean' ? extra : true

  if (extra && isHybrid(val)) {
    return 'hybrid'
  }
  if (isPromise(val)) {
    return 'promise'
  }
  if (isStream(val)) {
    return 'stream'
  }
  if (isError(val)) {
    return 'error'
  }
  if (extra && isGens.isGenerator(val)) {
    return 'generator'
  }
  if (extra && isGens.isGeneratorFunction(val)) {
    return 'generatorfunction'
  }

  return kindOf(val)
}
