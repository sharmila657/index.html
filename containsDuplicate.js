// var containsDuplicate = function(nums) {
//      for(let i = 0; i < nums.length; i++){
//          if(nums[i] === nums[i+1]){
//              return true
//          }
//      }
//      return false
//  };
//  let nums = [1,2,3,1]
//  console.log(containsDuplicate(nums))


//  var containsDuplicate = function(nums) {
//     for(let i = 0; i <= nums.length; i++){
//       for(let j = i + 1; j< nums.length; j++){
//           if(nums[i] === nums[j]){
//             return true
//         }
//       }
        
//     }
//     return false
// };

var longestCommonPrefix = function (strs) {
    debugger
    if (strs.length === 0) {
        return "";
    }

    let prefix = strs[0];

    for (let i = 1; i< strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === '') return ''
        }
    }
    return prefix;
};
let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))