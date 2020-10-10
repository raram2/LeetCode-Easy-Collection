/* Helper */
var makeHashTable = function(str: string): object  {
    let obj = Object.create(null);
    for (let char of str) {
        if (obj[char]) obj[char]++;
        else obj[char] = 1;
    }
    return obj;
}

/* Main */
var isAnagram = function(s: string, t:string): boolean {
    if (s.length !== t.length) return false;
    let hashTable: object = makeHashTable(s);
    for (let char of t) {
        if (!hashTable[char]) return false;
        else hashTable[char]--;
    }
    return Object.values(hashTable).every(val => val === 0);
} 