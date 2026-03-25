const getTheTitles = function(arr){
    const result = arr.reduce(function(acc,item){
        if(!acc.includes(item.title)){
            acc.push(item.title);
        }
        return acc;
    },[])
    return result;
}


// Do not edit below this line
module.exports = getTheTitles;
