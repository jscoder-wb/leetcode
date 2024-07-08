var shortestPalindrome = function(s) {
    const reversed = s.split('').reverse().join('');
    const len = s.length;
    
    for (let i = 0; i < len; i++) 
        if (s.slice(0, len - i) === reversed.slice(i)) 
          return reversed.slice(0, i) + s 
    return '';
};