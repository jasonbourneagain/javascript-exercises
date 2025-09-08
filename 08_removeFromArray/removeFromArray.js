const removeFromArray = function(array, b=0,c=0,d=0,e=0) {
    if(b != 0) {
        array = array.filter(item => item !== b);
    }
    if(c != 0) {
        array = array.filter(item => item !== c);
    }
    if(d != 0) {
        array = array.filter(item => item !== d);
    }
    if(e != 0) {
        array = array.filter(item => item !== e);
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
