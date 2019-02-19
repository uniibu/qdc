const assert = require('assert')
const bench = require('fastbench')
const deepCopy = require('deep-copy')
const locloneDeep = require('lodash.clonedeep')
const fastCopy = require('fast-copy')
const cloneDeep = require('clone-deep');
const clone = require('clone');
const obj = require('./fixture.json')
const qdc = require('..')
const clonerfdc = require('rfdc')({proto:true})
const deepClone = require('deep-clone');
const max = 1000

var run = bench([
  function benchDeepCopy (cb) {
    let temp;
    for (var i = 0; i < max; i++) {
      temp = deepCopy(obj)
    }
    assert.deepStrictEqual(obj,temp);
    setImmediate(cb)
  },
  function benchClone (cb) {
    let temp;
    for (var i = 0; i < max; i++) {
      temp = clone(obj)
    }
     assert.deepStrictEqual(obj,temp);
    setImmediate(cb)
  },
  function benchLodashCloneDeep (cb) {
    let temp;
    for (var i = 0; i < max; i++) {
      temp = locloneDeep(obj)
    }
     assert.deepStrictEqual(obj,temp);
    setImmediate(cb)
  },
  function benchCloneDeep (cb) {
    let temp;
    for (var i = 0; i < max; i++) {
      temp = cloneDeep(obj)
    }
     assert.deepStrictEqual(obj,temp);
    setImmediate(cb)
  },
  function benchDeepClone (cb) {
    let temp;
    for (var i = 0; i < max; i++) {
      temp = deepClone(obj)
    }
     assert.deepStrictEqual(obj,temp);
    setImmediate(cb)
  },
  function benchFastCopy (cb) {
    let temp;
    for (var i = 0; i < max; i++) {
      temp = fastCopy(obj)
    }
     assert.deepStrictEqual(obj,temp);
    setImmediate(cb)
  },
  function benchrfdc (cb) {
    let temp;
    for (var i = 0; i < max; i++) {
      temp = clonerfdc(obj)
    }
     assert.deepStrictEqual(obj,temp);
    setImmediate(cb)
  },
  function benchqdc (cb) {
    let temp;
    for (var i = 0; i < max; i++) {
      temp = qdc(obj)
    }
     assert.deepStrictEqual(obj,temp);
    setImmediate(cb)
  }
], 100)

run(run)