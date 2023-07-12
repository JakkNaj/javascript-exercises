const reverseString = function(str) {
    let splitStr = str.split("")
    let reverseArr = splitStr.reverse()
    return reverseArr.join("")
};

// Do not edit below this line
module.exports = reverseString;
