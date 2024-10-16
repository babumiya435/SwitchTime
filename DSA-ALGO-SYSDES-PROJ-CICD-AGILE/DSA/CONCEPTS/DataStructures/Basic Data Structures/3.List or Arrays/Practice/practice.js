function twoSum(nums, target) {
    let n = nums.length;
    // brute force approach
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return "no such pair";
}

// let inputArray = [ 1, 4, 45, 6, 10, 8 ];
// let target = 55;
// console.log(twoSum(inputArray, target));

function threeSum(nums, target) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] === target) {
                    return [i, j, k];
                }
            }
        }
    }
    return "no such triplets";
}

function threeSumOptimised(nums, target) {
    let n = nums.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (map.has(target - nums[i] - nums[j])) {
                console.log(map);
                console.log(`${target} - ${nums[i]} - ${nums[j]} = ${target - nums[i] - nums[j]}`);
                return [map.get(target - nums[i] - nums[j]), i, j];
            } else {
                map.set(nums[i], i);
            }
        }
    }
}

function threeSumOptimisedSortTwoPointers(nums, target){
    let n = nums.length;
    nums.sort((a,b) => a - b);
    for(let i = 0; i < n-2; i++){
        let l = i + 1;
        let r = n-1;
        while(l < r){
            let sum = nums[i] + nums[l] + nums[r];
            if(sum === target){
                return [i, l, r];
            }
            if(sum > target){
                r--;
            }else{
                l++;
            }
        }

    }
}

let inputArray1 = [1, 4, 45, 6, 10, 8]; //[1, 4, 6, 8, 10, 45];
let target1 = 22;
console.log("threeSum",threeSum(inputArray1, target1));
console.log("threeSumOptimised",threeSumOptimised(inputArray1, target1));
console.log("threeSumOptimisedSortTwoPointers",threeSumOptimisedSortTwoPointers(inputArray1, target1));