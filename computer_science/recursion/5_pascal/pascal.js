const pascal = function (n) {
// Base Case: The 0th row is always just [1]
    if (n === 1) return [1]; 
    
    // Recursive Step: Fetch the previous row
    const prevRow = pascal(n - 1); 
    const currentRow = [1]; // Every row starts with 1
    
    // Calculate the middle elements
    for (let i = 1; i < prevRow.length; i++) {
        currentRow.push(prevRow[i - 1] + prevRow[i]);
    }
    
    currentRow.push(1); // Every row ends with 1
    return currentRow;
};


console.log(pascal(2))
// Do not edit below this line
module.exports = pascal;
