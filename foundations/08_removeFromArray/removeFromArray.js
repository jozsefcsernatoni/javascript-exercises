const removeFromArray = function(arr, ...toRemove) {


function removeOne(arr,item){
        //find the index of the paramater
        function checkParam(param){
            return param===item;
        }
        arr.splice(arr.findLastIndex(checkParam),1);
        pLength=toRemove.length;
    
}
//go through the parameter array and do the check for each item, 
// and loop until all occurences are removed
for (let i=0;i<toRemove.length;i++){
    while (arr.includes(toRemove[i])){
        removeOne(arr,toRemove[i]);
    }
}
    return arr;
};


console.log(removeFromArray([1, 2, 2, 4], "tacos")); // should remove 3 and return [1,4])
// Do not edit below this line
module.exports = removeFromArray;
