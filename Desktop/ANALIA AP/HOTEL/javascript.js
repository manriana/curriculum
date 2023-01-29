

function mensaje() {

    var name = document.getElementsById("nombre").value;   
    alert("Hola " + name); 
 
}

function hola() {
    alert("HOLA");
}

function captura() {

    var nombre = document.getElementById("name").value;

    document.getElementById("prueba").innerHTML= "Hola "+ nombre;
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    var clave = document.getElementById('clave').value;
    if (clave.length < 6) {
      alert('La clave no es válida');
      return;
    }
    this.submit();
  }