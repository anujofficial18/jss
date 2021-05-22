var n = parseInt(prompt('enter no.'))
for (var i=1 ;i<=10;i++)
{   var tabstr=' '
    for(var j=1;j<=n;j++)
    { tabstr += j + 'x'+i+'='+(i*j)+' '
   
        
        }
        console.log(tabstr)
    }
