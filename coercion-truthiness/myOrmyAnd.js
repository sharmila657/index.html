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

function myAnd(c1,c2,c3){
    if(!c1){
        return c1;                           
    }
    else if(!c2){
        return c2
    }
    else{
        return c3
    }
}
// console.log(myOr(true, true, false))
// console.log(myAnd(true,true,false))
console.log(myAnd(1,0,1))



