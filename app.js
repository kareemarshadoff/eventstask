
function clickon(){
    var inp=document.getElementById('numValue').value;
    var opt='<option value="">Select</option>'
    for(let i=0;i<=inp;i++){
        opt +="<option>"+i+"</option>"
    }
    document.getElementById("selector").innerHTML=opt;
}

function selRes(){
var print=document.getElementById('selector').value;
 var arr=[];
 for(i=0;i<=print;i++){
    arr.push(i);
 }
 document.getElementById('result').innerHTML=arr.join('<br>');
}