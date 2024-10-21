function howEqual(num1, num2){
    if(num1 === num2){
        return "strictly"
    }
    else if(num1 == num2){
        return "losely"
    }
    else{
        return "not equal"
    }
}
console.log(howEqual(10,"1"))