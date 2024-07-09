var relativeSortArray = function (arr1, arr2) {
    let ans = [], map = {}

    for (let elem of arr1) {
        map[elem] ? map[elem]++ : map[elem] = 1
    }
    for (let elem of arr2) {
        if (map[elem] != undefined) {
            let newArr = Array(map[elem]).fill(elem)
            ans = [...ans, ...newArr]
            delete map[elem]
        }
    }
    // for remaining elements 
    let newArr = []
    for (let [elem, freq] of Object.entries(map)) {
        let temp = Array(freq).fill(elem)
        newArr.push(...temp)
    }
    newArr.sort((a, b) => a - b)
    return [...ans, ...newArr]
};