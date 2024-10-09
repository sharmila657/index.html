// var removeDuplicates = function(nums) {
//     let i = 0;
//     while(i< nums.length){
//         let curVal =nums[i];
//         let nextVal = nums[i + 1];
//         if (curVal === nextVal){
//             nums.splice(i + 1, 1)
//         }
//         else{  
//             i++;
//         }
//     }
//     return nums.length;
    
// };


// let nums = [0,0,1,1,1,2,2,3,3,4]
// console.log(removeDuplicates(nums))

// var maxProfit = function(prices) {
//     let maxProfit = 0;
  
//     for (let i = 1; i < prices.length; i++) {
//       // If the price increases, we can make a transaction on the same day
//       if (prices[i] > prices[i - 1]) {
//         maxProfit += prices[i] - prices[i - 1];
//       }
//     }
  
//     return maxProfit;
//   }
//   let prices =[7,1,5,3,6,4]
//   console.log(maxProfit(prices))

// var rotate = function(nums, k) {
//     const n = nums.length;
//     k = k % n; // Ensure k is within the range of array length

//     // Reverse the entire array
//     reverse(nums, 0, n - 1);
//     // Reverse the first k elements
//     reverse(nums, 0, k - 1);
//     // Reverse the remaining elements
//     reverse(nums, k, n - 1);
// };

// function reverse(nums, start, end) {
//     while (start < end) {
//         [nums[start], nums[end]] = [nums[end], nums[start]]; // Swap elements
//         start++;
//         end--;
//     }
// }


// var singleNumber = function (nums) {
//     let arr = nums.sort((a, b) => a - b); // Create a copy of the array and sort it
  
//     for (let i = 0; i <= nums.length - 1; i += 2) { // Iterate by 2
//       if (arr[i] !== arr[i + 1]) {
//         return arr[i];
//       }
//     }
  
//     return arr[arr.length - 1];  // Return the first non-matching pair
//   };

// var moveZeroes = (nums) => {
//     debugger
//     let j = 0;
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] != 0) {
//         nums[j++] = nums[i];
//       }
//     }
//     for (; j < nums.length; j++) {
//       nums[j] = 0;
//     }
//     return nums;
//   };
// let nums = [0,1,0,3,12]
// console.log(moveZeroes(nums))

// var moveZeroes = function(nums) {
//     debugger
//     let i=0
//     let j=0
//     while (j < nums.length) {
//     if (nums[i] === 0) {
//       nums.push(nums[i]);
//       nums.splice(i, 1);
//     }else
//     {
//     i++}
//         j++

//   }
//     return nums
// };
// let nums = [0,1,0,3,12]
// console.log(moveZeroes(nums))

// var isValidSudoku = function(board) {
// const map = {};                            // Map for storing our key-strings.
    
// for (let i = 0; i < 9; i++) {              // Outer-loop for rows.
//     for (let j = 0; j < 9; j++) {          // Inner-loop for cols.
        
//         if (board[i][j] === '.') continue; // Skip checking empty spaces.
        
//         let num = board[i][j],
//             x   = Math.floor(i / 3),       // We can iterate through each box
//             y   = Math.floor(j / 3);       // using indices (i, j) divided by 3.
            
//         let err = (map['r'+i+num] ||       // Check if any of the computed
//                    map['c'+j+num] ||       // key-strings already exist in
//                    map['b'+x+y+num]);      // our map object.
        
//         if (err) return false;             // If 'err' is true, board is invalid.
        
//         map['r'+i+num]   = 1;              // Add 'row' key-string to map.
//         map['c'+j+num]   = 1;              // Add 'col' key-string to map.
//         map['b'+x+y+num] = 1;              // Add 'box' key-string to map.
//     }
// }

// return true;                               // If no error, board is valid.
// };

// var rotate = function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr[i].length; j++) {
//         let temp = arr[i][j];
//         arr[i][j] = arr[j][i];
//         arr[j][i] = temp;
//     }
// }

// for(let i = 0; i < arr.length; i++) {
//     arr[i] =arr[i].reverse();
// }
// return arr
// };

// var rotate = function(matrix) {
//     const n = matrix.length;
    
//     // Step 1: Transpose the matrix
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             // Swap matrix[i][j] with matrix[j][i]
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//         }
//     }
    
//     // Step 2: Reverse each row of the transposed matrix
//     for (let i = 0; i < n; i++) {
//         matrix[i].reverse();
//     }
// };

// var reverseString = function(s) {
//     let start=0;
//   let end=s.length-1
//   while(start<=end){
//       [s[start],s[end]]=[s[end],s[start]]
//   start++
//   end--
// }
//   };

// var reverse = function(x) {
//     let rvs = 0

//     let original = x // if x is negative the then storing the originl value
//     if(x < 0) x = Math.abs(0 - x)// and converting it into positive

//     while (x > 0) {
//         let rem = x % 10
//         rvs = rvs * 10 + rem
//         x = Math.floor(x / 10)
//     } // reversing the number by performing operation

//     if (rvs >= Math.pow(2 , 31)) return 0 //if reversed number is greater than 32 bit integer then returning zero
    
//     if(original < 0) return -rvs//cheaking if original number is negative or not if yes then returning reversed value after converting it into negative
//     return rvs
// };

// var firstUniqChar = function(s) {
    
//     for(let i=0;i<s.length;i++){
      
//     let firstIndex = s.indexOf(s[i])
//     let lastIndex = s.lastIndexOf(s[i])
  
//   if(firstIndex === lastIndex){
//       return i
//   }
//     }

// return -1
// };

// var isAnagram = function(s, t) {

//     return (t.split('').sort().join('')) === (s.split('').sort().join(''))
    
// };
// var isAnagram = function(s, t) {
//     if(s.length !==t.length) return false;

//     if(s.split("").sort().join("")===t.split("").sort().join("")) return true;

//     return false;
// };

let array = [1,"a",2]
console.log(array.length)