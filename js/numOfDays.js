var monNumber = 4
var days = ['31' , '28','31' , '30','31' , '30','31' , '31','30' , '31','30' , '30']
if(monNumber>0 && monNumber<=12){
    console.log(days[monNumber-1])
}else{
    console.log('invalid')
}
