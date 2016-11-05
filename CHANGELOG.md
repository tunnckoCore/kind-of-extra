# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.0.4"></a>
## [1.0.4](https://github.com/tunnckocore/kind-of-extra/compare/v1.0.3...v1.0.4) (2016-11-05)


### Bug Fixes

* fix check for errors, remove check for hybrids ([82175a7](https://github.com/tunnckocore/kind-of-extra/commit/82175a7))





## 1.0.3 - 2016-02-11
- Release v1.0.3 / npm@v1.0.3
- no breaking changes: repo boilerplate stuff, license year range, travis builds, links
- simplify tests
- add readme docs and comments
- add `extra` option, that allows you to disable checks (pass `false`) for generator and generator function
  + actually it will return it's actual type (generator is object, generator function is function)
  + otherwise it will return `'generator'` when generator and `'generatorfunction'` for generator function

## 1.0.2 - 2016-02-10
- Release v1.0.1 / npm@v1.0.2
- lock for now to `then-got@1` not `then-got@2` used in tests
- `greenkeepr enable` the repo and bump deps

## 1.0.1 - 2015-06-30
- Release v1.0.1 / npm@v1.0.1
- bump deps
- switch to use strict `is-node-stream`
- update boilerplate

## 1.0.0 - 2015-06-30
- Release v1.0.0 / npm@v1.0.0
- add related section
- update usage
- update badges
- implement :star2:

## 0.0.0 - 2015-06-30
- first commits