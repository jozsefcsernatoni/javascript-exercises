const permutations = function (nums) {
 let res = [];

  function backtrack(start, end) {
    if (start === end) {
      res.push([...nums]);
    }
    for (let i = start; i < end; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrack(start + 1, end);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }
  backtrack(0, nums.length);
  return res;
};

let array = [1, 2];
console.log(permutations(array));

// Do not edit below this line
module.exports = permutations;
