var salary = 50000
var hraAmount = 0
var daAmount = 0

if(salary<=10000){
    hraAmount= (salary*20)/100
    daAmount= (salary*80)/100
}else if(salary<=20000){
    hraAmount= (salary*25)/100
    daAmount= (salary*85)/100
}else{
    hraAmount= (salary*30)/100
    daAmount= (salary*90)/100
}
var grosssalary=salary+hraAmount+daAmount
console.log(grosssalary)