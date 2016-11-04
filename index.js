/*!
 * kind-of-extra <https://github.com/tunnckoCore/kind-of-extra>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

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
