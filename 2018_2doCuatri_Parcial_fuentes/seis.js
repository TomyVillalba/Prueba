function mostrar()
{
	var estacionDelAño;
	var temperatura;

	estacionDelAño = prompt("Ingrese una estacion del año: ");
	temperatura = prompt("Ingrese la temperatura: ");

	switch(estacionDelAño)
	{
		case "Invierno":
		{
			if(temperatura >= 1 || temperatura <= 5)
			{
				alert("Que fresquete!");
			}
			break;
		}
		case "Primavera":
		{
			if(temperatura > 32)
			{
				alert("Es un horno!");
			}
			else if(temperatura < 20)
			{
				alert("Que calorcito");
			}
			break;		
		}
		case "Verano":
		{
			if(temperatura > 32)
			{
				alert("Es un horno!");
			}
			else if(temperatura < 20)
			{
				alert("Que calorcito");
			}
			break;		
		}
		case "Otoño":
		{
			if(temperatura == 15)
			{
				alert("Esta lindo");
			}
			else if(temperatura < 15)
			{
				alert("Se viene el frio");
			}
			else if(temperatura > 15 && temperatura < 21)
			{
				alert("Esta re bueno");
			}
			else(temperatura > 21)
			{
				alert("Hace mucho calor para otoño");
			}
			
		}
	}
}
