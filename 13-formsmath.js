function sumar(){
    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").value;
    var res=parseInt(n1)+parseInt(n2);
    document.getElementById("resultado").innerHTML=res;
}

function restar(){
    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").value;
    var res=parseInt(n1)-parseInt(n2);
    document.getElementById("resultado").innerHTML=res;
}

function multir(){
    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").value;
    var res=parseInt(n1)*parseInt(n2);
    document.getElementById("resultado").innerHTML=res;
}

function divir(){
    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").value;
    var res=parseInt(n1)/parseInt(n2);
    document.getElementById("resultado").innerHTML=res;
}