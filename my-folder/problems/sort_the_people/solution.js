var sortPeople = function(names, heights) {
    const people = names.map((name, index) => ({name, height: heights[index]}));
    
    return people.sort((a, b) => b.height - a.height).map(({name}) => name);
};