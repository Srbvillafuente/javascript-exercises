const removeFromArray = function(arr, ...theArgs) {
    const deleteCount = 1;
    
    for (const args of theArgs){
        arr = arr.filter(num => num !== args);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
