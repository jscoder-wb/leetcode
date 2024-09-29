/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(s, k) {
    const vowels = new Set('aeiou');
    let count = 0;

    for (let start = 0; start < s.length; start++) {
        let consonantCount = 0;
        let vowelCount = new Set();

        for (let end = start; end < s.length; end++) {
            const char = s[end];

            if (vowels.has(char)) {
                vowelCount.add(char);
            } else {
                consonantCount++;
            }

            if (vowelCount.size === 5 && consonantCount === k) {
                count++;
            }
        }
    }

    return count;
};