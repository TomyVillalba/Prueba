function mostrar()
{
	var mesDelAño;

	mesDelAño = prompt("Ingrese un mes del año: ");
	mesDelAño = mesDelAño.toLocaleLowerCase();
	
	switch(mesDelAño)
	{
		
		case "Enero":
		case "Marzo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre": alert("Este mes tiene 31 dias");
		break;

		case "Febrero": alert("Tiene 28 dias");
		break;

		default: alert("Este mes tiene 30 dias");				
		
	}
}

