/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre;
    var edad;
    nombre = document.getElementById("elNombre").value;// lo que esta escrito en la caja de texto se copia en la variable nombre
    edad = document.getElementById("edad").value; // lo que esta escrito en la caja de texto se copia en la variable edad
alert("usted se llama" + nombre+" y tiene" + edad + "años");
}

