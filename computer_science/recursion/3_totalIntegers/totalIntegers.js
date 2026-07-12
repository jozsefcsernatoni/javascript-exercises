const totalIntegers = function (obj) {
    // thing can be array, object or mixed

function getAllValues(o){
    let values=[]
    for(let key in o){
        const value=o[key]
        if(typeof value==="object" && value!==null) 
            values=values.concat(getAllValues(value))
        else values.push(value)
    }
    return values
}
if(typeof obj==="object" && obj!==null) 
{
return getAllValues(obj)
.filter(item=>Number.isInteger(item))
.length
}
}


console.log(totalIntegers(
        [
        NaN,
        [[{}], 555],
        "444",
        [],
        74.0,
        undefined,
        [[() => {}], [4], Infinity, [[[], -44.0], [null, "-4"], NaN[[]], 6]],
        () => {},
        [[], [-Infinity, ["4"], [4.7, -46.7], NaN]],
      ]))

// Do not edit below this line
module.exports = totalIntegers;



/*
const totalIntegers = function (thing,counter=0) {
    // thing can be array, object or mixed

const arr=function(t){
    if(Array.isArray(t)) return t.flat(Infinity)
    else if(typeof t==="object") return Object.values(t)
        else return counter=undefined
}

if(Array.isArray(arr(thing)))
{let head=arr(thing)[0]
let tail=arr(thing).slice(1,arr(thing).length)
if(Number.isInteger(head)) counter++ 
if(tail.length) {
    
    return totalIntegers(tail,counter)
}
}
return counter
};
*/

/*
let objVals=Object.values(thing)

objVals.forEach(el => {
    if(Number.isInteger(el)) counter++
});
return counter
let nestedObjs=objVals.filter((item)=>typeof item==="object" )//&& !Array.isArray(item)
return nestedObjs.some(element=> totalIntegers(element,counter))

*/