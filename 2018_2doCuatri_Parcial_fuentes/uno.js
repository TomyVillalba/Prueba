function mostrar()
{
	var ancho;
	var largo; 
	var perimetro;
	var litrosPint;

	largo = prompt("Ingrese el largo: ");
	largo = parseInt(largo);
	ancho = prompt("Ingrese el ancho: ");
	ancho = parseInt(ancho);

	perimetro = largo * ancho;
	
	litrosPint = perimetro + (largo * ancho);

	alert("El perimetro es " + perimetro + " y se necesitan " + litrosPint + " litros de pintura para pintar el perimetro"); 

}
