const removeFromArray = function(arr, ...toRemove) {
    let newArr = []
    for (const item of arr) {
        if (!toRemove.includes(item)) {
            newArr.push(item)
        }
    }
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
