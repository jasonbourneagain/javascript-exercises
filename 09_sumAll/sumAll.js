const sumAll = function(a, b) {
    let sum = a + b;
    for(i = a+1; i < b; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
