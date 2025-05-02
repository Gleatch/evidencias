function enviar(){
	var p1=document.getElementsByName("respuesta1");
	var i, r1;
	for(i=0;i<p1.length;i++)
	{
		if(p1[i].checked){
			r1=p1[i].value;
		}
	}

	var p2=document.getElementsByName("respuesta2");
	var i, r2;
	for(i=0;i<p2.length;i++)
	{
		if(p2[i].checked){
			r2=p2[i].value;
		}
	}

	var r3=document.getElementById("respuesta3").value;

	var r4=document.getElementById("respuesta4").value;

	var p5=document.getElementsByName("respuesta5");
	var i, r5;
	for(i=0;i<p5.length;i++)
	{
		if(p5[i].checked){
			r5=p5[i].value;
		}
	}

	var r6=document.getElementById("respuesta6").value;

	var p7=document.getElementsByName("respuesta7");
	var i, r7;
	for(i=0;i<p7.length;i++)
	{
		if(p7[i].checked){
			r7=p7[i].value;
		}
	}

	var r8=document.getElementById("respuesta8").value;

	var r9=document.getElementById("respuesta9").value;

	var p10=document.getElementsByName("respuesta10");
	var i, r10;
	for(i=0;i<p10.length;i++)
	{
		if(p10[i].checked){
			r10=p10[i].value;
		}
	}
	
	var r11=document.getElementById("respuesta11").value;

	var p12=document.getElementsByName("respuesta12");
	var i, r12;
	for(i=0;i<p12.length;i++)
	{
		if(p12[i].checked){
			r12=p12[i].value;
		}
	}

	var r13=document.getElementById("respuesta13").value;

	var p14=document.getElementsByName("respuesta14");
	var i, r14;
	for(i=0;i<p14.length;i++)
	{
		if(p14[i].checked){
			r14=p14[i].value;
		}
	}

	var r15=document.getElementById("respuesta15").value;
	document.getElementById("datos").innerHTML=
	"\<br>Pregunta 1: "+r1+
	"\<br>Pregunta 2: "+r2+
	"\<br>Pregunta 3: "+r3+
	"\<br>Pregunta 4: "+r4+
	"\<br>Pregunta 5: "+r5+
	"\<br>Pregunta 6: "+r6+
	"\<br>Pregunta 7: "+r7+
	"\<br>Pregunta 8: "+r8+
	"\<br>Pregunta 9: "+r9+
	"\<br>Pregunta 10: "+r10+
	"\<br>Pregunta 11: "+r11+
	"\<br>Pregunta 12: "+r12+
	"\<br>Pregunta 13: "+r13+
	"\<br>Pregunta 14: "+r14+
	"\<br>Pregunta 15: "+r15;
}