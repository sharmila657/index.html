function onlyOne(arg1, arg2, arg3){
if(arg1 || arg2 || arg3){
    return true;
}
else{
    return false;
}
}
console.log(onlyOne(true, false, false))