const contains = function (obj,searchVal) {
//write a function to traverse the object

function getAllValues(o){
  let values=[]
  for(let k in o){
    const value=o[k]
    if(typeof value==="object" && value!==null && !Array.isArray(value))
      values=values.concat(getAllValues(value))
    else values.push(value)
  }
  return values
}
return getAllValues(obj).includes(searchVal)
}





const meaningOfLifeArray = [42];
  const object = {
                data: {
                  duplicate: "e",
                  stuff: {
                    thing: {
                      banana: NaN,
                      moreStuff: {
                        something: "foo",
                        answer: meaningOfLifeArray,
                      },
                    },
                  },
                  info: {
                    duplicate: "e",
                    magicNumber: 44,
                    empty: null,
                  },
                },
              };


console.log(contains(object,44))


// Do not edit below this line
module.exports = contains;


