var stations = [
    {name:"MHOW", dist:0, prev:"", next:"VIKRANT" ,time:'0'}, 
    {name:"VIKRANT", dist:2, prev:"MHOW", next:"MITM",time:'1'}, 
    {name:"MITM", dist:4, prev:"VIKRANT", next:"RAU",time:'2'} ,
    {name:"RAU", dist:6, prev:"MITM", next:"SILICON",time:'3'}, 
    {name:"SILICON", dist:9, prev:"RAU", next:"IPS",time:'5'}, 
    {name:"IPS", dist:14, prev:"SILICON", next:"RAJIVGANDHI",time:'10'}, 
    {name:"RAJIVGANDHI", dist:16, prev:"IPS", next:"VISHNUPURI",time:'15'}, 
    {name:"VISHNUPURI", dist:16.5, prev:"RAJIVGANDHI", next:"BHANWARKUA",time:'20'}, 
    {name:"BHANWARKUA", dist:18, prev:"VISHNUPURI", next:"HOLKAR",time:'30'}, 
    {name:"HOLKAR", dist:21, prev:"BHANWARKUA", next:"INDIRAPRATIMA",time:'40'}, 
    {name:"INDIRAPRATIMA", dist:23, prev:"HOLKAR", next:"GEETABHAWAN",time:'50'}, 
    {name:"GEETABHAWAN", dist:25, prev:"INDIRAPRATIMA", next:"AICTSL",time:'60'}, 
    {name:"AICTSL", dist:29, prev:"GEETABHAWAN", next:"PALASIA",time:'65'}, 
    {name:"PALASIA", dist:31, prev:"AICTSL", next:"INDUSTRYHOUSE",time:'70'}, 
    {name:"INDUSTRYHOUSE", dist:33, prev:"PALASIA", next:"LIG",time:'75'}, 
    {name:"LIG", dist:35, prev:"INDUSTRYHOUSE", next:"MR9",time:'80'}, 
    {name:"MR9", dist:36, prev:"LIG", next:"RASOMA",time:'90'}, 
    {name:"RASOMA", dist:38, prev:"MR9", next:"MR10",time:'100'}, 
    {name:"MR10", dist:42, prev:"RASOMA", next:"DEWASNAKA",time:'110'}, 
    {name:"DEWASNAKA", dist:45, prev:"MR10", next:"",time:'120'}, 
]
function isconsicutive(src,dst){
    var consicutive = false
    for(var i =0 ; i<stations;i++){
        if(station[i]['name']==src){
        consicutive = (station[i]['prev']==dst || (station[i]['next']==dst))

    }
}
return consicutive
}
function getdistance(src,dst){
    var srcDst = 0 
    var dstDst = 0
    for(var i = 0;i<stations.length;i++){
        if(stations[i]['name'] == src){
            srcDst = stations[i]['dist']
        }
        if(stations[i]['name'] == dst){
            dstDst = stations[i]['dist']
        }
    }
    var dist = dstDst-srcDst
    dist = dist < 0 ? -1*dist : dist
    return dist
}
function getFare(source,destination){
    var fare = 0
    if(isconsicutive(source,destination)){
        fare = 5
    }else{
        var distance = getdistance(source,destination)
        if(distance<=3){
            fare = 5
        }else if(distance<=6){
            fare = 10
        }else{
            var extrafare = distance - 6
            fare = extrafare*1.5 + 10 
        }
    }
    fare = fare > 30 ? 30 : fare
    return fare
}
function gettime(time){
    var timeFare = 0
    // var time =  getdistance(source,destination)
    if(time<=10){
        fare = 0
    }else{
        var extratime = time - 10 
        var timeFare = extratime/5
        }
        return timeFare

}
var source = "BHANWARKUA"
var destination = "PALASIA"
var time = "100"
console.log(getFare(source, destination))
console.log(gettime(time))