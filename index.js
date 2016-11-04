/*!
 * kind-of-extra <https://github.com/tunnckoCore/kind-of-extra>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

/**
 * > Type check utility on steroids.
 *
 * **Example**
 *
 * ```js
 * var kindof = require('kind-of-extra')
 *
 * kindof(123) // => 'number'
 * kindof('foo') // => 'string'
 * kindof({a: 'b'}) // => 'object'
 * kindof(null) // => 'null'
 * kindof(undefined) // => 'undefined'
 * kindof(false) // => 'boolean'
 * kindof(true) // => 'boolean'
 * kindof(new Date()) // => 'date'
 *
 * var through2 = require('through2')
 * kindof(through2()) // => 'stream'
 * kindof(new Error('foo')) // => 'error'
 * kindof(Promise.resolve(42)) // => 'promise'
 * kindof(function * () { yield 43 }) // => 'generatorfunction'
 * kindof((a, b) => { return a + b }) // => 'function'
 * ```
 *
 * @param  {Mixed} `val` value to check what type is
 * @return {String} type of the given `val`
 * @api public
 */

module.exports = function kindOfExtra (val) {
  if (val instanceof Error) {
    return 'error'
  }
  if (utils.isPromise(val)) {
    return 'promise'
  }
  if (utils.isNodeStream(val)) {
    return 'stream'
  }
  if (utils.isGens.isGenerator(val)) {
    return 'generator'
  }
  if (utils.isGens.isGeneratorFunction(val)) {
    return 'generatorfunction'
  }
  return utils.kindOf(val)
}
