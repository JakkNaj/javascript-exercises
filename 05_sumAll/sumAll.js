const sumAll = function(x, y) {
    if (x < 0 || y < 0) return "ERROR"
    if (typeof(x) !== "number" || typeof(y) !== "number") return "ERROR"
    let lower = x < y ? x : y;
    let higher = x > y ? x : y;
    let outcome = 0;
    while (lower !== higher){
        outcome += lower;
        lower++;
    }
    return outcome + higher;
};

// Do not edit below this line
module.exports = sumAll;
