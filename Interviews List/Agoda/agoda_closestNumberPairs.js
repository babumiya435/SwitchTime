function agoda_closestNumberPairs(nums){
    let n = nums.length;
    nums.sort((a,b)=> b-a);
    let result = [];
    let minDiff = Infinity;
    for(let i = 0; i < n; i++){
        let diff = Math.abs(nums[i+1] - nums[i]);
        if(diff < minDiff){
            minDiff = diff;
            result.length = 0;
            // if(result.length && result[result.length-1][0] > Math.min(nums[i], nums[i+1])){
            //     result.shift([Math.min(nums[i], nums[i+1]),Math.max(nums[i], nums[i+1])]);
            // }else{
            //     result.push([Math.min(nums[i], nums[i+1]),Math.max(nums[i], nums[i+1])]);
            // }
            result.push([Math.min(nums[i], nums[i+1]),Math.max(nums[i], nums[i+1])]);
            // console.log(Math.min(nums[i], nums[i+1]),Math.max(nums[i], nums[i+1]));
        } else if (diff === minDiff){
            // result.push([Math.min(nums[i], nums[i+1]),Math.max(nums[i], nums[i+1])]);
            // console.log(Math.min(nums[i], nums[i+1]),Math.max(nums[i], nums[i+1]));
            if(result.length && result[result.length-1][0] > Math.min(nums[i], nums[i+1])){
                result.shift([Math.min(nums[i], nums[i+1]),Math.max(nums[i], nums[i+1])]);
            }else{
                result.push([Math.min(nums[i], nums[i+1]),Math.max(nums[i], nums[i+1])]);
            }
        }
    }

    return result;
}

let nums = [6,2,4,10]
console.log(agoda_closestNumberPairs(nums))