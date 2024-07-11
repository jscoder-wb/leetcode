var getEncryptedString = function(s, k) {
    len = s.length
    k = k % len 
    return s.substr(k, len) + s.substr(0, k)
};