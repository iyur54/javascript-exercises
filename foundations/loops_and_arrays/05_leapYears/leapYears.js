const leapYears = function(year) {
    const isDivisibleByFour = year % 4 === 0
    const isCentury = year % 100 === 0
    const isDivisibleByFourHundred = year % 400 === 0

    if (isDivisibleByFour && !isCentury) {
        return true
    }
    if (isCentury && isDivisibleByFourHundred) {
        return true
    }
    return false
};

// Do not edit below this line
module.exports = leapYears;
