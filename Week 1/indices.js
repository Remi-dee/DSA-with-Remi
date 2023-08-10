function indices(nums, target) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(nums.length);
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(i);
        output.push(i);
        output.push(j);
        return output;
      }
    }
  }
}

console.log(indices([2,3,1], 5));
