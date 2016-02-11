# [kind-of-extra][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Additional functionality to `kind-of` type check utility, support promises, generators, streams, errors. Like that `kindOf(new Error('foo')) === 'error'`.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i kind-of-extra --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
const kindOfExtra = require('kind-of-extra')
```

### [kindOfExtra](index.js#L38)
> Type check utility on steroids.

**Params**

* `val` **{Mixed}**: value to check what type is    
* `extra` **{Boolean}**: when `false` would work as expected for `generator` and `generator function`    
* `returns` **{String}**: type of the given `val`  

**Example**

```js
kindof(123) //=> 'number'
kindof('foo') //=> 'string'
kindof({a: 'b'}) //=> 'object'
kindof(new Error('foo')) //=> 'error'
kindof(Promise.resolve(42)) //=> 'promise'
kindof(function * () { yield 43 }) //=> 'generatorfunction'
kindof(function * () { yield 43 }, false) //=> 'function'
kindof((a, b) => {return a * b}) // => 'function'
```


## Related
- [assert-kindof](https://github.com/tunnckoCore/assert-kindof): Check native type of the given value and throw TypeError if not okey. Expressive, elegant, behavior-driven API, good descriptive default error messages, simple and clean syntax.
- [is-kindof](https://github.com/tunnckocore/is-kindof): Check type of given javascript value. Support promises, generators, streams, and native types. Thin wrapper around `kind-of` module.
- [is-hybrid](https://github.com/hybridables/is-hybrid): Check whether an object looks like Hybrid which is promises-a+ promise and callback api
- [is-promise](https://github.com/then/is-promise): Test whether an object looks like a promises-a+ promise
- [is-ansi](https://github.com/tunnckocore/is-ansi): Check that given string contain ANSI color codes, without CLI
- [is-hexcolor](https://github.com/tunnckocore/is-hexcolor): Check that given value is valid hex color, using `hex-color-regex` - the best regex for matching hex color values
- [kind-of](https://github.com/jonschlinkert/kind-of): Get the native type of a value.
- [kind-error](https://github.com/tunnckocore/kind-error): Base class for easily creating meaningful and quiet by default Error classes with sane defaults and assertion in mind.
- [is-missing](https://github.com/tunnckocore/is-missing): Check that given `name` or `user/repo` exists in npm registry or in github as user repository.
- [is-typeof-error](https://github.com/tunnckocore/is-typeof-error): Check that given value is any type of error and instanceof Error


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/kind-of-extra/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/kind-of-extra
[npmjs-img]: https://img.shields.io/npm/v/kind-of-extra.svg?label=kind-of-extra

[license-url]: https://github.com/tunnckoCore/kind-of-extra/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/kind-of-extra
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/kind-of-extra.svg

[travis-url]: https://travis-ci.org/tunnckoCore/kind-of-extra
[travis-img]: https://img.shields.io/travis/tunnckoCore/kind-of-extra.svg

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