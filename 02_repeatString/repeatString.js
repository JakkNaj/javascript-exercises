const repeatString = function(str, repTimes) {
    if (repTimes < 0) return "ERROR"
    let outcome = "";
    for (let i = 0; i < repTimes; i++){
        outcome += str
    }
    return outcome;
};

// Do not edit below this line
module.exports = repeatString;
