function onlyOne(arg1, arg2, arg3){
if(arg1 || arg2 || arg3 == true){
    return true;
}
else{
    return false;
}
}
console.log(onlyOne(false, false, false))