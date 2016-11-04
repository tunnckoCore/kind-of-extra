# [kind-of-extra][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Additional functionality to [kind-of][] type check utility. Support promises, generators, streams, errors.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
> Install with [npm](https://www.npmjs.com/)

```sh
$ npm i kind-of-extra --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const kindOfExtra = require('kind-of-extra')
```

## API

### [kindOfExtra](index.js#L42)
> Type check utility on steroids.

**Params**

* `val` **{Mixed}**: value to check what type is    
* `returns` **{String}**: type of the given `val`  

**Example**

```js
var kindof = require('kind-of-extra')

kindof(123) // => 'number'
kindof('foo') // => 'string'
kindof({a: 'b'}) // => 'object'
kindof(null) // => 'null'
kindof(undefined) // => 'undefined'
kindof(false) // => 'boolean'
kindof(true) // => 'boolean'
kindof(new Date()) // => 'date'

var through2 = require('through2')
kindof(through2()) // => 'stream'
kindof(new Error('foo')) // => 'error'
kindof(Promise.resolve(42)) // => 'promise'
kindof(function * () { yield 43 }) // => 'generatorfunction'
kindof((a, b) => { return a + b }) // => 'function'
```

## Related
- [always-done](https://www.npmjs.com/package/always-done): Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement for [async-done][] - pass 100… [more](https://github.com/hybridables/always-done#readme) | [homepage](https://github.com/hybridables/always-done#readme "Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement for [async-done][] - pass 100% of its tests plus more")
- [is-kindof](https://www.npmjs.com/package/is-kindof): Check type of given javascript value. Support promises, generators, streams, and native types. Thin wrapper around `kind-of` module. | [homepage](https://github.com/tunnckocore/is-kindof#readme "Check type of given javascript value. Support promises, generators, streams, and native types. Thin wrapper around `kind-of` module.")
- [kind-of-types](https://www.npmjs.com/package/kind-of-types): List of all javascript types. Used and useful for checking, validation, sanitizing and testing. Like isStream, isPromise, isWeakset and etc. | [homepage](https://github.com/tunnckocore/kind-of-types#readme "List of all javascript types. Used and useful for checking, validation, sanitizing and testing. Like isStream, isPromise, isWeakset and etc.")
- [minibase](https://www.npmjs.com/package/minibase): MiniBase is minimalist approach to Base - @node-base, the awesome framework. Foundation for building complex APIs with small units called plugins. Works well with most… [more](https://github.com/node-minibase/minibase#readme) | [homepage](https://github.com/node-minibase/minibase#readme "MiniBase is minimalist approach to Base - @node-base, the awesome framework. Foundation for building complex APIs with small units called plugins. Works well with most of the already existing [base][] plugins.")
- [mukla](https://www.npmjs.com/package/mukla): Small, parallel and fast test framework with suppport for async/await, promises, callbacks, streams and observables. Targets and works at node.js v0.10 and above. | [homepage](https://github.com/tunnckocore/mukla#readme "Small, parallel and fast test framework with suppport for async/await, promises, callbacks, streams and observables. Targets and works at node.js v0.10 and above.")
- [to-callback](https://www.npmjs.com/package/to-callback): Converts result-first callbacks to classic (node.js-style) error-first callbacks with 3 lines of code. Useful when you want to promisify result-first APIs (like emitter.on). Inspired by… [more](https://github.com/tunnckocore/to-callback#readme) | [homepage](https://github.com/tunnckocore/to-callback#readme "Converts result-first callbacks to classic (node.js-style) error-first callbacks with 3 lines of code. Useful when you want to promisify result-first APIs (like emitter.on). Inspired by [rfpify][] and probably used in it.")
- [try-catch-core](https://www.npmjs.com/package/try-catch-core): Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and used in higher-level libs such… [more](https://github.com/hybridables/try-catch-core#readme) | [homepage](https://github.com/hybridables/try-catch-core#readme "Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and used in higher-level libs such as [always-done][] to handle completion of anything.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/kind-of-extra/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[always-done]: https://github.com/hybridables/always-done
[async-done]: https://github.com/gulpjs/async-done
[base]: https://github.com/node-base/base
[dezalgo]: https://github.com/npm/dezalgo
[kind-of]: https://github.com/jonschlinkert/kind-of
[once]: https://github.com/isaacs/once
[rfpify]: https://github.com/samverschueren/rfpify

[npmjs-url]: https://www.npmjs.com/package/kind-of-extra
[npmjs-img]: https://img.shields.io/npm/v/kind-of-extra.svg?label=kind-of-extra

[license-url]: https://github.com/tunnckoCore/kind-of-extra/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/kind-of-extra.svg

[downloads-url]: https://www.npmjs.com/package/kind-of-extra
[downloads-img]: https://img.shields.io/npm/dm/kind-of-extra.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/kind-of-extra
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/kind-of-extra.svg

[travis-url]: https://travis-ci.org/tunnckoCore/kind-of-extra
[travis-img]: https://img.shields.io/travis/tunnckoCore/kind-of-extra/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/kind-of-extra
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/kind-of-extra.svg

[david-url]: https://david-dm.org/tunnckoCore/kind-of-extra
[david-img]: https://img.shields.io/david/tunnckoCore/kind-of-extra.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

