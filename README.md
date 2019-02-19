# qdc
Quick Deep Clone

### Note
- Does not support Circular Objects
- Does not support Map, Set and their weak counterparts
- Supports Date and function/methods


### installation
- `npm install qdc` or `yarn add qdc`

### usage
```
const assert = require('assert');
const clone = require('qdc');
const obj = {a:[{b:{c:1}},{e:{f:2}}]}
const obj2 = clone(obj);
assert.deepStrictEqual(obj,obj2)

```
### benchmark
- `yarn bench` or `npm run bench`

```
benchDeepCopy*100: 811.853ms
benchClone*100: 3115.891ms
benchLodashCloneDeep*100: 2047.873ms
benchCloneDeep*100: 1260.834ms
benchDeepClone*100: 905.409ms
benchFastCopy*100: 1635.175ms
benchrfdc*100: 607.920ms
benchqdc*100: 404.111ms
```