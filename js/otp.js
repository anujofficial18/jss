function generateOTP(){
    var digits = "0123456789";
    var otp = '';
    for(var i = 0; i<4 ; i++){
        otp += digits[Math.floor(Math.random()*10)];
    }
    return otp;
}
console.log(generateOTP());

function mixOtp(){
    var mixedalpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','x']
    var mixednum = ['1','2','3','4','5','6','7','8','9','0',]
    var OTP = ''
    for (var i= 1;i<=3;i++){
        OTP += mixedalpha[Math.floor(Math.random()*10)]+mixednum[Math.floor(Math.random()*10)];
    } 
    return OTP
}
console.log(mixOtp())