function is_perfect(number)
{
    var num = 0
    for (var i=1;i<=number/2;i++){
        if(number%i==0){
            num+=i
        }
    }
    if(num==number && num!=0){
        console.log("its perfect")
    }
    else{
        console.log("not perfect")
    }
}
is_perfect(56)