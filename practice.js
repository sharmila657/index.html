var removeDuplicates = function(nums) {
    debugger;
    let i = 0;
    while(i< nums.length){
        let curVal =nums[i];
        let nextVal = nums[i + 1];
        if (curVal === nextVal){
            nums.splice(i + 1, 1)
        }
        else{
            i++;
        }
    }
    return nums
    
};


let nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))
