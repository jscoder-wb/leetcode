// recursive solution
var validStrings = function (n) {
    let ans = [];
    function helper(currStr) {
        if (currStr.length === n) {
            ans.push(currStr);
            return;
        }
        let lastChar = currStr[currStr.length - 1];
        if (lastChar === '0') {
            helper(currStr + "1");
        } else {
            helper(currStr + "1");
            helper(currStr + "0");
        }
    }
    helper("0");
    helper("1");
    return ans;
};