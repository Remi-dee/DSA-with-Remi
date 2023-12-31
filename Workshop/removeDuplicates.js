/*Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

input = [1, 2, 3]

output=[]

iterate through input

detect the duplicate,
save them in a new array or modify input with new array
then get the length of the new array and return it



*/

function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let i = nums.length - 1;
    while (i > 0) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
        }
        i--;
    }
    console.log(nums)
    console.log(nums.length)
    return nums.length;
}

// Example usage



removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
