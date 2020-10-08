/* Helper */
var err = new Error('value is not string');

/**
 * @param {any} value
 * @return {boolean}
 */
var isString = (value) => typeof value === 'string';

/**
 * @param {string} main
 * @param {string[]} rests
 * @param {number} i
 * @param {string} prefix
 * @return {string}
 */
var makePrefix = function (main, rests, i, prefix) {
  if (prefix.length === main.length) return prefix;
  const isCommon = rests.every((str) => {
    if (!isString(str[i]) || !isString(main[i])) {
      throw err; // break the process
    }
    return str[i] === main[i];
  });
  return isCommon ? makePrefix(main, rests, i + 1, prefix + main[i]) : prefix;
};

/* Main */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  return makePrefix(strs.shift(), strs, 0, '');
};
