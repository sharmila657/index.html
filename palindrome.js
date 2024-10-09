// var isPalindrome = function(s) {
//     s=s.toLowerCase();
//     let storeStr=""
//     // console.log(s,"ss")
//     for(let i=0; i<s.length;i++){
//         if(s[i]===""||s[i]===":"||s[i]===","){
//           storeStr =s.splice(i,1)
           
//         }
//          let j=storeStr.length-1;
//             while(i<j){
//                 if(storeStr[i]===storeStr[j]){
//                     j--
//                     i++
//                     return true;
//                 }
//             }
//     }
//     return false
// };
// debugger
// let s = "A man, a plan, a canal: Panama"
// console.log(isPalindrome(s))


var firstUniqChar = function(s) {debugger
    for(let i=0;i<s.length;i++){
        let firstIndex = s.indexOf(s[i])
        let lastIndex = s.lastIndexOf(s[i])
        if(firstIndex === lastIndex){
            return i;
        }
    }
    return -1;
};
let  s = "leetcode"
console.log(firstUniqChar(s))
