var removeOccurrences = function(string, part) {
    while (1) {
        let idx = string.indexOf(part);
        let end = (idx + part.length) - 1;
        if (idx == -1) break
        else string = string.slice(0, idx) + string.slice(end + 1); 
        // slice(start, end) end index excluded 
    }
    return string;
};