function mostrar()
{
	var num1;
	var num2;
	var num3;
	var mayor;
	var minimo;
	
	num1 = prompt("Ingrese un numero: ");
	num1 = parseInt(num1);
	num2 = prompt("Ingrese un numero: ");
	num2 = parseInt(num2);
	num3 = prompt("Ingrese un numero: ");
	num3 = parseInt(num3);

	if (num1 > num2 && num1 > num3)
	{
		mayor = num1;
		minimo = num2;
		minimo = num3;
	}
	else if(num2 > num1 && num2 > num3)
	{
		mayor = num2;
		minimo = num1;
		minimo = num3;
	}
	else 
	{
		mayor = num3;
		minimo = num1;
		minimo = num2;
		
	}

	alert("El numero mayor es " + mayor + " y el minimo es " + minimo);

}
