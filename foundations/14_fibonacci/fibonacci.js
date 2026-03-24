const fibonacci = function(usrNumber) {
usrNumber=Number(usrNumber);
if(usrNumber>=0){
const fiboArr=[0,1]; //initial values for the sequence

function createFibo(myNumber){
    if(myNumber=>2){
        for(let i=2;i<=myNumber;i++){
            fiboArr[i]=fiboArr[i-2]+fiboArr[i-1];
        }
    }
}
createFibo(usrNumber);
return fiboArr[usrNumber];
}else return "OOPS"
} ;


// Do not edit below this line
module.exports = fibonacci;
