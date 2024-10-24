function myOr(b1,b2,b3){
if(b1){
    return b1;

}
else if(b2){
    return b2;

}
else{
    return b3;
}
}

function myAnd(c1,c3){
    if(!c1){
        return c3;                           
    }
    else{
        return c3
    }
}
// console.log(myOr(true, true, false))
console.log(myAnd(false,true))



