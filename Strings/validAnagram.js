/* Helper */
/**
 * @param {string} str
 * @returns {object}
 */
// time: O(n), space: O(1)
// Although it uses extra space, size stays constant no matter how how large n is
var makeHashTable = function(str) {
    let obj = Object.create(null);
    for (let char of str) {
        if (obj[char]) obj[char]++;
        else obj[char] = 1;
    }
    return obj;
}

/* Main */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// time: O(n), space: O(1)
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let hashTable = makeHashTable(s);
    for (let char of t) {
        if (!hashTable[char]) return false;
        else hashTable[char]--;
    }
    return Object.values(hashTable).every(val => val === 0);
}