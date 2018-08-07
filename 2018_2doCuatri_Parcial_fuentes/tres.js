function mostrar()
{
	var precio;
	var iva;
	var cantidad; 
	var nombre;
	var precioFinal;

	nombre = prompt("Ingrese el nombre del producto: ")
	precio = prompt("Ingrese el precio del pruducto: ");
	precio = parseInt(precio);
	cantidad = prompt("Ingrese la cantidad: ");
	precioFinal = precio + iva;
	iva = ((precio * 21) / 100) * cantidad;
	
	alert("Compro la cantidad " + cantidad + " del producto " + nombre + " pagando el precio de " + precio + iva + " con iva incluido");

}
