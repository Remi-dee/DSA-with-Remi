function indices(nums, target) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(nums.length);

    if (nums[i] + nums[i + 1] === target) {
      console.log(i);
       output.push(i);
       output.push(i+1);
       return output
    }
  }
}

console.log(indices([4, 2, 3], 5));
