const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() //remove whitespaces using regex, the convert to lowerCase
    let reverseStr = str.split('').reverse().join(''); //reverse the string
    return str === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
