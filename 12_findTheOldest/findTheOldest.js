const findTheOldest = function(array) {
    let i = 0;
    let oldestAge = 0;
    let oldestIndex = -1;
    while (i < array.length){
        if (!array[i].yearOfDeath){
            if (new Date().getFullYear() - array[i].yearOfBirth  > oldestAge){
                oldestAge = new Date().getFullYear() - array[i].yearOfBirth;
                oldestIndex = i;
            }
        } else if (array[i].yearOfDeath - array[i].yearOfBirth > oldestAge){
            oldestAge = array[i].yearOfDeath - array[i].yearOfBirth;
            oldestIndex = i;
        }
        i++;
    }
    return array[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
