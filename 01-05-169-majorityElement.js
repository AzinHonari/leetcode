function majorityElement(nums) {
  nums = nums.sort();

  let counter = 1;
  let element = 0;
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
    console.log(
      `nums[i - 1]: ${nums[i - 1]}, nums[i]: ${nums[i]}, counter: ${counter}`
    );
    if (nums[i - 1] === nums[i]) counter++;
    if (nums[i - 1] !== nums[i] || i === nums.length - 1) {
      if (max < counter) {
        max = counter;
        element = nums[i - 1];
      }
      counter = 1;
    }
  }

  console.log(`element: ${element}, times: ${max}`);
}

majorityElement([2, 2, 1, 1, 1, 2, 2, 2, 1, 2, 5, 5, 5, 2]);

// ------------------------------------------------------------------------
// read the question carefully
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that
// the majority element always exists in the array.

function majorityElement(nums) {
  if (nums.length < 3) return nums[0];
  nums = nums.sort();

  // return nums[nums.length / 2];

  console.log(nums[Math.ceil((nums.length - 1) / 2)]);
}

majorityElement([2, 2, 1, 1, 1, 2, 2]);

// ------------------------------------------------

function majorityElement(nums) {
  if (nums.length < 3) return nums[0];

  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }

    if (map.get(nums[i]) > Math.ceil((nums.length - 1) / 2)) return nums[i];
  }
}

majorityElement([2, 2, 1, 1, 1, 2, 2]);

// -----------------------------------------------------------------------
// the best solution: O(n) time, O(1) space

function majorityElement(nums) {
  // Boyer Moore Voting Algorithm

  let candidate = nums[0];
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

majorityElement([2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2]);
