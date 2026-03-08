const sumAll = function(nrOne,nrTwo) {
if (typeof(nrOne)!="number" || typeof(nrTwo)!="number" || nrOne<0 || nrTwo<0 || !Number.isInteger(nrOne) || !Number.isInteger(nrOne)){
    return 'ERROR';
} else {
    if (nrOne>nrTwo){
        let temp=nrOne;
        nrOne=nrTwo;
        nrTwo=temp;
    }
let sum=0;
for(let i=nrOne;i<=nrTwo;i++){
sum+=i;
}
return sum;
}
};

console.log(sumAll(1, 4)); // returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;
