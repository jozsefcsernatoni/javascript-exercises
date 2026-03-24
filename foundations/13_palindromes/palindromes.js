const palindromes = function (str) {
str=str.toLowerCase();

//filters out punctuation marks
const strArr=str.split("").filter(char=>{
    return /[a-zA-Z0-9]/.test(char);
});
const strArrReverse=[...strArr].reverse();
if(JSON.stringify(strArr)==JSON.stringify(strArrReverse)){
    return true;
} else return false;
};

console.log(palindromes('Racecar!'));
// Do not edit below this line
module.exports = palindromes;
