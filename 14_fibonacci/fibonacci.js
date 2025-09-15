const fibonacci = function(num) {
    let prev = 0;
    let cur = 1;

    for(i = 0; i < num-1; i++) {
        const curTemp = cur; //1 2
        cur = prev + cur;  //1. 2 3
        prev = curTemp; //1. 1 2
        
    }
    return cur;

};

// Do not edit below this line
module.exports = fibonacci;
