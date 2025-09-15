const palindromes = function (str) {
    let reversedArr = str.split('');
    reversedArr.reverse();

    let reversedStr = reversedArr.join('');
    
    return reversedStr === str;
};

// Do not edit below this line
module.exports = palindromes;
