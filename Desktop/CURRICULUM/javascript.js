function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function edad(){ 
    document.getElementById("datos").innerHTML = "Mi edad 46 años";
  }

  function correo(){ 
    document.getElementById("datos").innerHTML = "analiamanrique@yahoo.com.ar";
  }

  function telefono(){ 
    document.getElementById("datos").innerHTML = "11 5836 4051";
  }

  function domicilio(){ 
    document.getElementById("datos").innerHTML = "Calle 20 2926, Berazategui";
  }

  function mostrarb(input) {

   document.getElementById("banco").innerHTML = "Era Supervisor Operativo de una sucursal bancaria, realizaba tareas de control (de personal, legajos de clientes y de tesoreria). Asistía al gerente en el manejo de la sucural bancaria. Realiza también atención al cliente, manejo y resolución de reclamos" ; 
    
  }
    
   function mostrarc(input) {
    document.getElementById("ccentre").innerHTML = "Mis tareas en dicha institución era la realización de llamadas salientes para la venta de productos bancarios de forma telefónica.";
     }

   function mostrarp(input) {
    document.getElementById("parisi").innerHTML ="Me desempeñaba como asitente del dueño de la Pyme, realizaba tareas de atención a proveedores, fijación de precios control de stock y de recuadación.";
    
   }



  function mensaje() {

    var nombre = document.getElementById("name").value;

    document.getElementById("prueba").innerHTML=("Hola " + nombre+ "!!! Gracias por contactarme. En breve respondere tu consulta.");
}

function valida(){
  var name = document.getElementById("nombre");
  var email = document.getElementById("email");
  var coment = document.getElementById("comentario");

  if(name.value === "" || email.value === "" || coment.value === ""){
    alert ("Complete los datos faltantes.")
  }

     if(name.value !== "" & email.value !== "" &  coment.value !== ""){
    
      alert ("Hola " + name.value + "!!! Gracias por contactarme, en breve respondere tu mensaje.");

  }
  
}