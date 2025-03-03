const reverseString = function(string) {
    newString = "";
    for (let i = string.length -1; i > -1 ; i--){
        newString += string[i];
    }
    return newString;

    // Easier way is:
    // return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
