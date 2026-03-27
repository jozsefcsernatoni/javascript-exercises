const findTheOldest =  ((usrArr)=>{
  const newArr=[...usrArr];
  const result= newArr
  .map((item)=>{
    let age;
    if (item.hasOwnProperty("yearOfDeath")){
        age=Number(item.yearOfDeath)-Number(item.yearOfBirth);
    } else {
        age=new Date().getFullYear()-Number(item.yearOfBirth);
    }
    if(! newArr.includes(item.age))
    {
       item.age=age;
    }
    return item;
  },{})
  .reduce(function(prev, curr){
    return prev.age>curr.age ? prev: curr;
    },0)
    
  
  return result;
});


// Do not edit below this line
module.exports = findTheOldest;
