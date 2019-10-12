var btn=document.getElementById("calcular");
var numeroAveriguar;					
var numeroMod1;
var numeroMod2;
btn.addEventListener("click",inicio);



function calcularResiduo(numeroAveriguar,numeroMod1,numeroMod2){
	var contenedor1=document.getElementById("resultado1");
	var contenedor2=document.getElementById("resultado2");
	var contenedor3=document.getElementById("resultado3");

   if(numeroAveriguar%numeroMod1==0){
  
   	  var texto="el numero "+numeroAveriguar+" es divisor de "+numeroMod1;
   	  
   	  contenedor1.innerHTML=texto;
      contenedor3.innerHTML="";
   	 
   }


   if(numeroAveriguar%numeroMod2==0){
   	  
   	  var texto="el numero "+numeroAveriguar+" es divisor de "+numeroMod2;
   	  
   	   contenedor2.innerHTML=texto;
       contenedor3.innerHTML="";
   	  
   }
   if(numeroAveriguar%numeroMod1!=0 && numeroAveriguar%numeroMod2!=0){
 
     var texto="el numero "+numeroAveriguar+" no es divisor de "+numeroMod1+" ni de "+numeroMod2;
      
      contenedor3.innerHTML=texto;

     
   
}
if (numeroAveriguar%numeroMod1!=0) {
	contenedor1.innerHTML="";
	
}
if (numeroAveriguar%numeroMod2!=0) {
	contenedor2.innerHTML="";
	
}
}

function inicio(){

	numeroAveriguar=document.getElementById("numeroCalcular").value;//guradamos los valores digitados cuando se pulse clic en calcular
	numeroMod1=document.getElementById("divisor1").value;
	 numeroMod2=document.getElementById("divisor2").value;
	
	

calcularResiduo(numeroAveriguar,numeroMod1,numeroMod2);//llamamos la funcion que realiza la operacion
}



//funcion para agregar etiquetas p en el body NOTA::::no la estoy usando en este momento
function crearp(text,contenedor){
    var parrafo=document.createElement("p");//Crear un nodo tipo Element que representa el elemento
	var contenido=document.createTextNode(text);//Crear un nodo tipo Text que será el contenido del elemento
	contenedor.appendChild(contenido);//Hacer que el nodo Text sea hijo del nodo Element
	///document.body.append(parrafo);//Finalmente añadir el nodo Element a la página
}



