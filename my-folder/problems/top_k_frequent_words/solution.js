// bucket sort solution 
var topKFrequent = function(words, k) {
    const freqMap = {}, bucket = [], output = []
    for(let word of words) freqMap[word] ? freqMap[word]++ : freqMap[word] = 1 
    
    for(let [word, freq] of Object.entries(freqMap)) {
        if(!bucket[freq]) bucket[freq] = [word];
        else bucket[freq].push(word);
    }
    for(let i = bucket.length - 1; i >= 1; i--) {
        if(bucket[i] === undefined) continue;
        output.push(...(bucket[i].sort()))
        if(output.length >= k) return output.slice(0, k)
    }
};