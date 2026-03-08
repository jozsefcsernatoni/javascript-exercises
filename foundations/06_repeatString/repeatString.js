const repeatString = function(str,times) {
let fullText="";
if (times>=0){
    for(let i=0;i<times;i++){
    fullText+=str;
    }
}
 else {
    fullText='ERROR';
}
return fullText;
}

// Do not edit below this line
module.exports = repeatString;
