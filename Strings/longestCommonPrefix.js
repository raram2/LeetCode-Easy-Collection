/* Helper */
var isString = (value) => typeof value === 'string';

var makePrefix = function (main, rests, i, prefix) {
  if (prefix.length === main.length) return prefix;
  const isCommon = rests.every((str) => {
    if (!isString(str[i]) || !isString(main[i])) {
      throw new TypeError('value must be string');
    }
    return str[i] === main[i];
  });
  return isCommon ? makePrefix(main, rests, i + 1, prefix + main[i]) : prefix;
};

/* Main */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  return makePrefix(strs.shift(), strs, 0, '');
};

/* Pseudo */
