const leapYears = function(usrYear) {
if(!(usrYear % 4) && (usrYear % 100)){
    return true;
} else if ( !(usrYear % 400)){
    return true;
} else {
    return false;
}
};

console.log(leapYears(2000));

// Do not edit below this line
module.exports = leapYears;
