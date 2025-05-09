// false -------------------------------

function canJump0(nums) {
  if (nums.length === 1) return true;
  let max = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (
      (nums[i] + i >= nums.length - 1 || nums[nums[i] + i - 1] !== 0) &&
      nums[i] !== 0
    ) {
      max = Math.max(max, nums[i] + i);
    }
  }
  return max >= nums.length - 1 ? true : false;
}

// --------------------------------------------------------------------------------------
// This approach only cares about how far you can get, not what values you land on.

function canJump(nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (maxReach < i) return false;
    else {
      maxReach = Math.max(maxReach, nums[i] + i);
    }
  }

  return true;
}

// console.log(canJump([2, 5, 0, 0])); // true
// console.log(canJump([5, 4, 0, 2, 0, 1, 0, 1, 0])); //false
// console.log(canJump([2, 3, 1, 1, 4]));
// console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([3, 0, 8, 2, 0, 0, 1]));
// console.log(canJump([0, 2]));
// console.log(canJump([0]));
// console.log(canJump([1, 0, 1, 0])); // false
// console.log(canJump([1, 1, 0, 1])); // false
// console.log(canJump([2, 0, 0])); // true
