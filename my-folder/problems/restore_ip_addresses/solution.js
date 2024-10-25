var restoreIpAddresses = function(s) {
    const result = []
    function permute(arr, str) {
        if(arr.length === 3) {
            if(isValid(str)) result.push([...arr, str]);
            return;
        }
        for(let i = 1; i < 4; i++) { // why 3 iterations => 255.length
            let subStr = str.slice(0, i);
            if(!isValid(subStr)) continue;
            permute([...arr, subStr], str.slice(i));
        }
    }
    function isValid(str) {
        if(+str > 255 || !str.length) return false;
        if(str.length >= 2 && str[0] === '0') return false;
        return true;
    }
    permute([], s);
    return result.map(x => x.join('.'))
};