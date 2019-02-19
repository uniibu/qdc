function isDate(val) {
  return val instanceof Date;
}

function arrayClone(arr, fn) {
  const temp = [];
  for (let i = 0, l = arr.length; i < l; i++) {
    const cur = arr[i];
    if (typeof cur !== 'object' || cur === null) {
      temp[i] = cur;
    } else if (isDate(cur)) {
      temp[i] = new Date(cur);
    } else {
      temp[i] = fn(cur);
    }
  }
  return temp;
}
function clone(o) {
  if (typeof o !== 'object' || o === null) return o;
  if (o instanceof Date) return new Date(o);
  if (Array.isArray(o)) return arrayClone(o, clone);
  const temp = {}
  for (let i = 0, col = Object.keys(o), len = col.length; i < len; i++) {
    const key = col[i];
    var cur = o[key];
    if (typeof cur !== 'object' || cur === null) {
      temp[key] = cur;
    } else if (isDate(cur)) {
      temp[key] = new Date(cur);
    } else {
      temp[key] = clone(cur);
    }
  }
  return temp;
}
module.exports = toClone => {
  return clone(toClone);
}