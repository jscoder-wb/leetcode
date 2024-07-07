var findReplaceString = function(string, indices, sources, targets) {
    var result = string.split('');
    indices.forEach((value, i) => {
    var sourceChars = sources[i];
    var targetChars = targets[i];

	// slice end is not included
    if (string.slice(value, value + sourceChars.length) === sourceChars) {
      result[value] = [targetChars];
      var elementsToReplace = sourceChars.length - 1; //finding numbers of char to replace with empty string
      while (elementsToReplace > 0) {
        value += 1;
        result[value] = '';
        elementsToReplace -= 1;
      }
    }
  });
  return result.join(''); 
};