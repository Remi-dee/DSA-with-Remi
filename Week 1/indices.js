function indices(nums, target) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(nums.length);
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(i);
        output.push(i);
        output.push(j);
        return output;
      }
    }
  }
}

console.log(indices([3,2,4], 6));
