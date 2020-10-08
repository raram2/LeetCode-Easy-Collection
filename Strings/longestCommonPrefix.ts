interface IMakePrefix {
  (main: string, rests: string[], i: number, prefix: string): string;
}

var makePrefix: IMakePrefix = (main, rests, i, prefix): string => {
  if (prefix.length === main.length) return prefix;
  const isCommon: Boolean = rests.every((str) => str[i] === main[i]);
  return isCommon ? makePrefix(main, rests, i + 1, prefix + main[i]) : prefix;
};

var longestCommonPrefix = (strs: string[]): string => {
  if (!strs.length) return '';
  const main: string = strs.shift();
  return makePrefix(main, strs, 0, '');
};
