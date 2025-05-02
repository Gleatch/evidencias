function leer(){
    var nombre=document.forms["formulario"].elements[0].value;
    var clave=document.getElementById("pass").value;

    var car=document.getElementsByTagName("select")[0].value;

    var gen = document.getElementsByName("genero");
var g = "";
for(var i = 0; i < gen.length; i++){
    if(gen[i].checked){
        g = gen[i].value;
    }
}

var p = document.getElementById("privacidad").checked;

// Fixed variable name from 'genero' to 'g'
document.getElementById("datos").innerHTML = "<br>Nombre: " + nombre + 
    "<br>Password: " + clave + 
    "<br>Carrera: " + car + 
    "<br>Genero: " + g +
    "<br>Aceptó términos: " + (p ? "Sí" : "No");
}