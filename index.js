/*!
 * kind-of-extra <https://github.com/tunnckoCore/kind-of-extra>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isGens = require('is-es6-generators')
var isError = require('is-typeof-error')
var isPromise = require('is-promise')
var isHybrid = require('is-hybrid')
var isStream = require('is-stream')
var kindOf = require('kind-of')

module.exports = function kindOfExtra (val) {
  if (isHybrid(val)) {
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
  if (isGens.isGenerator(val)) {
    return 'generator'
  }
  if (isGens.isGeneratorFunction(val)) {
    return 'generatorfunction'
  }

  return kindOf(val)
}
