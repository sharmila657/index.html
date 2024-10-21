function howEqual(num1, num2){
    if(num1 === num2){   
        // it checks datatypes and value both
        return "strictly"
    }
    // this checks only value not datatypes
    else if(num1 == num2){
        return "losely"
    }
    else{
        return "not equal"
    }
}
// console.log(howEqual(10,"1"))
// console.log(howEqual(10,"10"))
console.log(howEqual(10,10))

