function taxCalculator(price, state){
if(state == "ktm"){
    return price * 0.15;
}
else if(state == "jiri"){
    return price * 0.10;
}
else{
return 0;
}
}
console.log(taxCalculator(100, "ktm"))
console.log(taxCalculator(100, "jiri"))