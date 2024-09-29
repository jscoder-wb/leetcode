/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
   let word = "a";
    
    while (word.length < k) {
        let nextWord = "";
        for (let char of word) {
            nextWord += String.fromCharCode(char.charCodeAt(0) + 1);
        }
        word += nextWord;
    }
    
    return word[k - 1]; 
};